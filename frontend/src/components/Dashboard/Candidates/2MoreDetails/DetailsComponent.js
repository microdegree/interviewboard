import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const DetailsComponent = (props) => {

    const [bookingInfo, setBookingInfo] = useState({})

    return (

        <div style={{ fontWeight: "bold" }}>
            <center>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', border: '#fff' }}>
                            <br />
                            <center>
                                <Col>
                                    <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10, height: '500px', width: '500px' }} />
                                </Col>
                            </center>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '48rem', border: '#fff' }}>
                            <br />

                            <Card.Body>
                                <Card.Text>
                                    <br />
                                    <Row style={{ fontWeight: "bold", fontSize: '25px' }}>{props.location.projectData.companyName}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>Job Location : {props.location.projectData.jobLocation}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>interviewerName Name : {props.location.projectData.interviewerName}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>interviewerRole: {props.location.projectData.interviewerRole}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>technologyType: {props.location.projectData.technologyType}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>jobRequirementUrgency: {props.location.projectData.jobRequirementUrgency}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>jobDescription: {props.location.projectData.jobDescription}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>interviewDate: {props.location.projectData.interviewDate}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>interviewTime: {props.location.projectData.interviewTime}</Row>

                                    <br />

                                    <Row>projectData Details
                                         <Link to={{
                                            pathname: '/candidateDashboard/confirmationPage',
                                            projectData: props.location.projectData,
                                            bookingInfo: "bookingInfo"

                                        }}>
                                            &nbsp;  &nbsp;  &nbsp; <Button >Check Out</Button></Link>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </center>
        </div>
    )

}

export default DetailsComponent
