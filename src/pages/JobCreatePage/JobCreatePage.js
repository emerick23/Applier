import React from 'react'
import './JobCreatePage.css'
import JobCreateForm from '../../components/JobCreateForm/JobCreateForm'

const JobCreatePage = (props) => {
        return (
            <div className='container JobCreatePage'>
                <JobCreateForm
                user={props.user}
                {...props}
                />
            </div>
        )
}


export default JobCreatePage