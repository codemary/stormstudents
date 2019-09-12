import React, { Component } from 'react';

import CreatePetition from '../components/CreatePetition';
import { Link } from "react-router-dom";
import { Button, ListGroup, ListGroupItem, Modal, ModalBody } from 'reactstrap';

class PetitionListView extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    };
  }
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };
  render() {
    return (<div className='body'>
      <Button color="primary" size="sm" onClick={this.toggle}>New Petition</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalBody>
          <CreatePetition newPetition={this.props.newPetition} />
        </ModalBody>
      </Modal>
      <h1>Petitions</h1>
      <ListGroup>
        {this.props.petitions.map(petition => <ListGroupItem key={petition.id}>
          {<Link to={{ pathname: `/${petition.id}`, state: { petition: petition } }}>{petition.title}</Link>}
        </ListGroupItem>)}
      </ListGroup>
    </div>);
  }
}

export default PetitionListView;
