import React, { Component } from 'react'
import './JobDetailPage.css'
import jobService from '../../utils/jobService';
import JobUpdateForm from '../../components/JobUpdateForm/JobUpdateForm'
import moment from 'moment';

class JobDetailPage extends Component {

    state = {
        companyName: '',
        position: '',
        location: '',
        url: '',
        dateApplied: '',
        form: false
    }

    async componentDidMount() {
        let job = await jobService.findJob(this.props.match.params.idx, this.props.user)
        this.setState({ ...job })
    }

    handleChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    handleForm = () => {
        this.setState(prevState => ({
            form: !prevState.form
        }))
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
        this.handleForm()
    }

    render() {
        var detailsClassName = this.state.form ? 'hide' : 'section'
        var formClassName = this.state.form ? 'row' : 'hide'
        return (
            <div className='container JobDetailPage'>
                <div className='section'>
                    <h4>Job Details</h4>
                    <div className='divider divideLine'></div>
                </div>
                <div className={detailsClassName}>
                    <div className="row colFlexContainer">
                        <div className="col s12 l6">
                            <h6>Description</h6>
                            <div className='descriptionFlexContainer'>
                                <p>Company Name: {this.state.companyName}</p>
                                <p>Company Location: {this.state.position}</p>
                                <p>Job Position: {this.state.location}</p>
                                <p>Job URL: {this.state.url}</p>
                                <p>Date Applied: {moment(this.state.dateApplied).format('M/D/YY')}</p>
                            </div>
                        </div>
                        <div className='col s12 l6 actions'>
                            <h6>Actions</h6>
                            <div className='actionsFlexContainer'>
                                <button className='btn actionBtns' onClick={this.handleForm}>Update Job</button>
                                <button className='btn actionBtns' onClick={this.handleDelete}>Delete Job</button>
                            </div>
                        </div>
                    </div>
                </div>
                <JobUpdateForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    companyName={this.state.companyName}
                    position={this.state.position}
                    location={this.state.location}
                    url={this.state.url}
                    handleForm={this.handleForm}
                    formClassName={formClassName}
                />
            </div>
        )
    }
}



export default JobDetailPage 