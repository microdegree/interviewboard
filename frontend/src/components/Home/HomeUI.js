import React, { Component, Fragment } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

class HomeUI extends Component {
    render() {
        return (
            <Jumbotron style={{ margin: 0 }}>
                <Container>
                    <Row>
                        <Col>
                            <br /><br />
                            <h1>Candidates to Company Connect</h1>
                            <p> A one stop solution to connect freelancers to company projects. Candidatess can now choose and work for the projects listed by companys</p>
                            <p><Button variant="primary" href='/login'>Signin</Button></p>
                        </Col>
                        
                        <Col> <img
                            src="https://www.smartrecruiters.com/wp-content/themes/smartrecruiters/new-template/img/en_us/glossary/glossary-catthumb-hiring-tips.png" />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default HomeUI;
