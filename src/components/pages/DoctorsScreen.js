import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './DoctorsScreen.css'

function DoctorsScreen() {
  return (
    <div>
      <Container className='cardcontainer'>
        <Row>
            <Col>
    <Card  className='cardbody' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="d.jpg"  />
      <Card.Body>
        <Card.Title>DENTIST</Card.Title>
        <Card.Text className='text1'>
          Place : Thalassery
        </Card.Text>
        <Link to='/'>
        <Button className='button' variant="primary">Dentist List</Button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card  className='cardbody' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="d.jpg" />
      <Card.Body>
        <Card.Title>ENT Specialist</Card.Title>
        <Card.Text className='text1'>
        Place : Thalassery
        </Card.Text>
        <Link to=''>
        <Button variant="primary">ENT  List</Button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card  className='cardbody' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="d.jpg" />
      <Card.Body>
        <Card.Title>Gynecolgist</Card.Title>
        <Card.Text className='text1'>
        Place : Thalassery
        </Card.Text>
        <Link to=''>
        <Button variant="primary">Gynecolgist List</Button>
        </Link>
        
      </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row>
            <Col>
    <Card  className='cardbody' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="d.jpg"  />
      <Card.Body>
        <Card.Title>Child Specialist</Card.Title>
        <Card.Text>
        Place : Thalassery
        </Card.Text>
        <Link to='/childspecialist'>
        <Button variant="primary">Child Specialist List</Button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card  className='cardbody' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="d.jpg" />
      <Card.Body>
        <Card.Title>Cardiologist</Card.Title>
        <Card.Text>
        Place : Thalassery
        </Card.Text>
        <Link to=''>
        <Button variant="primary">Cardiologist List</Button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default DoctorsScreen