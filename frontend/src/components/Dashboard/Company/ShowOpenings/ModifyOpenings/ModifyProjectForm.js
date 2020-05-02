import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../../../../Home/CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ModifyProjectForm = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        callServerToUpdateInfo(data)

        props.handleClose()
    }
    console.log(errors);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="companyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control defaultValue={props.projectData.companyName} type="text" placeholder="Enter Company name" name="companyName" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="jobLocation">
                <Form.Label>Job Location</Form.Label>
                <Form.Control defaultValue={props.projectData.jobLocation} type="text" placeholder="Enter Location" name="jobLocation" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="interviewerName">
                <Form.Label>Interviewer Name</Form.Label>
                <Form.Control defaultValue={props.projectData.interviewerName} type="text" placeholder="Enter Interviewer Name" name="interviewerName" ref={register({ required: true, maxLength: 400 })} />
            </Form.Group>

            <Form.Group controlId="interviewerRole">
                <Form.Label>Interviewer Role</Form.Label>
                <Form.Control defaultValue={props.projectData.interviewerRole} type="text" placeholder="Enter ROle of Interviewer" name="interviewerRole" ref={register({ required: true, maxLength: 40 })} />
            </Form.Group>

            <Form.Group controlId="technologyType">
                <Form.Label>Technology Type</Form.Label>
                <Form.Control defaultValue={props.projectData.technologyType} type="text" placeholder="Enter Technology Required" name="technologyType" ref={register({ required: true, maxLength: 40 })} />
            </Form.Group>

            <Form.Group controlId="jobRequirementUrgency">
                <Form.Label>Requirement Urgency</Form.Label>
                <Form.Control defaultValue={props.projectData.jobRequirementUrgency} type="text" placeholder="ENter how soon you need the position to be filled" name="jobRequirementUrgency" ref={register({ required: true, maxLength: 40 })} />
            </Form.Group>

            <Form.Group controlId="jobDescription">
                <Form.Label>Job Description</Form.Label>
                <Form.Control defaultValue={props.projectData.jobDescription} type="text" placeholder="Enter Job Description" name="jobDescription" ref={register({ required: true, maxLength: 40 })} />
            </Form.Group>

            <Form.Group controlId="interviewDate">
                <Form.Label>Interview Date</Form.Label>
                <Form.Control defaultValue={props.projectData.interviewDate} type="date" placeholder="Enter Interview Date" name="interviewDate" ref={register({ required: true, maxLength: 40 })} />
            </Form.Group>

            <Form.Group controlId="interviewTime">
                <Form.Label>Interview Time</Form.Label>
                <Form.Control defaultValue={props.projectData.interviewTime} type="time" placeholder="Enter Interview Time" name="interviewTime" ref={register({ required: true, maxLength: 40 })} />
            </Form.Group>

            <br /> <br /> <br />
            <Button variant="primary" type="submit">
                Submit
                </Button>
        </Form>
    )

    function callServerToUpdateInfo(requestObject) {

        requestObject = { ...requestObject, "email": auth.userEmail, 'imageName': props.projectData.imageName }
        console.log('call server 1 ', requestObject)

        fetch('/api/admin/modifyProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then(data1 => console.log('data from update ', data1))
            .catch(error => console.log('Error while modify project Info ', error))

    }

}

export default ModifyProjectForm
