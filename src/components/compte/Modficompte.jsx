import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

//import "./modife/Home.css";
import logo from './img.png';
const Modficompte= ()=> {
  return (
   
    <div className="d-flex align-items-center justify-content-center h-100">
      <Card id="card1" className="w-75"> {/* Adjusted width for responsiveness */}
        <Card.Body>
          <Card.Title  id="titre">Mon compte</Card.Title>
          <Card.Text id="text1">Modifier votre profil</Card.Text>
        
            <form id="formulaire" >
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Nom de l'entreprise
                </Form.Label>
                <Col sm="6"> {/* Utilizing the remaining width */}
                  <input
                    type="text"
                    className="form-control"
                   
                    
                  />
                 
                </Col>
                <Col sm={2}>
    <Button variant="outline-success"  >
      Editer
    </Button>
  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Changez votre mot de passe
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="password"
                    placeholder="mot de passe"
                    className="form-control"
                   
                  />
                </Col>
                <Col sm={2}>
    <Button variant="outline-success" >
      Editer
    </Button>
  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                   Activité
                </Form.Label>
                <Col sm="6"> {/* Utilizing the remaining width */}
                  <input
                    type="text"
                    className="form-control"
                  
                    
                  />
                 
                </Col>
                <Col sm={2}>
    <Button variant="outline-success"  >
      Editer
    </Button>
  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Image de profil
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="file"
                    className="form-control"
                   
                  />
                </Col>
                <Col sm={2}>
    <Button variant="outline-success" >
      Editer 
    </Button>
  </Col>
              </Form.Group>

              <Button className="d-flex align-items-center justify-content-center" id="btn" >
                MODIFIER
              </Button>
            </form>  
            <div className="container">
      <button className="btn btn-custom" id="btn2">
        <img src={logo} width="34px" height="30px" alt="logo"  /> 
        <span className="highlight">Déconnecter</span>
      </button>
    </div>
        </Card.Body>
      </Card>
    </div>
 
  );
};

export default Modficompte;
