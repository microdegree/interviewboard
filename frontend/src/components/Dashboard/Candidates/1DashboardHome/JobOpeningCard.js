import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const JobOpeningCard = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.projectData.imageName} style={{ padding: 10 }} />
                <Card.Body>
                    <Card.Title>{props.projectData.jobRequirementUrgency}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.projectData.jobLocation}|{props.projectData.technologyType}</Card.Subtitle>
                    <br /><br />
                    <Link to={{
                        pathname: '/candidateDashboard/moreDetails',
                        projectData: props.projectData
                    }}><Button variant="primary">Apply Now</Button></Link>
                </Card.Body>
                <Card.Footer  style={{  backgroundColor: '#0000CC' }}>
                    <small style={{ color: '#fff'}}>Interview Date:  {props.projectData.interviewDate}</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default JobOpeningCard
