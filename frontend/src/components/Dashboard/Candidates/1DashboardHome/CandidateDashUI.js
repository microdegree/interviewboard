import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import JobOpeningCard from './JobOpeningCard';
import CardDeck from 'react-bootstrap/CardDeck'

const CandidateDashUI = (props) => {

    const [company, setCompany] = useState([])

    useEffect(() => {
        fetchProjectsFromServer()

    }, [])

    return (
        <div>
            <CardDeck style={{ color: '#0000CC'}} >
                {company.map(projectData =>
                    <JobOpeningCard key={projectData._id} projectData={projectData} />
                )}
            </CardDeck>
        </div >

    )

    function fetchProjectsFromServer() {
        console.log('In fetchProjectsFromServer ')
        fetch('/api/consumer/getAllProjects')
            .then(response => response.json())
            .then(data => {
                setCompany(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default CandidateDashUI
