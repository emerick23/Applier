import React, {Component} from 'react'
import jobService from '../../utils/jobService';

class IndexPage extends Component {
    
    state = {
        jobs: []
    }

    async componentDidMount() {
        try {
        await jobService.index(this.props.user)
        .then(results => {
            this.setState({ jobs: [...results] })
        })
    } catch (err) {
        console.log(err)
    }
    }

    render() {
        let jobs = this.state.jobs.map((job, idx) => (
            <div key={idx}>
                <p>{job.companyName}</p>
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