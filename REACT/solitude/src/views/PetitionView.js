import React, { Component } from 'react';
import CreateSignature from "../components/CreateSignature";
import { Button, Card, CardHeader, CardBody, CardText, CardFooter, Table, Modal, ModalBody } from 'reactstrap';

class PetitionView extends Component {
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
    console.log("props::::", this.props.location.state.petition);
    const petition = this.props.location.state.petition;
    return (<Card className='body'>
      <CardHeader>{petition.title}</CardHeader>
      <CardBody>
        <CardText>{petition.description}</CardText>
        <Button color="primary" size="sm" onClick={this.toggle}>New Signature</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <CreateSignature newSignature={this.props.newSignature} petitionId={petition.id} />
          </ModalBody>
        </Modal>
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
          {petition.signatures && petition.signatures.map((signature, index) => <tbody key={index}>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{signature.firstName}</td>
              <td>{signature.lastName}</td>
            </tr>
          </tbody>)}
        </Table>
      </CardFooter>
    </Card>);
  }
}

export default PetitionView;
