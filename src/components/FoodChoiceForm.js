import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormCheck from "react-bootstrap/FormCheck";
import { Radio, RadioGroup} from 'react-radio-group'
import choices  from './consts';
import Dietary from './Dietary';
import isGFAvailable from './util';

const printOption = (option, i) => {
    return (<div class="course" key={i}><Radio value={option.option} className="radio-button menuEntryItem" />
    <div class="menuEntryItem">{option.description}</div><Dietary class="menuEntryItem" diet={option.diet}/></div>);
}

const printGF = (course, courseName, onChangeFunction, changeField) => {
    if (isGFAvailable(course, courseName)){
        return (<FormCheck >
                    <FormCheck.Label>Do you want selected {courseName} Gluten Free?
                        <FormCheck.Input type="checkbox" onChange={onChangeFunction} checked={changeField}/>
                    </FormCheck.Label>
                </FormCheck>)
    } else {
        return null;
    }
}

class FoodChoiceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", starter: "", starterGF: false, main: "", mainGF: false, 
        dessert: "", dessertGF: false,
    isMartin: false, errors: {} };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateStarter = this.updateStarter.bind(this);
        this.updateStarterGF = this.updateStarterGF.bind(this);
        this.updateMain = this.updateMain.bind(this);
        this.updateMainGF = this.updateMainGF.bind(this);
        this.updateDessert = this.updateDessert.bind(this);
        this.updateDessertGF = this.updateDessertGF.bind(this);

      }

    handleValidation(){
        let formIsValid = true;
        let errors = {};
        if(!this.state.name){
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if(typeof this.state.name !== "undefined"){
        if(!this.state.name.match(/^[a-zA-Z\s]+$/)){
            formIsValid = false;
            errors["name"] = "Only letters";
        }      	
        }
    
        if (this.state.name.toLowerCase().replaceAll(/\s/g,'') === "martin"){
            formIsValid = false;
            errors["name"] = "Please add first letter of your surname";
        }
        this.setState({errors: errors});
        return formIsValid;
    }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state);
      if (!this.handleValidation()){
          return null;
      }
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
        .then(res => {
            if (!res.ok) { throw res }
            return res.json()})
        .then(json => {
            this.setState({
                submitted: true,
                isError: false})
            this.props.onSuccess()
            console.log(json)})
        .catch((err) => {
            console.log(err); 
            err.text().then( errorMessage => {
              this.setState({
                isError: true,
                errorMessage : JSON.parse(errorMessage).message})
            })
            
          })
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
        <Form onSubmit={this.handleSubmit} >
            <Form.Group as={Row} id="nameRow">
                <Form.Label class="nameLabel col-sm-4">
                First name: 
                {this.state.isMartin &&<div>add first letter of your surname, there's two of you</div>}
                </Form.Label>
                <Col sm={6}>
                <Form.Control 
                    type="text" placeholder="First Name" 
                    value={this.state.name} onChange={this.updateName}/>
                    <span className="error">{this.state.errors["name"]}</span>
                </Col>
            </Form.Group>
            <div class="menu">
            <Form.Group >
                <Form.Label class="course-name"> Select a Starter:</Form.Label>
                <Row>
                <RadioGroup name="starters" selectedValue={this.state.starter} onChange={this.updateStarter}>
                {choices.starters.map((option, i)=>{ return printOption(option, i)})}
                </RadioGroup>
                {printGF(this.state.starter, "starter", this.updateStarterGF, this.state.starterGF)}
                </Row>
            </Form.Group>
            <Form.Group>
                <Form.Label class="course-name">Select a Main:</Form.Label>
                <Col>
                <RadioGroup name="mains" selectedValue={this.state.main} onChange={this.updateMain}>
                {choices.mains.map((option, i)=>{return printOption(option, i)})}
                </RadioGroup>
                {printGF(this.state.main, "main", this.updateMainGF, this.state.mainGF)}
                </Col>
            </Form.Group>
            <Form.Group>
                <Form.Label class="course-name">Select a Dessert:</Form.Label>
                <Col>
                <RadioGroup name="desserts" selectedValue={this.state.dessert} onChange={this.updateDessert}>
                {choices.desserts.map((option, i)=>{return printOption(option, i)})}
                </RadioGroup>
                {printGF(this.state.dessert, "dessert", this.updateDessertGF, this.state.dessertGF)}
                </Col>
            </Form.Group>
            </div>
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