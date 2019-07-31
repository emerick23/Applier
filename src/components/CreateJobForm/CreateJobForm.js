import React, { Component } from 'react'
import jobService from '../../utils/jobService';

class CreateJobForm extends Component {

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
        await jobService.create(this.state, this.props.user)
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


export default CreateJobForm