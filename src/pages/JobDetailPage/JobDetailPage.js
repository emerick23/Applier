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
                {/* <div className='row'>
                    <form className='col s12' onSubmit={this.handleSubmit}>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input id='companyName' onChange={this.handleChange} type='text' name='companyName' value={this.state.companyName}></input>
                                <label className='active' for='companyName'>Company Name</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input id='location' onChange={this.handleChange} type='text' name='location' value={this.state.location}></input>
                                <label className='active' for='location'>Company Location</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input id='position' onChange={this.handleChange} type='text' name='position' value={this.state.position}></input>
                                <label className='active' for='position'>Job Position</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input id='url' onChange={this.handleChange} type='text' name='url' value={this.state.url}></input>
                                <label className='active' for='url'>Job URL</label>
                            </div>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div> */}
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