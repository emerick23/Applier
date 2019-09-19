import React from 'react'
import JobCreateForm from '../../components/JobCreateForm/JobCreateForm'

const JobCreatePage = (props) => {
        return (
            <div>
                <JobCreateForm
                user={props.user}
                {...props}
                />
            </div>
        )
}


export default JobCreatePage