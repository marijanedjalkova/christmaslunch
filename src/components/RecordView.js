import React from 'react';
import choices  from './consts';
import {isGFAvailable, isVegetarianAvailable, isVeganAvailable, getToppings, getCrumbs} from './util';

const printGF = (booleanToPrint, optionCourse, option) =>{
  let needToPrint = isGFAvailable(option.option, optionCourse)
  if (!needToPrint){
    console.log("no need to print GF", option.option, optionCourse)
    return null;
  }
  if (booleanToPrint){
    return (<div>(GF)</div>)
  }
  return (<div>(NOT GF)</div>);
}

const printVegetarian = (option, optionCourse) =>{
  let needToPrint = isVegetarianAvailable(option.option, optionCourse)
  if (!needToPrint){
    return null;
  }
  if (option.vegetarian){
    return (<div>(vegetarian)</div>)
  }
  return (<div>(NOT vegetarian)</div>);
}

const printVegan = (option, optionCourse, optionName) =>{
  let needToPrint = isVeganAvailable(option.option, optionCourse)
  if (!needToPrint){
    return null;
  }
  if (option.vegan){
    return (<div>(vegan)</div>)
  }
  return (<div>(NOT vegan)</div>);
}

const printToppings = (dish, optionCourse) =>{
  let needToPrint = getToppings(dish.option, optionCourse) !== undefined 
  if (!needToPrint){
    return null;
  }
  if (dish.toppings === undefined || dish.toppings.length === 0 ){
    return null;
  }
  return (<div>Toppings: {dish.toppings.join()}</div>);
}

const printCrumb = (dish, optionCourse) =>{
  let needToPrint = getCrumbs(dish.option, optionCourse) !== undefined 
  if (!needToPrint){
    console.log("no need to print", dish.option, optionCourse, getCrumbs(dish.option, optionCourse))
    return null;
  }
  if (dish.crumb === undefined || dish.crumb.trim() === "" ){
    return null;
  }
  return (<div>Crumb: {dish.crumb}</div>);
}

const printDish = (option, courseName) => {
  return findDescriptionFromList(option.option, choices[courseName + "s"]);
}

const findDescriptionFromList = (optionName, optionList) => {
    return findWholeItemFromList(optionName, optionList).description;
}

const findWholeItemFromList = (optionName, optionList) => {
  return optionList.find(element => {return element.option === optionName})
}

const printWholeCourse = (dishes, courseNameSingle) => {
  let courseNameHumanReadable = courseNameSingle
  if (courseNameHumanReadable === "loadedFries"){
    courseNameHumanReadable = "loaded fries"
  }
  let courseNameMultipleHR = courseNameHumanReadable + "s"
  if (courseNameMultipleHR === "macaronis"){
    courseNameMultipleHR = "macaroni"
  }
  if (courseNameMultipleHR === "loaded friess"){
    courseNameMultipleHR = "loaded fries"
  }
  let noChoiceMessage = "You did not choose any " + courseNameMultipleHR + "!";
  if (dishes === undefined || dishes.length === 0 ){
    return (<div>{noChoiceMessage}</div>);
  } 
  return (
  <div class="course">
    <div class="course-name">{courseNameMultipleHR}:</div>
    {dishes.map((dish, i) => {
      return (
        <div>
        <div class="course-value">{printDish(dish, courseNameSingle)}</div>
        <div class="course-value">{printGF(dish.GF, courseNameSingle, dish)}</div> 
        <div class="course-value">{printVegetarian(dish, courseNameSingle)}</div> 
        <div class="course-value">{printVegan(dish, courseNameSingle)}</div> 
        <div class="course-value">{printToppings(dish, courseNameSingle)}</div> 
        <div class="course-value">{printCrumb(dish, courseNameSingle)}</div> 
        </div>
      )
    }
    )}
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
        {printWholeCourse(this.props.data.starters, "starter")}
        {printWholeCourse(this.props.data.macaronis, "macaroni")}
        {printWholeCourse(this.props.data.breads, "bread")}
        {printWholeCourse(this.props.data.burgers, "burger")}
        {printWholeCourse(this.props.data.mains, "main")}
        {printWholeCourse(this.props.data.loadedFriess, "loadedFries")}
        {printWholeCourse(this.props.data.sides, "side")} 
        {printWholeCourse(this.props.data.desserts, "dessert")}
      </div>
    )
  }

}

export default RecordView;