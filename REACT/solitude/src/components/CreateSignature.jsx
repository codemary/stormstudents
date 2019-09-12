import React, { Component } from 'react';
import { 
  Form, 
  FormGroup, 
  Label, 
  Input,
  Button } from 'reactstrap';

class CreateSignature extends Component {
    constructor() {
      super(); 
      this.state = {
        firstName: '',
        lastName: '',
      }
    }
    handleFirstNameChange = event => {
      this.setState({
        firstName: event.target.value,
      })
    }
    handleLastNameChange = event => {
      this.setState({
        lastName: event.target.value,
      })
    }
    handleSubmitSignatureButton = () => {
      let signature ={
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      }
      this.props.newSignature(this.props.petitionId, signature);
      this.setState({
        firstName: '',
        lastName: '',
      })
    } 
    render() {
      return (
        <div style={{margin: 20}}>
          <h3>Sign this Petition:</h3>
          <Form>
            <FormGroup>
              <Label>First Name</Label>
              <Input value={this.state.firstName} type="text" placeholder="Your first name" 
              onChange={this.handleFirstNameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input value={this.state.lastName} type="text" placeholder="Your last name" 
              onChange={this.handleLastNameChange}
              />
            </FormGroup>
          </Form>
          <Button color="primary" size="sm" onClick={this.handleSubmitSignatureButton}>Sign Petition</Button>
        </div>
      )
    }
  }

export default CreateSignature;