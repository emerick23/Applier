import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './JobsIndexPage.css'
import jobService from '../../utils/jobService'

class JobsIndexPage extends Component {

    async componentDidMount() {
        const jobs = await jobService.jobsIndex(this.props.user)
        this.props.handleUpdateJobs(jobs)
    }

    render() {
        let jobs = this.props.jobs.map((job, idx) => (
            <Link to={{ pathname: `/job/${idx}` }} key={idx}>
            <div className='col s12 m3'>
                <div className='hoverable card small'>
                    <div className='card-content'>
                        <span className='card-title'>{job.companyName}</span>
                        <p>{job.position}</p>
                    </div>
                </div>
            </div>
            </Link>
        ))
        return (
            <div className='JobsIndexPage'>
                <div className='row'>
                    {jobs}
                </div>
            </div>
        )
    }
}


export default JobsIndexPage