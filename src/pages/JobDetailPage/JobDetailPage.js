import React, { Component } from 'react'
import './JobDetailPage.css'
import jobService from '../../utils/jobService';
import JobUpdateForm from '../../components/JobUpdateForm/JobUpdateForm'

class JobDetailPage extends Component {

    state = {
        companyName: '',
        position: '',
        location: '',
        url: '',
        dateApplied: ''
    }

    componentDidMount() {
        let job = { ...this.props.jobs[this.props.match.params.idx] }
        this.setState({ ...job })
    }

    handleChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    handleDelete = async () => {
        let deletedJob = await jobService.jobDelete(this.props.match.params.idx, this.props.user)
        console.log(deletedJob)
        this.props.history.push('/jobs')
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        let updatedJob = await jobService.jobUpdate(this.state, this.props.user)
        console.log(updatedJob)
        this.props.history.push('/jobs')

    }

    render() {
        return (
            <div className='container JobDetailPage'>
                <p>{this.state.dateApplied}</p>
                <JobUpdateForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    companyName={this.state.companyName}
                    position={this.state.position}
                    location={this.state.location}
                    url={this.state.url}
                />
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}



export default JobDetailPage 