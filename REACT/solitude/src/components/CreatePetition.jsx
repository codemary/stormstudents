import React, { Component } from 'react';
import { 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button} from 'reactstrap';

import uuid from 'uuid/v4';

class CreatePetition extends Component {
    constructor() {
      super();
      this.state = {
        title: '',
        description: '',
      }
    }
    handleTitleChange = event => {
      this.setState ({
        title: event.target.value,
      })
      console.log(this.state);
      
    }
    handleDescriptionChange = event => {
      this.setState ({
        description: event.target.value,
      })
    }
  
    handleSubmitButton = () => {
      let petition = {
        id: uuid(),
        title: this.state.title,
        description: this.state.description,
      }
      console.log(petition);
      this.props.newPetition(petition);
      this.setState({
        title: '',
        description: '',
      })
    }
    render() {
      return (
        <div style={{margin: 20}}>
          <h1>Create a Petition</h1>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input value={this.state.title} type="text" placeholder="Title of your petition" 
              onChange={this.handleTitleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input value={this.state.description} type="textarea" placeholder="Description of your petition..."
              onChange={this.handleDescriptionChange}/>
            </FormGroup>
            <Button 
            color="primary" 
            size="lg"
            onClick={this.handleSubmitButton}
            >Submit Petition</Button>
          </Form>
          <hr/>
        </div>
      )
    }
  }

export default CreatePetition;