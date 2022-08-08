import React from 'react'
import { Nav,Navbar } from 'react-bootstrap';
import './NavbarMain.css';
import logo from '../images11/1234.jpg'
// import { Link } from 'react-router-dom';

function NavbarMain() {
  return (
    <div>
        <Navbar bg='dark'  variant='dark' sticky='top' expand='lg'>
          <Navbar.Brand>
            
            <img  className='logo' src={logo} width='40px' height='40px' alt='lll'/> <a className='logoname' href="/">Logo</a> {''}
            
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