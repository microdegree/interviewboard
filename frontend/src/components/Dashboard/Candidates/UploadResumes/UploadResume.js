import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const UploadResume = (props) => {

    const [value, setValue] = useState()


    const handleChange = (e) => {
        setValue(e.target.files[0]); // you get all the files object here
    }

    const uploadImageInServer = (e) => {
        e.preventDefault();
        console.log('In uploadImageInServer 1')
        const formData = new FormData();
        formData.append('resumeUploadFile', value)

        fetch('/api/consumer/uploadResume', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log('upload success')
                // props.history.push('./myProjects')

                props.history.push({
                    pathname: './',
                    fileNameImage: data.uploadedFileName
                })

            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            <center>
                <Card style={{ width: '48rem', backgroundColor: '#0000CC' }}>
                    <Card.Body>
                        <Card.Title style={{ color: '#fff'}}>Upload Resume Page</Card.Title>
                        <form encType="multipart/form-data" onSubmit={uploadImageInServer}>
                            <label for="resumeUploadFile" style={{ color: '#fff'}}>Select Resume:&nbsp;&nbsp;  </label>
                            <input type="file" id="resumeUploadFile" name="resumeUploadFile" style={{ color: '#fff'}} accept="image/*,.pdf,.doc,.docx" onChange={handleChange} />

                        &nbsp;&nbsp; <Button variant="primary" type="submit">Submit</Button>
                        </form>

                        *Note : Only Pdf / Word / Images Allowed
                    </Card.Body>
                </Card>

            </center>
        </div>
    )
}

export default UploadResume
