import React from 'react'
import Card from 'react-bootstrap/Card';
import './ProjectCard.css'
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link2 } from 'react-feather';


const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        {/* <h1 className='j1'>
            Explore Project
        </h1> */}
        <Card  onClick={handleShow} style={{ width: '18rem' }}>
      {<Card.Img variant="top" src="https://i.postimg.cc/HLKNLPgP/Whats-App-Image-2023-11-09-at-09-11-28-4f760bb8.jpg" /> }
      <Card.Body>
        <Card.Title>Fitness App</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {/* <Button variant="light">Go somewhere</Button> */}
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
    </div>
  )
}

export default ProjectCard