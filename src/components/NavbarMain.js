import React from 'react'
import { Nav,Navbar } from 'react-bootstrap';
import './NavbarMain.css';
// import { Link } from 'react-router-dom';

function NavbarMain() {
  return (
    <div>
        <Navbar   variant='dark' sticky='top' expand='lg'>
          <Navbar.Brand>
            
            <a className='logoname' href="/">TownHall Ward</a> {''}
            
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
              {/* <NavDropdown title='products'>
                <NavDropdown.Item href='/'>Tea</NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link className='link' href='/'>Home</Nav.Link>
              <Nav.Link className='link' href='/doctors'>Doctors</Nav.Link>
              <Nav.Link className='link' href='/Taxis'>Taxis</Nav.Link>
              <Nav.Link className='link' href='/emergency'>Emergency</Nav.Link>
              </Nav>
            </Navbar.Collapse>

        </Navbar>
    </div>
  )
}

export default NavbarMain