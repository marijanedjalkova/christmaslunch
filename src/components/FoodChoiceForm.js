import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Radio, RadioGroup} from 'react-radio-group'

class FoodChoiceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", starter: "", starterGF: false, main: "", mainGF: false, 
        dessert: "", dessertGF: false,
    isMartin: false };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateStarter = this.updateStarter.bind(this);
        this.updateMain = this.updateMain.bind(this);
        this.updateDessert = this.updateDessert.bind(this);

      }
  
    handleSubmit(event) {
      console.log('submitted: ' + this.name.current.value);
      event.preventDefault();
    }

    updateName(event) {
        this.setState({
          name: event.target.value
        }, () => {
            let newName = '' + event.target.value;
            console.log('name is now: ' + newName);
            
            if (newName.toString().toLowerCase().replaceAll(/\s/g,'') === 'martin'){
                this.setState({
                    isMartin: true
                  })
            } else {
                this.setState({
                    isMartin: false
                  })
            }
            console.log(this.state);
        })
        
      } 

      updateStarter(event) {
        this.setState({
          starter: event
        }, () => {
            console.log("starter is now " + this.state.starter);
            console.log(this.state);
        })
        
      }
      
      updateMain(event) {
        this.setState({
          main: event
        }, () => {
            console.log("main is now " + this.state.main);
            console.log(this.state);
        })
        
      } 

      updateDessert(event) {
        this.setState({
          dessert: event
        }, () => {
            console.log("dessert is now " + this.state.dessert);
            console.log(this.state);
        })
        
      } 
  
    render() {
      return (
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                First name: 
                {this.state.isMartin &&<div>add first letter of your surname, there's two of you</div>}
                </Form.Label>
                <Col sm={8}>
                <Form.Control 
                    type="text" placeholder="Name" 
                    value={this.state.name} onChange={this.updateName}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                Select a Starter:
                </Form.Label>
                <Col sm={8}>
                <RadioGroup name="starters" selectedValue={this.state.starter} onChange={this.updateStarter}>
                    <Radio value="apple" className="radio-button" />Apple
                    <Radio value="apple2" className="radio-button" />Orange
                    <Radio value="apple3" className="radio-button" />Banana
                </RadioGroup>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                Select a Main:
                </Form.Label>
                <Col sm={8}>
                <RadioGroup name="mains" selectedValue={this.state.main} onChange={this.updateMain}>
                    <Radio value="apple" className="radio-button" />Apple
                    <Radio value="apple2" className="radio-button" />Orange
                    <Radio value="apple3" className="radio-button" />Banana
                </RadioGroup>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                Select a Dessert:
                </Form.Label>
                <Col sm={8}>
                <RadioGroup name="desserts" selectedValue={this.state.dessert} onChange={this.updateDessert}>
                    <Radio value="apple" className="radio-button" />Apple
                    <Radio value="apple2" className="radio-button" />Orange
                    <Radio value="apple3" className="radio-button" />Banana
                </RadioGroup>
                </Col>
            </Form.Group>
            
            <Button
                column="true"
                sm={2}
                type="submit"
                className="rounded-pill btn-success"
            >
                Submit
            </Button>
        </Form>
      );
    }
  }

  export default FoodChoiceForm;