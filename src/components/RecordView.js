import React from 'react';
import choices  from './consts';

const printGF = (booleanToPrint) =>{
  if (booleanToPrint == undefined){
    return null;
  }
  if (booleanToPrint){
    return (<div>GF</div>)
  }
  return (<div>NOT GF</div>);
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
    return optionList.find(element => {return element.option === optionName}).description;
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
      <div>
        <div>
          <div>Starter:</div>
          <div>{printStarter(this.props.data.starter)}</div>
          {printGF(this.props.data.starterGF)}
        </div>
        <div>
          <div>Main:</div>
          <div>{printMain(this.props.data.main)}</div>
          {printGF(this.props.data.mainGF)}
        </div>
        <div>
          <div>Dessert:</div>
          <div>{printDessert(this.props.data.dessert)}</div>
          {printGF(this.props.data.dessertGF)}
        </div>
      </div>
    )
  }

}

export default RecordView;