import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './SignupForm.css'

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    personalWebsiteLink: '',
    linkedInLink: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className='row'>
        <form className="col s12" onSubmit={this.handleSubmit} autoComplete='off' >
          <div className="row">
            <div className="input-field col s6">
              <input id='email' type="email" value={this.state.email} name="email" onChange={this.handleChange} />
              <label htmlFor='email'>Email</label>
            </div>
            <div className="input-field col s6">
              <input id='name' type="text" value={this.state.name} name="name" onChange={this.handleChange} />
              <label htmlFor='name'>Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id='password' type="password" value={this.state.password} name="password" onChange={this.handleChange} />
              <label htmlFor='password'>Password</label>
            </div>
            <div className="input-field col s6">
              <input id='personalWebsiteLink' type="url" value={this.state.personalWebsiteLink} name="personalWebsiteLink" onChange={this.handleChange} />
              <label htmlFor='personalWebsiteLink'>Personal Website Link (Optional)</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id='confirmPassword' type="password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
              <label htmlFor='confirmPassword'>Confirm Password</label>
            </div>
            <div className="input-field col s6">
              <input id='linkedInLink' type="url" value={this.state.linkedInLink} name="linkedInLink" onChange={this.handleChange} />
              <label htmlFor='linkedInLink'>LinkedIn Link (Optional)</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className="btn" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
