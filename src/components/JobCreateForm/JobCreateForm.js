import React, { Component } from 'react'
import jobService from '../../utils/jobService';

class JobCreateForm extends Component {

    state = {
        companyName: '',
        position: '',
        location: '',
        url: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        let job = await jobService.jobCreate(this.state, this.props.user)
        console.log(job)
        this.props.history.push('/jobs')
    }

    render() {
        return (
            <div>
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


export default JobCreateForm