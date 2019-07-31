import React from 'react'
import CreateJobForm from '../../components/CreateJobForm/CreateJobForm'

const CreatePage = (props) => {
        return (
            <div>
                <CreateJobForm
                user={props.user}
                {...props}
                />
            </div>
        )
}


export default CreatePage