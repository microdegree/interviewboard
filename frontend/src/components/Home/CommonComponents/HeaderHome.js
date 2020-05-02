import React from 'react'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
const HeaderHome = () => {
    return (
        <div>
            <Navbar style={{ 'background-color': '#0000CC',  }}>
            <Row>
                        <Col>
                <Link exact to="/">  <Navbar.Brand href="#home" style={{ color:'#fff' }}>Interview Board</Navbar.Brand></Link>
                </Col>
                <Col style={{ marginLeft:'900px',color:'#fff' }}>
                <Nav className="mr-auto" >
                    <Link exact to="/" ><Nav.Link href="#home" style={{ color:'#fff' }}>Home</Nav.Link></Link>
                    <Link to="/about"> <Nav.Link href="#features" style={{ paddingLeft:'60px',color:'#fff' }}>About</Nav.Link></Link>
                    <Link to="/login"><Nav.Link href="#pricing" style={{ paddingLeft:'60px',color:'#fff' }}>Login</Nav.Link></Link><br />
                </Nav>
                </Col>
                    </Row>
            </Navbar>
        </div>
    )
}

export default HeaderHome
