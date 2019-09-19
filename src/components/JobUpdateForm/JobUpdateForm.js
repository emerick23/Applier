import React from 'react'

const JobUpdateForm = props => {
    return (
        <div className='row'>
            <form className='col s12' onSubmit={props.handleSubmit}>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input id='companyName' onChange={props.handleChange} type='text' name='companyName' value={props.companyName}></input>
                        <label className='active' htmlFor='companyName'>Company Name</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input id='location' onChange={props.handleChange} type='text' name='location' value={props.location}></input>
                        <label className='active' htmlFor='location'>Company Location</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input id='position' onChange={props.handleChange} type='text' name='position' value={props.position}></input>
                        <label className='active' htmlFor='position'>Job Position</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input id='url' onChange={props.handleChange} type='text' name='url' value={props.url}></input>
                        <label className='active' htmlFor='url'>Job URL</label>
                    </div>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default JobUpdateForm