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
import  CheckBox  from './CheckBox';

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
        this.state = { name: "", starters: [], mains: [], desserts: [], macaroni: [], breads: [], burgers: [], loadedFries: [], sides: [], 
    isMartin: false, errors: {} };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateStarters = this.updateStarters.bind(this);
        this.updateMains = this.updateMains.bind(this);
        this.updateDesserts = this.updateDesserts.bind(this);
        this.updateMacaroni = this.updateMacaroni.bind(this);
        this.updateBreads = this.updateBreads.bind(this);
        this.updateBurgers = this.updateBurgers.bind(this);
        this.updateLoadedFries = this.updateLoadedFries.bind(this);
        this.updateSides = this.updateSides.bind(this);

        this.handleCheckChildElement = this.handleCheckChildElement.bind(this);
        this.printOptionAsCheck = this.printOptionAsCheck.bind(this);
      }

      
      printOptionAsCheck = (option, i, menupart) => {
        return (<div class="course" key={i}><CheckBox value={option.option} description={option.description} className="radio-button menuEntryItem" handleCheckChildElement={this.handleCheckChildElement} menupart={menupart}/>
        <Dietary class="menuEntryItem" diet={option.diet}/></div>);
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
            "starters": this.state.starters,
            "mains": this.state.mains,
            "desserts": this.state.desserts,
            "macaroni": this.state.macaroni,
            "breads": this.state.breads,
            "burgers": this.state.burgers,
            "loadedFries": this.state.loadedFries,
            "sides": this.state.sides,
        };
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
            
            if (newName.toString().toLowerCase().replaceAll(/\s/g,'') === 'martin'){
                this.setState({
                    isMartin: true
                  })
            } else {
                this.setState({
                    isMartin: false
                  })
            }
            console.log(this.state)
        })
        
      } 

      updateStarters(event) {
        console.log("updating starter")
        console.log(event);
        this.setState({
          starters: event
        }, () => {
            console.log("starter is now " + this.state.starters);
            console.log(this.state);
        })
        
      }
      
      updateMains(event) {
        this.setState({
          mains: event
        }, () => {
            console.log("main is now " + this.state.mains);
            console.log(this.state);
        })
        
      } 

      updateDesserts(event) {
        this.setState({
          desserts: event
        }, () => {
            console.log("dessert is now " + this.state.desserts);
            console.log(this.state);
        })
        
      }
      
      updateMacaroni(event) {
        this.setState({
          macaroni: event
        }, () => {
            console.log("macaroni is now " + this.state.macaroni);
            console.log(this.state);
        })
        
      }

      updateBreads(event) {
        this.setState({
          breads: event
        }, () => {
            console.log("breads is now " + this.state.breads);
            console.log(this.state);
        })
        
      }

      updateBurgers(event) {
        this.setState({
          burgers: event
        }, () => {
            console.log("burgers is now " + this.state.burgers);
            console.log(this.state);
        })
        
      }
      
      updateLoadedFries(event) {
        this.setState({
          loadedFries: event
        }, () => {
            console.log("loaded fries is now " + this.state.loadedFries);
            console.log(this.state);
        })
        
      } 

      updateSides(event) {
        this.setState({
          sides: event
        }, () => {
            console.log("sides is now " + this.state.sides);
            console.log(this.state);
        })
        
      } 

      handleCheckChildElement = (event) => {
        console.log("in handlecheckedchildelement")
        
        let menuChoiceName = event.target.title + "s";
        if (event.target.checked){
            this.state[menuChoiceName].push(event.target.value)
        } else {
            this.state[menuChoiceName] = this.state[menuChoiceName].filter(e => e !== event.target.value);
        }
        console.log(menuChoiceName + " is now")
        console.log(this.state[menuChoiceName])
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
                <Form.Label class="course-name"> Select a Starter As a check:</Form.Label>
                <Row> 
                    <ul> 
                        {choices.starters.map((option, i)=>{ return this.printOptionAsCheck(option, i, "starter")})}
                        {printGF(this.state.starter, "starter", this.updateStarterGF, this.state.starterGF)}
                    </ul>
                </Row>
            </Form.Group>
            {/* <Form.Group>
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
            </Form.Group> */}
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