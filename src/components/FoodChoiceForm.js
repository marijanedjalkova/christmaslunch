import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormCheck from "react-bootstrap/FormCheck";
import Feedback from "react-bootstrap/Feedback";
import { Radio, RadioGroup} from 'react-radio-group'
import choices  from './consts';
import Dietary from './Dietary';
import isGFAvailable from './util';

class FoodChoiceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", starter: "", starterGF: false, main: "", mainGF: false, 
        dessert: "", dessertGF: false,
    isMartin: false };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateStarter = this.updateStarter.bind(this);
        this.updateStarterGF = this.updateStarterGF.bind(this);
        this.updateMain = this.updateMain.bind(this);
        this.updateMainGF = this.updateMainGF.bind(this);
        this.updateDessert = this.updateDessert.bind(this);
        this.updateDessertGF = this.updateDessertGF.bind(this);

      }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state);
      var formData = {"name": this.state.name,
            "starter": this.state.starter,
            "starterGF": this.state.starterGF,
            "main": this.state.main,
            "mainGF": this.state.mainGF,
            "dessert": this.state.dessert,
            "dessertGF": this.state.dessertGF };
      fetch('https://28uc5uo954.execute-api.us-east-2.amazonaws.com/dev/lunchperson', {
        method: 'POST',
        body: JSON.stringify( formData ),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json())
        .then(json => console.log(json))
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
      
      updateStarterGF() {
        this.setState({
         starterGF : !this.state.starterGF
        }, () => {
            console.log("starter GF is now " + this.state.starterGF);
            console.log(this.state);
        })
        
      }

      updateMainGF() {
        this.setState({
         mainGF : !this.state.mainGF
        }, () => {
            console.log("main GF is now " + this.state.mainGF);
            console.log(this.state);
        })
        
      }

      updateDessertGF() {
        this.setState({
         dessertGF : !this.state.dessertGF
        }, () => {
            console.log("dessert GF is now " + this.state.dessertGF);
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
        <Form onSubmit={this.handleSubmit}>
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
                <Form.Label column sm={2}> Select a Starter:</Form.Label>
                <Col sm={8}>
                <RadioGroup name="starters" selectedValue={this.state.starter} onChange={this.updateStarter}>
                {choices.starters.map((option, i)=>{
                   return <div key={i}><Radio value={option.option} className="radio-button" />
                   {option.description}<Dietary diet={option.diet}/></div>
                })}
                </RadioGroup>
                {isGFAvailable(this.state.starter, "starter") && ( 
                    <FormCheck >
                        <FormCheck.Label>Do you want selected starter Gluten Free?
                            <FormCheck.Input type="checkbox" onChange={this.updateStarterGF} checked={this.state.starterGF}/>
                        </FormCheck.Label>
                    </FormCheck> )}
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>Select a Main:</Form.Label>
                <Col sm={8}>
                <RadioGroup name="mains" selectedValue={this.state.main} onChange={this.updateMain}>
                {choices.mains.map((option, i)=>{
                   return <div key={i}><Radio value={option.option} className="radio-button" />
                   {option.description}<Dietary diet={option.diet}/></div>
                })}
                </RadioGroup>
                {isGFAvailable(this.state.main, "main") && ( 
                    <FormCheck >
                        <FormCheck.Label>Do you want selected main Gluten Free?
                            <FormCheck.Input type="checkbox" onChange={this.updateMainGF} checked={this.state.mainGF}/>
                        </FormCheck.Label>
                    </FormCheck> )}
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>Select a Dessert:</Form.Label>
                <Col sm={8}>
                <RadioGroup name="desserts" selectedValue={this.state.dessert} onChange={this.updateDessert}>
                {choices.desserts.map((option, i)=>{
                   return <div key={i}><Radio value={option.option} className="radio-button" />
                   {option.description}<Dietary diet={option.diet}/></div>
                })}
                </RadioGroup>
                {isGFAvailable(this.state.dessert, "dessert") && ( 
                    <FormCheck >
                        <FormCheck.Label>Do you want selected dessert Gluten Free?
                            <FormCheck.Input type="checkbox" onChange={this.updateDessertGF} checked={this.state.dessertGF}/>
                        </FormCheck.Label>
                    </FormCheck> )}
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