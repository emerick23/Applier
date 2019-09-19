import React, { Component } from 'react'
import jobService from '../../utils/jobService';

class JobDetailPage extends Component {

    state = {
        companyName: '',
        position: '',
        location: '',
        url: '',
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
            <div>
                <label>Company Name</label>
                <p>{this.state.companyName}</p>
                <button onClick={this.handleDelete}>Delete</button>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' name='companyName' value={this.state.companyName}></input>
                    <input onChange={this.handleChange} type='text' name='position' value={this.state.position}></input>
                    <input onChange={this.handleChange} type='text' name='location' value={this.state.location}></input>
                    <input onChange={this.handleChange} type='text' name='url' value={this.state.url}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}



export default JobDetailPage 