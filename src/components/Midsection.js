import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MidSection.css';
import { Link } from 'react-router-dom';

function Midsection() {
  return (
    <div className='home-card'  >
        <h1 className='cardtext' >We Have This Helpline Number. Call Any Time</h1>
        <Container className='cardcontainer'>
        <Row>
            <Col>
    <Card  className='cardbody' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="d.jpg"  />
      <Card.Body>
        <Card.Title>Doctors</Card.Title>
        <Card.Text>
          Doctors List In Thalassery and All Details
        </Card.Text>
        <Link to='/doctors'>
        <Button variant="primary">Doctors List</Button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card  className='cardbody' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="taxis.jpg" />
      <Card.Body>
        <Card.Title>Taxi's</Card.Title>
        <Card.Text>
        Taxi Numbers List In Thalassery and All Details
        </Card.Text>
        <Link to='/taxis'>
        <Button variant="primary">Taxi's List</Button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card  className='cardbody' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="emrgncy.jpg" />
      <Card.Body>
        <Card.Title>Emergency</Card.Title>
        <Card.Text>
        Emergency Numbers List In Thalassery and All Details.
        </Card.Text>
        <Link to='/emergency'>
        <Button variant="primary">Emergency</Button>
        </Link>
        
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>


    </div>
  )
}

export default Midsection