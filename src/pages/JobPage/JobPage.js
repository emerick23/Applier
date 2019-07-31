import React, { Component } from 'react'
import jobService from '../../utils/jobService';

class JobPage extends Component {

    handleDelete = async () => {
        await jobService.deleteJob(this.props.match.params.idx, this.props.user)
        this.props.history.push('/jobs')
    }
    render() {
    return(
            <div>
                <label>Company Name</label>
                <p>{this.props.jobs[this.props.match.params.idx].companyName}</p>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
    )
    }
    
}

export default JobPage 