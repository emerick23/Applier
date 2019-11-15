import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './JobsIndexPage.css'
import jobService from '../../utils/jobService'
import moment from 'moment'

class JobsIndexPage extends Component {

    async componentDidMount() {
        const jobs = await jobService.jobsIndex(this.props.user)
        this.props.handleUpdateJobs(jobs)
    }

    render() {
        let jobs = this.props.jobs.map((job, idx) => (
                <Link to={{ pathname: `/job/${idx}` }} key={idx}>
                    <div className='col s6 m4 l3'>
                        <div className='hoverable card small blue-grey lighten-4'>
                            <div className='card-content'>
                                <span className='card-title truncate'>{job.companyName}</span>
                                <p className='black-text'>{job.position}</p>
                                <p className='black-text'>{moment(job.dateApplied).format('M/D/YY')}</p>
                            </div>
                        </div>
                    </div>
                </Link>
        ))
        let jobsReversed = (jobs.length > 0) ? <div className= 'row'>{jobs.reverse()}</div> : <div className='container'><div className='section'><h4>Jobs Index</h4></div><div className='divider'></div></div>
        return (
            <div className='JobsIndexPage'>
                    {jobsReversed}
            </div>
        )
    }
}


export default JobsIndexPage