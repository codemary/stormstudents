import React, { Component } from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Card, 
  CardHeader, 
  CardBody, 
  CardText, 
  CardFooter, 
  Table } from 'reactstrap';
import './App.css';

import petitions from './petitionsData';
import uuid from 'uuid/v4';

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
      <div className='body'>
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
        <Button color="primary" size="sm" onClick={this.handleSubmitSignatureButton}>Sign</Button>
        <hr/>
      </div>
    )
  }
}

class PetitionListView extends Component {
  render() {
    return(
      <div className='body'>
        <h1>Petitions</h1>
        {this.props.petitions.map((petition, index) => 
        <div key={index}>
          <Card className='body'>
            <CardHeader>{petition.title}</CardHeader>
            <CardBody>
              <CardText>{petition.description}</CardText>
            </CardBody>
            <CardFooter>
              <h3>Signed by:</h3>
              <Table>
                  <thead>
                    <tr>
                      <th>Serial Number</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                    </tr>
                  </thead>
                  {petition.signatures && petition.signatures.map((signature, index) => 
                    <tbody key={index}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{signature.firstName}</td>
                        <td>{signature.lastName}</td>
                      </tr>
                    </tbody>
                  )} 
                </Table>
              <CreateSignature newSignature={this.props.newSignature} petitionId={petition.id} />
            </CardFooter>
          </Card>
        </div>
        )}
        
        <hr/>
      </div>
    )
  }
}

class CreatePetitionView extends Component {
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
      <div className='body'>
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

function Home() {
  return(
    <div className='body App'>
      <h1>Solitude</h1>
      <Button color="primary">primary</Button>
      <hr/>
    </div>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      petitions: petitions,
    }
    console.log(petitions);
    
  }
  newPetition = petition => {
    let petitions = this.state.petitions;
    petitions.push(petition);
    this.setState({
      petitions: petitions,
    })
  }
  newSignature = (petitionId, signature) => {
    let petitions = this.state.petitions;
    let petitionIndex = petitions.findIndex(petition => petition.id === petitionId);
    let signatures = petitions[petitionIndex].signatures || [];
    signatures.push(signature);
    petitions[petitionIndex].signatures = signatures;
    this.setState({ petitions: petitions });
  }
  render() {
    return (
      <div>
        <Home />
        <CreatePetitionView newPetition={this.newPetition} />
        <PetitionListView petitions={this.state.petitions} newSignature={this.newSignature}/>
      </div>
    );
  }
}

export default App;
