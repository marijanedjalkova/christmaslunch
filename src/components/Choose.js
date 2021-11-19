import FoodChoiceForm from './FoodChoiceForm';
import React from 'react';
import Dietary from './Dietary';

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
      <div>
        <h2>Please make food choices here:</h2>
        {this.state.submitted ? this.printSuccess() : <div>
          <div class="pleaseOneLine"><Dietary diet={["vegetarian"]} class="inline-block"/><div class="inline-block"> - vegetarian</div></div>
          <div class="pleaseOneLine"><Dietary diet={["vegan"]} class="inline-block" /><div class="inline-block"> - vegan</div></div>
          <div class="pleaseOneLine"><Dietary diet={["GF"]} class="inline-block" /><div class="inline-block"> - gluten free</div></div>
          <div class="pleaseOneLine"><Dietary diet={["GFavailable"]} class="inline-block" /><div class="inline-block"> - gluten free option available, tick the box when prompted</div></div>
          <FoodChoiceForm onSuccess={this.handleSubmission}/></div>}
      </div>
    );
  }
}

  export default Choose;