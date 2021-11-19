import React from 'react';
import choices  from './consts';

const printGF = (booleanToPrint, optionCourse, optionName) =>{
  if (booleanToPrint == undefined){
    return null;
  }
  var needToPrint = findWholeItemFromList(optionName, choices[optionCourse]).diet.includes("GFavailable");
  if (!needToPrint){
    return null;
  }
  if (booleanToPrint){
    return (<div>(GF)</div>)
  }
  return (<div>(NOT GF)</div>);
}

const printStarter = (optionName) => {
  return findDescriptionFromList(optionName, choices.starters);
}

const printMain = (optionName) => {
  return findDescriptionFromList(optionName, choices.mains);
}

const printDessert = (optionName) => {
  return findDescriptionFromList(optionName, choices.desserts);
}

const findDescriptionFromList = (optionName, optionList) => {
    return findWholeItemFromList(optionName, optionList).description;
}

const findWholeItemFromList = (optionName, optionList) => {
  return optionList.find(element => {return element.option === optionName})}

const printWholeStarter = (dish, dishGF) => {
  var typeOfDish = "Starter";
  let noChoiceMessage = "You did not choose a " + typeOfDish + "!";
  if (dish == undefined){
    return (<div>{noChoiceMessage}</div>);
  } 
  return (
  <div class="course">
          <div class="course-name">{typeOfDish}:</div>
          <div class="course-value">{printStarter(dish)}</div>
          <div class="course-value">{printGF(dishGF, "starters", dish)}</div>
        </div>
  )
}

const printWholeMain = (dish, dishGF) => {
  var typeOfDish = "Main";
  let noChoiceMessage = "You did not choose a " + typeOfDish + "!";
  if (dish == undefined){
    return (<div>{noChoiceMessage}</div>);
  } 
  return (
  <div class="course">
          <div class="course-name">{typeOfDish}:</div>
          <div class="course-value">{printMain(dish)}</div>
          <div class="course-value">{printGF(dishGF, "mains", dish)}</div>
        </div>
  )
}

const printWholeDessert = (dish, dishGF) => {
  var typeOfDish = "Dessert";
  let noChoiceMessage = "You did not choose a " + typeOfDish + "!";
  if (dish == undefined){
    return (<div>{noChoiceMessage}</div>);
  } 
  return (
  <div class="course">
          <div class="course-name">{typeOfDish}:</div>
          <div class="course-value">{printDessert(dish)}</div>
          <div class="course-value">{printGF(dishGF, "desserts", dish)}</div>
        </div>
  )
}

class RecordView extends React.Component {

  render(){
    if (!this.props.data.resultReceived){
      return null;
    }
    if (this.props.data.isError){
      return (<div>{this.props.data.errorMessage}</div>)
    }
    return (
      <div class="menu">
        {printWholeStarter(this.props.data.starter, this.props.data.starterGF)}
        {printWholeMain(this.props.data.main, this.props.data.mainGF)}
        {printWholeDessert(this.props.data.dessert, this.props.data.dessertGF)}
      </div>
    )
  }

}

export default RecordView;