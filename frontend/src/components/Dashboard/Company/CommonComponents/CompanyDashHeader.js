import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
const CompanyDashHeader = (props) => {
    return (
        <div>
            <Navbar style={{ 'background-color': '#0000CC',  }}>
            <Row>
            <Col>
                <Link exact to="/companyDashboard">  <Navbar.Brand href="#home" style={{ color: '#fff'}}>Interview Board</Navbar.Brand></Link>
                </Col>
                <Col style={{ marginLeft:'600px',color:'#fff' }}>
                <Nav className="mr-auto">
                    <Link exact to="/companyDashboard"><Nav.Link href="#home" style={{ color: '#fff'}}>Home</Nav.Link></Link>
                    <Link to="/companyDashboard/uploadProjectImage"> <Nav.Link href="#features" style={{ color: '#fff',width:'150px'}}>Create Openings</Nav.Link></Link>
                    <Link to="/companyDashboard/showProjects"> <Nav.Link href="#features" style={{ color: '#fff',width:'150px'}}>My Openings</Nav.Link></Link>
                    <Link to="/companyDashboard/interviewWebConfCorp"> <Nav.Link href="#features" style={{ color: '#fff',width:'250px'}}>Start Interview Conference</Nav.Link></Link>

                    <Button
                        onClick={() => {
                            auth.logout(() => {
                                props.logout.push("/");
                            });
                        }}
                    >
                        Logout
                    </Button>
                </Nav>
                </Col>
                </Row>
            </Navbar>
        </div>
    )
}

export default CompanyDashHeader
