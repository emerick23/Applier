import React, { Component } from 'react'
import jobService from '../../utils/jobService';
import './JobCreateForm.css'

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
            <div className='row'>
                <form className='col s12' onSubmit={this.handleSubmit} autoComplete='off'>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input id='companyName' onChange={this.handleChange} type='text' name='companyName' value={this.state.companyName}></input>
                            <label htmlFor='companyName'>Company Name</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input id='location' onChange={this.handleChange} type='text' name='location' value={this.state.location}></input>
                            <label htmlFor='location'>Company Location</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input id='position' onChange={this.handleChange} type='text' name='position' value={this.state.position}></input>
                            <label htmlFor='position'>Job Position</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input id='url' onChange={this.handleChange} type='text' name='url' value={this.state.url}></input>
                            <label htmlFor='url'>Job URL</label>
                        </div>
                    </div>
                    <button className='btn' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}


export default JobCreateForm