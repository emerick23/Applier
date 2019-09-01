import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import userService from './utils/userService'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import IndexPage from './pages/IndexPage/IndexPage'
import CreatePage from './pages/CreatePage/CreatePage'
import JobPage from './pages/JobPage/JobPage'
import NavBar from './components/NavBar/NavBar'

class App extends Component {
  state = {
    user: userService.getUser(),
    jobs: []
  }

  handleLogout = () => {
    userService.logOut();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleUpdateJobs = (jobs) => {
    this.setState({ jobs })
  }

  // async componentDidMount() {
  //   const jobs = await jobService.index(this.state.user)
  //   this.setState({jobs})
  // }

  render() {
    return (
      <div className='App'>
        <header className='header-footer'>
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
            <IndexPage
              user={this.state.user}
              jobs={this.state.jobs}
              handleUpdateJobs={this.handleUpdateJobs}
            />
          } />
          <Route exact path='/add' render={(props) =>
            <CreatePage
              user={this.state.user}
              {...props}
            />
          } />
          <Route exact path='/job/:idx' render={(props) =>
            <JobPage
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
