import React from 'react';
import choices  from './consts';

const printGF = (booleanToPrint, optionCourse, optionName) =>{
  if (booleanToPrint === undefined){
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

const printMacaroni = (optionName, toppings, crumb) => {
  return findDescriptionFromList(optionName, choices.macaroni) + ", toppings: " + toppings.toString() + ", crumb: " + crumb;
}

const printBread = (optionName) => {
  return findDescriptionFromList(optionName, choices.breads);
}

const printBurger = (optionName) => {
  return findDescriptionFromList(optionName, choices.burgers);
}

const printLoadedFries = (optionName) => {
  return findDescriptionFromList(optionName, choices.loadedFries);
}

const printSide = (optionName) => {
  return findDescriptionFromList(optionName, choices.sides);
}

const findDescriptionFromList = (optionName, optionList) => {
    return findWholeItemFromList(optionName, optionList).description;
}

const findWholeItemFromList = (optionName, optionList) => {
  return optionList.find(element => {return element.option === optionName})}

const printWholeStarter = (dish, dishGF) => {
  var typeOfDish = "Starter";
  let noChoiceMessage = "You did not choose a " + typeOfDish + "!";
  if (dish === undefined || dish.trim() === "" ){
    console.log(typeOfDish + " is not there!")
    return (<div>{noChoiceMessage}</div>);
  } 
  console.log("starter is ");
  console.log(dish)
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
  if (dish === undefined || dish.trim() === "" ){
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
  if (dish === undefined || dish.trim() === "" ){
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

const printWholeMacaroni = (dish, toppings, crumb) => {
  var typeOfDish = "Macaroni";
  let noChoiceMessage = "You did not choose a " + typeOfDish + "!";
  if (dish === undefined || dish.trim() === "" ){
    return (<div>{noChoiceMessage}</div>);
  } 
  return (
  <div class="course">
          <div class="course-name">{typeOfDish}:</div>
          <div class="course-value">{printMacaroni(dish, toppings, crumb)}</div>
        </div>
  )
}

const printWholeBread = (dish, dishGF) => {
  var typeOfDish = "Bread";
  let noChoiceMessage = "You did not choose a " + typeOfDish + "!";
  if (dish === undefined || dish.trim() === "" ){
    return (<div>{noChoiceMessage}</div>);
  } 
  return (
  <div class="course">
          <div class="course-name">{typeOfDish}:</div>
          <div class="course-value">{printBread(dish)}</div>
          <div class="course-value">{printGF(dishGF, "breads", dish)}</div>
        </div>
  )
}

const printWholeBurger = (dish, dishGF) => {
  var typeOfDish = "Burger";
  let noChoiceMessage = "You did not choose a " + typeOfDish + "!";
  if (dish === undefined || dish.trim() === "" ){
    return (<div>{noChoiceMessage}</div>);
  } 
  return (
  <div class="course">
          <div class="course-name">{typeOfDish}:</div>
          <div class="course-value">{printBurger(dish)}</div>
          <div class="course-value">{printGF(dishGF, "burgers", dish)}</div>
        </div>
  )
}

const printWholeLoadedFries = (dish) => {
  var typeOfDish = "Loaded Fries";
  let noChoiceMessage = "You did not choose a " + typeOfDish + "!";
  if (dish === undefined || dish.trim() === "" ){
    return (<div>{noChoiceMessage}</div>);
  } 
  return (
  <div class="course">
          <div class="course-name">{typeOfDish}:</div>
          <div class="course-value">{printLoadedFries(dish)}</div>
        </div>
  )
}

const printWholeSides = (dishes) => {
  var typeOfDish = "Side(s)";
  let noChoiceMessage = "You did not choose a " + typeOfDish + "!";
  if (dishes === undefined || dishes === [] ){
    return (<div>{noChoiceMessage}</div>);
  } 
  return (
  <div class="course">
          <div class="course-name">{typeOfDish}:</div>
          <div class="course-value">{dishes.map(dish => printSide(dish))}</div>
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
        {printWholeMacaroni(this.props.data.macaroni, this.props.data.macaroniToppings, this.props.data.macaroniCrumb)}
        {printWholeBread(this.props.data.breads)}
        {printWholeBurger(this.props.data.burger, this.props.data.burgerGF)}
        {printWholeLoadedFries(this.props.data.loadedFries)}
        {printWholeSides(this.props.data.sides)} 
        {printWholeMain(this.props.data.main, this.props.data.mainGF)}
        {printWholeDessert(this.props.data.dessert, this.props.data.dessertGF)}
      </div>
    )
  }

}

export default RecordView;