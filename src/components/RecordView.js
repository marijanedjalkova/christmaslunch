import React from 'react';

class RecordView extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = { name: "", starter: "", starterGF: false, main: "", mainGF: false, 
    dessert: "", dessertGF: false, isMartin: false };
  }

  render(){
    return (
      <div>
      <div>starter:</div>
      <div>{this.state.starter}</div>
      </div>
    )
  }

}

export default RecordView;