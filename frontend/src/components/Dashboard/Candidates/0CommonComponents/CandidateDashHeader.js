import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

const CandidateDashHeader = (props) => {
    return (
        <div>
            
            <Navbar style={{ 'background-color': '#0000CC',  }}>
            <Row>
            <Col>
                <Link exact to="/candidateDashboard">  <Navbar.Brand href="#home" style={{ color:'#fff' }}>Interview Board</Navbar.Brand></Link>
                </Col>
                <Col style={{ marginLeft:'600px',color:'#fff' }}>
                <Nav className="mr-auto">
                    <Link exact to="/candidateDashboard"><Nav.Link href="#home" style={{ color:'#fff',width:'100px' }}>Home</Nav.Link></Link>
                    {/* <Link to="/candidateDashboard/myApplications"> <Nav.Link href="#features">My Applications</Nav.Link></Link> */}
                    <Link to="/candidateDashboard/uploadBannerFile"> <Nav.Link href="#features" style={{ color:'#fff',width:'150px' }}>Upload Resume</Nav.Link></Link>
                    <Link to="/candidateDashboard/interviewWebConference"> <Nav.Link href="#features" style={{ color:'#fff' ,width:'300px'}}>Join Interview Conference</Nav.Link></Link>
                  
                    
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

export default CandidateDashHeader
