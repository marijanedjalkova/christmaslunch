import React from 'react';

const printGF = (booleanToPrint) =>{
  if (booleanToPrint == undefined){
    return null;
  }
  if (booleanToPrint){
    return (<div>GF</div>)
  }
  return (<div>NOT GF</div>);
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
      <div>{this.props.data.starter}</div>
      {printGF(this.props.data.starterGF)}
      </div>
      <div>
      <div>Main:</div>
      <div>{this.props.data.main}</div>
      {printGF(this.props.data.mainGF)}
      </div>
      <div>
      <div>Dessert:</div>
      <div>{this.props.data.dessert}</div>
      {printGF(this.props.data.dessertGF)}
      </div>
      </div>
    )
  }

}

export default RecordView;