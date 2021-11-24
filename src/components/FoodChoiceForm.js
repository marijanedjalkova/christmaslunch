import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormCheck from "react-bootstrap/FormCheck";
import { Radio, RadioGroup} from 'react-radio-group'
import choices  from './consts';
import Dietary from './Dietary';
import {isGFAvailable, isVegetarianAvailable, isVeganAvailable} from './util';
import  CheckBox  from './CheckBox';

class FoodChoiceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", starters: [], mains: [], desserts: [], macaroni: [], breads: [], burgers: [], loadedFries: [], sides: [], 
    isMartin: false, errors: {} };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateName = this.updateName.bind(this);

        this.handleCheckChildElement = this.handleCheckChildElement.bind(this);
        this.printOptionAsCheck = this.printOptionAsCheck.bind(this);
        this.changeGF = this.changeGF.bind(this);
        this.changeVegetarian = this.changeVegetarian.bind(this);
        this.changeVegan = this.changeVegan.bind(this);

        this.printGF = this.printGF.bind(this);
        this.printVegetarian = this.printVegetarian.bind(this);
        this.printVegan = this.printVegan.bind(this);
      }

      printGF = (optionName, courseName, onChangeFunction) => {
        if (isGFAvailable(optionName, courseName)){
            return (<FormCheck >
                        <FormCheck.Label>Do you want this Gluten Free?
                            <FormCheck.Input type="checkbox" onChange={(e) => onChangeFunction(optionName, courseName, e)} disabled={!this.state[courseName + "s"].find(e => e.option === optionName)}/>
                        </FormCheck.Label>
                    </FormCheck>)
        } else {
            return null;
        }
    }

    printVegetarian = (optionName, courseName, onChangeFunction) => {
        if (isVegetarianAvailable(optionName, courseName)){
            return (<FormCheck >
                        <FormCheck.Label>Do you want this Vegetarian?
                            <FormCheck.Input type="checkbox" onChange={(e) => onChangeFunction(optionName, courseName, e)} disabled={!this.state[courseName + "s"].find(e => e.option === optionName)}/>
                        </FormCheck.Label>
                    </FormCheck>)
        } else {
            return null;
        }
    }
    
    printVegan = (optionName, courseName, onChangeFunction) => {
        if (isVeganAvailable(optionName, courseName)){
            return (<FormCheck >
                        <FormCheck.Label>Do you want this Vegan?
                            <FormCheck.Input type="checkbox" onChange={(e) => onChangeFunction(optionName, courseName, e)} disabled={!this.state[courseName + "s"].find(e => e.option === optionName)}/>
                        </FormCheck.Label>
                    </FormCheck>)
        } else {
            return null;
        }
    }
      
      printOptionAsCheck = (option, i, menupart) => {
        return (<div class="course" key={i}><CheckBox value={option.option} description={option.description} className="radio-button menuEntryItem" handleCheckChildElement={this.handleCheckChildElement} menupart={menupart}/>
        <Dietary class="menuEntryItem" diet={option.diet}/>
        {this.printGF(option.option, menupart, this.changeGF) } 
        {this.printVegetarian(option.option, menupart, this.changeVegetarian) } 
        {this.printVegan(option.option, menupart, this.changeVegan) } 
        </div>  
    );
    }
    
    changeGF = (dishName, courseName, event) => {
      const menuChoiceName = courseName + "s"
      let items = [...this.state[menuChoiceName]]
      items.map((item) => {if (item.option === dishName) {item.GF = event.target.checked}})
      this.setState({[menuChoiceName] : items}, () => {console.log(this.state)})
    }

    changeVegetarian = (dishName, courseName, event) => {
      const menuChoiceName = courseName + "s"
      let items = [...this.state[menuChoiceName]]
      items.map((item) => {if (item.option === dishName) {item.vegetarian = event.target.checked}})
      this.setState({[menuChoiceName] : items}, () => {console.log(this.state)})
    }

    changeVegan = (dishName, courseName, event) => {
        const menuChoiceName = courseName + "s"
        let items = [...this.state[menuChoiceName]]
        items.map((item) => {if (item.option === dishName) {item.vegan = event.target.checked}})
        this.setState({[menuChoiceName] : items}, () => {console.log(this.state)})
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

      handleCheckChildElement = (event) => {
        let menuChoiceName = event.target.title + "s";
        if (event.target.checked){
            this.setState({
                [menuChoiceName] : this.state[menuChoiceName].concat({"option": event.target.value})
            }, () => {
                console.log(menuChoiceName + " is now")
                console.log(this.state[menuChoiceName])
            })
        } else {
            this.setState({
                [menuChoiceName] : this.state[menuChoiceName].filter(e => e.option !== event.target.value)
            }, () => {
                console.log(menuChoiceName + " is now")
                console.log(this.state[menuChoiceName])
            })
        }
        
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
                <Form.Label class="course-name">Starters:</Form.Label>
                <Row> 
                    <ul> 
                        {choices.starters.map((option, i)=>{ return this.printOptionAsCheck(option, i, "starter")})}
                    </ul>
                </Row>
            </Form.Group>
            {/* <Form.Group >
                <Form.Label class="course-name">Mains:</Form.Label>
                <Row> 
                    <ul> 
                        {choices.mains.map((option, i)=>{ return this.printOptionAsCheck(option, i, "main")})}
                    </ul>
                </Row>
            </Form.Group> */}
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