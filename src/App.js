import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import userService from './utils/userService'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import JobsIndexPage from './pages/JobsIndexPage/JobsIndexPage'
import JobCreatePage from './pages/JobCreatePage/JobCreatePage'
import JobDetailPage from './pages/JobDetailPage/JobDetailPage'
import NavBar from './components/NavBar/NavBar'

class App extends Component {

  state = {
    user: userService.getUser(),
    jobs: []
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogout = () => {
    userService.logOut();
    this.setState({ user: null });
  }

  handleUpdateJobs = (jobs) => {
    this.setState({ jobs })
  }

  render() {
    return (
      <div className='app'>
        <header className='header'>
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <Switch>
            <Route exact path='/signup' render={({ history }) =>
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
            <Route exact path='/login' render={({ history }) =>
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
            <Route exact path='/jobs' render={() =>
              <JobsIndexPage
                user={this.state.user}
                jobs={this.state.jobs}
                handleUpdateJobs={this.handleUpdateJobs}
              />
            } />
            <Route exact path='/addJob' render={(props) =>
              <JobCreatePage
                {...props}
                user={this.state.user}
              />
            } />
            <Route exact path='/job/:idx' render={(props) =>
              <JobDetailPage
                {...props}
                user={this.state.user}
                jobs={this.state.jobs}
              />
            } />
        </Switch>
      </div>
    )
  }
}

export default App;
