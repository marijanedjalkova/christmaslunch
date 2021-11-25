import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import RecordView from './RecordView'
import CostView from './CostView'
import './Record.css';

class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", starters: [], mains: [], desserts: [], macaronis: [], breads: [], burgers: [], loadedFriess: [], sides: [], 
        isMartin: false,resultReceived: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateName = this.updateName.bind(this);
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
  })
}

handleSubmit(event) {
  event.preventDefault();
  fetch('https://28uc5uo954.execute-api.us-east-2.amazonaws.com/dev/lunchperson?name=' + this.state.name, {
    method: 'GET'
  })
    .then(res => {
      if (!res.ok) { throw res }
      return res.json()})
    .then(json => {
      this.setState({starters: json.starters,
                     mains: json.mains,
                     desserts: json.desserts,
                     macaronis: json.macaronis,
                     burgers: json.burgers,
                     breads: json.breads,
                     loadedFriess: json.loadedFriess,
                     sides: json.sides,
                     resultReceived: true,
                     isError: false,
                     errorMessage : undefined
                }, 
        () => {})
    })
    .catch((err) => {
      console.log(err); 
      err.text().then( errorMessage => {
        this.setState({
          isError: true,
          resultReceived: true,
          errorMessage : JSON.parse(errorMessage).message})
      })
      
    })
}


render() {
    return (
      <div class="entirepage">
        <h2>What did I choose?</h2>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group as={Row} id="nameRow">
                <Form.Label class="nameLabel col-sm-4" >
                First name:
                {this.state.isMartin &&<div>add first letter of your surname, there's two of you</div>}
                </Form.Label>
                <Col sm={4}>
                <Form.Control 
                    type="text" placeholder="First Name" 
                    value={this.state.name} onChange={this.updateName}/>
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
        <RecordView class="record-view" data={this.state}/>
        <CostView class="record-view" data={this.state}/>
      </div>
    );
  }

} 

  export default Records;