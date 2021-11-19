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
        <div class="course">
          <div class="course-name">Starter:</div>
          <div class="course-value">{printStarter(this.props.data.starter)}</div>
          <div class="course-value">{printGF(this.props.data.starterGF, "starters", this.props.data.starter)}</div>
        </div>
        <div class="course">
          <div class="course-name">Main:</div>
          <div class="course-value">{printMain(this.props.data.main)}</div>
          <div class="course-value">{printGF(this.props.data.mainGF, "mains", this.props.data.main)}</div>
        </div>
        <div class="course">
          <div class="course-name">Dessert:</div>
          <div class="course-value">{printDessert(this.props.data.dessert)}</div>
          <div class="course-value">{printGF(this.props.data.dessertGF, "desserts", this.props.data.dessert)}</div>
        </div>
      </div>
    )
  }

}

export default RecordView;