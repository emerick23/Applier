import React from 'react'
import './JobCreatePage.css'
import JobCreateForm from '../../components/JobCreateForm/JobCreateForm'

const JobCreatePage = (props) => {
    return (
        <div className='JobCreatePage container'>
            <div className='section'>
                <h4>Add a Job</h4>
                <div className='divider divideLine'></div>
            </div>
            <JobCreateForm
                user={props.user}
                {...props}
            />
        </div>
    )
}


export default JobCreatePage