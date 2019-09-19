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
            <div className='col s12 m3' key={idx}>
                <div className='card small'>
                    <div className='card-content'>
                        <span className='card-title'><Link to={{ pathname: `/job/${idx}` }}>{job.companyName}</Link></span>
                        <p>{job.position}</p>
                    </div>
                </div>
            </div>
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