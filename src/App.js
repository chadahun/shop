import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button,Navbar,Container,Nav,NavDropdown,} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container1 from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='main-bg'></div>
    <Container1>
      <Row>
        <Col>
          <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='80%'></img>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col>
          <img src='https://codingapple1.github.io/shop/shoes2.jpg' width='80%'></img>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col>
          <img src='https://codingapple1.github.io/shop/shoes3.jpg' width='80%'></img>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
      </Row>
    </Container1>
    </div>
  );
}

export default App;
