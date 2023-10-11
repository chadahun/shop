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
import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {
  let [shoes] = useState(data);
  let navigate=useNavigate();
  return (
    <div className="App">
      
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Link</Nav.Link>
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
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>}></Route>

        {/* <Route path="/detail/:id" element={ <Detail shoes={shoes}/> }/>
페이지를 여러개 만들고 싶으면 URL 파라미터라는 문법을 사용가능합니다. 

path 작명할 때 /:어쩌구 이렇게 사용하면 "아무 문자"를 뜻합니다.

그래서 위의 <Route>는 누군가 주소창에 /detail/아무거나 입력했을 때

<Detail> 컴포넌트 보여달라는 뜻입니다. */}
        <Route path="/about" element={<About></About>}>
          <Route path="memeber" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<div>위치정보</div>}></Route>
        </Route>
        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일 기념 쿠폰받기</p>}></Route>
        </Route>
      </Routes>

      
    
    </div>
  );
}


function Event(){
  return(
    <div>
    <h4>오늘의 이벤트</h4>
    <Outlet></Outlet>
  </div>
  )
  
}


function About(){
  return(
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
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
