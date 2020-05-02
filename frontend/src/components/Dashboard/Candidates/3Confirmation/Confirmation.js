import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../../Home/CommonComponents/Auth'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Confirmation = (props) => {
    return (
        <div>
            <center>
                <Card style={{ width: '48rem', backgroundColor: '#0000CC' }}><Card.Body>
                    <Card.Title style={{ color: '#fff'}}>Confirmation Page</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10, height: '250px', width: '300px' }} />
                        </Col>
                        <Col>
                            <Row style={{ fontWeight: "bold", fontSize: '25px',color: '#fff' }}>{props.location.projectData.companyName}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px',color: '#fff' }}>Location @ {props.location.projectData.jobLocation}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px',color: '#fff' }}>technologyType Name : {props.location.projectData.technologyType}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px',color: '#fff' }}>interviewDate: {props.location.projectData.interviewDate}</Row>

                        </Col>
                    </Row>
                    <Button variant="primary"><Link to='/candidateDashboard/paymentsGateway' style={{ color: '#fff' }} onClick={confirmBookingAtServer}>Submit Job Application</Link></Button>

                </Card.Body>
                </Card>
            </center>

        </div>
    )

    function confirmBookingAtServer() {

        fetch('/api/consumer/addNewBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "consumerEmail": auth.userEmail,
                "adminEmail": props.location.projectData.email,
                "projectId": props.location.projectData._id,
                "langSelected": props.location.bookingInfo.langSelected,
                "slotTypeSelected": props.location.bookingInfo.slotTypeSelected,
                "advtTypeSelected": props.location.bookingInfo.advtTypeSelected,
                "finalPrice": props.location.bookingInfo.finalPrice

            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log('error when calling confirmAppointmentAtServer ', error))

    }
}

export default Confirmation
