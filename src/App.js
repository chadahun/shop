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
import data from './data.js';
import React, { useEffect, useState } from "react";
import {Routes,Route,Link} from 'react-router-dom';

function App() {
  let [shoes] = useState(data)
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
    <Link to="/">홈</Link>
    <Link to="/detail">상세페이지</Link>


    <Routes>
        <Route path="/" element={
          <>
              <div className='main-bg'></div>
              <Container1>
                <Row>
                  {/* <Card shoes={shoes[1]} i={2} ></Card>
                  <Card shoes={shoes[2]} i={3} ></Card> */}
                  {
                    shoes.map(function(a, i){
                      return(
                        <Card shoes={shoes[i]} i={i} ></Card>
                      )
                    })
                  }
                </Row>
              </Container1>
              </>
        }></Route>
        <Route path="/detail" element={
          <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> 
        

        }></Route>
      </Routes>

      
    
    </div>
  );
}
function Card (props){
  return(
        <Col>
          <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width='80%'></img>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
        </Col>
  )
}

export default App;
