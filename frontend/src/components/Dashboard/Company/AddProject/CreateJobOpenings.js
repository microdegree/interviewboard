import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../../../Home/CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const CreateJobOpening = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        callServerToAddInfo(data)

        props.history.push('./companyDashboard')
    }
    console.log(errors);

    return (
        <div>
            <center>
                <Card  style={{ width: '38rem', backgroundColor: '#0000CC', margin: 25 }}>

                    <Card.Body >
                        {props.location.fileNameImage}

                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group controlId="companyName">
                                <Form.Label style={{ color: '#fff'}}>Company Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Company name" name="companyName" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="jobLocation">
                                <Form.Label style={{ color: '#fff'}}>Job Location</Form.Label>
                                <Form.Control type="text" placeholder="Enter Location" name="jobLocation" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="interviewerName">
                                <Form.Label style={{ color: '#fff'}}>Interviewer Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Interviewer Name" name="interviewerName" ref={register({ required: true, maxLength: 400 })} />
                            </Form.Group>

                            <Form.Group controlId="interviewerRole">
                                <Form.Label style={{ color: '#fff'}}>Interviewer Role</Form.Label>
                                <Form.Control type="text" placeholder="Enter Role" ref={register({ required: true, maxLength: 40 })} />
                            </Form.Group>

                            <Form.Group controlId="technologyType">
                                <Form.Label style={{ color: '#fff'}}>Technology Type</Form.Label>
                                <Form.Control type="text" placeholder="Enter Technology Required" name="technologyType" ref={register({ required: true, maxLength: 40 })} />
                            </Form.Group>

                            <Form.Group controlId="jobRequirementUrgency">
                                <Form.Label style={{ color: '#fff'}}>Requirement Urgency</Form.Label>
                                <Form.Control type="text" placeholder="ENter how soon you need the position to be filled" name="jobRequirementUrgency" ref={register({ required: true, maxLength: 40 })} />
                            </Form.Group>

                            <Form.Group controlId="jobDescription">
                                <Form.Label style={{ color: '#fff'}}>Job Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Job Description" name="jobDescription" ref={register({ required: true, maxLength: 400 })} />
                            </Form.Group>

                            <Form.Group controlId="interviewDate">
                                <Form.Label style={{ color: '#fff'}}>Interview Date</Form.Label>
                                <Form.Control type="date" placeholder="Enter Interview Date" name="interviewDate" ref={register({ required: true, maxLength: 40 })} />
                            </Form.Group>

                            <Form.Group controlId="interviewTime">
                                <Form.Label style={{ color: '#fff'}}>Interview Time</Form.Label>
                                <Form.Control type="time" placeholder="Enter Interview Time" name="interviewTime" ref={register({ required: true, maxLength: 40 })} />
                            </Form.Group>

                            <br /> <br /> <br />
                            <Button variant="primary" type="submit">
                                Submit
                             </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </center>
        </div>
    )

    function callServerToAddInfo(requestObject) {

        requestObject = { ...requestObject, "email": auth.userEmail, "imageName": props.location.fileNameImage }
        console.log('call server 1 ', requestObject)

        fetch('/api/admin/addProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then(data1 => console.log('data from update ', data1))
            .catch(error => console.log('Error while adding Info ', error))

    }

}

export default CreateJobOpening
