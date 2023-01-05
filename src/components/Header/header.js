import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import Button from 'react-bootstrap/Button';
function Header() {
  return (
    <>
      <header>
        <Navbar bg="light" variant="light">
          <Container className='px-5'>
            <Navbar.Brand href="#home">Start Bootsrap</Navbar.Brand>
            <Nav className="d-flex justify-content-end" >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Button variant="info" className='rounded-0'>New Post</Button>
            </Nav>
          </Container>
        </Navbar>
        <div className='text-light d-flex my-5 py-5 text-dark flex-column align-items-center name'>
          <h1>Clean Blog</h1>
          <p>Blog Theme by Start Bootstrap</p>
        </div>
      </header>
    </>
  )
}

export default Header