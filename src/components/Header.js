import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
    <Navbar bg="light">
      <Container>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#h">Features</Nav.Link>
            <Nav.Link href="#home">FAQs</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
                <Nav.Link href="#home">Login</Nav.Link>
                <Nav.Link href="#home">Sign Up</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </>
  );
}

export default Header;