import React from 'react'
import JobForm from '../../components/JobForm/JobForm'

const CreatePage = (props) => {
        return (
            <div>
                <JobForm
                user={props.user}
                {...props}
                />
            </div>
        )
}


export default CreatePage