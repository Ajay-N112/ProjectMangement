import React, { useState } from 'react'
import Header from '../Components/Header'
import './Projects.css'
import { Button, Col, Modal, Row } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Header></Header>
      
      <h1 className='hh1 text-center p-5 container'>Explore all Projects</h1>
      <br /><br />
      
      <InputGroup className=" ms-5  mb-3 w-25">
        <Form.Control
          placeholder="Search Projects"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
        Search
        </Button>
      </InputGroup>

      

      <Card  onClick={handleShow}  className='ms-5 shadow-lg' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/HLKNLPgP/Whats-App-Image-2023-11-09-at-09-11-28-4f760bb8.jpg" />
      <Card.Body>
        <Card.Title>Fitness App</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Fitness App</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<Row>
  <Col>
  <img className='mm1' src="https://i.postimg.cc/HLKNLPgP/Whats-App-Image-2023-11-09-at-09-11-28-4f760bb8.jpg" alt="" />
  </Col>
  <Col>
  There are a few vulnerability points to sharing your personal data with health apps. One is, users seldom realize how their personal data  including names, addresses, ages, gender and more
  </Col>
</Row>

        </Modal.Body>
        <Modal.Footer>
        <Link> <i class="fa-solid fa-link fa-beat text-black"></i></Link>
        <Link> <i class="fa-brands fa-github fa-beat-fade text-black"></i></Link>
          <Button variant="secondary" onClick={handleClose}> 
             Close
          </Button>
        
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>


    <br />
    </div>
  )
}

export default Projects