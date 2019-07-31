import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import jobService from '../../utils/jobService'

class IndexPage extends Component {

    async componentDidMount() {
        console.log('index mounted')
          const jobs = await jobService.index(this.props.user)
          this.props.handleUpdateJobs(jobs)
      }


render() {
    let jobs = this.props.jobs.map((job, idx) => (
        <div key={idx}>
            <Link to={{ pathname: `/job/${idx}` }}>{job.companyName}</Link>
        </div>
    ))
    return (
        <div>
            {jobs}
        </div>
    )
}
    }


export default IndexPage