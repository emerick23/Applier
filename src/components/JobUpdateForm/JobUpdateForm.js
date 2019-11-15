import React from 'react'
import './JobUpdateForm.css'

const JobUpdateForm = props => {
    return (
        <div className={props.formClassName}>
            <form className='col s12' onSubmit={props.handleSubmit} autoComplete='off'>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input id='companyName' onChange={props.handleChange} type='text' name='companyName' value={props.companyName}></input>
                        <label id='active' htmlFor='companyName'>Company Name</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input id='location' onChange={props.handleChange} type='text' name='location' value={props.location}></input>
                        <label id='active' htmlFor='location'>Company Location</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input id='position' onChange={props.handleChange} type='text' name='position' value={props.position}></input>
                        <label id='active' htmlFor='position'>Job Position</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input id='url' onChange={props.handleChange} type='text' name='url' value={props.url}></input>
                        <label id='active' htmlFor='url'>Job URL</label>
                    </div>
                </div>
                <button className='btn' type='submit'>Submit</button>
                <p className='btn btnMarg' onClick={props.handleForm}>Cancel</p>
            </form>
        </div>
    )
}

export default JobUpdateForm