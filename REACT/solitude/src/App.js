import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import PetitionListView from './views/PetitionListView';
import PetitionView from './views/PetitionView';
import { 
    Navbar,
    NavbarBrand,
  } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    const petitions = JSON.parse(localStorage.getItem('petitions')) || [];
    this.state = {
      petitions: petitions,
    }
    console.log(this.state.petitions);
  }
  newPetition = petition => {
    let petitions = this.state.petitions;
    petitions.push(petition);
    this.setState({
      petitions: petitions,
      modal: false
    })
    console.log(this.state.petitions);
  }
  newSignature = (petitionId, signature) => {
    let petitions = this.state.petitions;
    let petitionIndex = petitions.findIndex(petition => petition.id === petitionId);
    let signatures = petitions[petitionIndex].signatures || [];
    signatures.push(signature);
    petitions[petitionIndex].signatures = signatures;
    this.setState({ petitions: petitions });
  }
  componentDidUpdate() {
    localStorage.setItem('petitions', JSON.stringify(this.state.petitions));
  }
  render() {
    return (
      <div className='body'>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Solitide</NavbarBrand>
        </Navbar>
        <Router>
          <Route path="/" exact 
          component={(props) => <PetitionListView {...props} petitions={this.state.petitions} newPetition={this.newPetition} />} 
          />
          <Route path="/:id" 
          component={(props) => <PetitionView {...props} newSignature={this.newSignature}/>}
          />
        </Router>
      </div>
    )
  } 
}

export default App;
