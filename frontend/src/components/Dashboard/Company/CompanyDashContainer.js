import React, { useEffect, useState } from 'react'
import auth from '../../Home/CommonComponents/Auth'
import CompanyDashHeader from './CommonComponents/CompanyDashHeader';
import CompanyDashUI from './CompanyDashHome/CompanyDashUI';
import CreateJobOpenings from './AddProject/CreateJobOpenings';
import { Route } from "react-router-dom";
import UploadCompanyLogo from './AddProject/UploadCompanyLogo';
import ShowJobOpenings from './ShowOpenings/ShowJobOpenings';
import ModifyProjectModal from './ShowOpenings/ModifyOpenings/ModifyProjectModal';
import InterviewWebConfCorp from './InterviewWebConfCorp';

const CompanyDashContainer = (props) => {

    const [userInDash, setUserInDash] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchUser()
    }, [userId])


    return (
        <div>
            <CompanyDashHeader logout={props.history} />

            <Route exact path="/companyDashboard" component={CompanyDashUI} />
            <Route exact path="/companyDashboard/createJobOpenings" component={CreateJobOpenings} />
            <Route exact path="/companyDashboard/uploadProjectImage" component={UploadCompanyLogo} />

            <Route exact path="/companyDashboard/showProjects" component={ShowJobOpenings} />
            <Route exact path="/companyDashboard/showProjects/modal/modifyProject" component={ModifyProjectModal} />
            <Route exact path="/companyDashboard/interviewWebConfCorp" component={InterviewWebConfCorp} />

        </div>
    )

    async function fetchUser() {
        console.log('userInDash Before ' + userInDash)
        let requestObject = { "email": auth.userEmail }
        fetch('/api/users/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dash ' + JSON.stringify(data))
                console.log('Dash ' + data[0].name)
                setUserInDash(data[0])
                setUserId(data[0].name)
            })
            .catch(err => console.log('Error when calling api : ' + err))
        console.log('userInDash After ' + userInDash)
    }
}

export default CompanyDashContainer
