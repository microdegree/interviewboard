import React, { useEffect, useState } from 'react'
import auth from '../../Home/CommonComponents/Auth'
import CandidateDashUI from './1DashboardHome/CandidateDashUI';
import CandidateDashHeader from './0CommonComponents/CandidateDashHeader'
import DetailsComponent from './2MoreDetails/DetailsComponent';
import { Route } from "react-router-dom";
import Confirmation from './3Confirmation/Confirmation';
import MyJobApplications from './MyJobApplications';
import PaymentGateway from './4PaymentGateway/PaymentGateway';
import UploadResume from './UploadResumes/UploadResume';
import InterviewWebConference from './InterviewWebConference';

const CandidatesDashContainer = (props) => {

    const [userInDash, setUserInDash] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchUser()
    }, [userId])


    return (
        <div>
            <CandidateDashHeader logout={props.history} />
            Hello {userInDash.name}
            <br /><br /><br /><br />
            <Route exact path="/candidateDashboard" component={CandidateDashUI} />
            <Route exact path="/candidateDashboard/myApplications" component={MyJobApplications} />

            <Route exact path="/candidateDashboard/moreDetails" component={DetailsComponent} />
            <Route exact path="/candidateDashboard/confirmationPage" component={Confirmation} />
            <Route exact path="/candidateDashboard/paymentsGateway" component={PaymentGateway} />
            <Route exact path="/candidateDashboard/uploadBannerFile" component={UploadResume} />
            <Route exact path="/candidateDashboard/interviewWebConference" component={InterviewWebConference} />

        </div>
    )

    async function fetchUser() {
        console.log('userInDash Before ' + userInDash)
        let requestObject = { "email": auth.userEmail }
        fetch('/api/authenticate/getUserInfo', {
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

export default CandidatesDashContainer
