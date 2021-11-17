import FoodChoiceForm from './FoodChoiceForm';
import React from 'react';

export class Choose extends React.Component {
  constructor(props){
    super(props);
    this.state = {submitted: false}
    this.handleSubmission = this.handleSubmission.bind(this);
    this.printSuccess = this.printSuccess.bind(this);
  }

  handleSubmission = () => {
    console.log("submitted!")
    this.setState({
      submitted: true})
  }

  printSuccess = () => {
    return (<div>Thank you for your submission! You can check your choices in the "What did I choose?" section</div>)
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Please make food choices here:</h2>
        {this.state.submitted ? this.printSuccess() : <FoodChoiceForm onSuccess={this.handleSubmission}/>}
      </div>
    );
  }
}

  export default Choose;