import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import RecordView from './RecordView'

class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", starter: "", starterGF: false, main: "", mainGF: false, 
    dessert: "", dessertGF: false, isMartin: false,
    resultReceived: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateName = this.updateName.bind(this);
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

handleSubmit(event) {
  event.preventDefault();
  console.log(this.state);
  fetch('https://28uc5uo954.execute-api.us-east-2.amazonaws.com/dev/lunchperson?name=' + this.state.name, {
    method: 'GET'
  })
    .then(res => {
      if (!res.ok) { throw res }
      return res.json()})
    .then(json => {
      console.log(json);
      this.setState({starter: json.starter,
                     starterGF: json.starterGF,
                     main: json.main,
                     mainGF: json.mainGF,
                     dessert: json.dessert,
                     dessertGF: json.dessertGF,
                     resultReceived: true,
                     isError: false,
                     errorMessage : undefined
                }, 
        () => {})
    }
    )
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
      <div style={{ padding: 20 }}>
        <h2>What did I choose?</h2>
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
            <Button
                column="true"
                sm={2}
                type="submit"
                className="rounded-pill btn-success"
            >
                Submit
            </Button>
        </Form>
        <RecordView data={this.state}/>
      </div>
    );
  }

} 

  export default Records;