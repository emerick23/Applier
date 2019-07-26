import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import userService from './utils/userService'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import NavBar from './components/NavBar/NavBar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    }
  }

  handleLogout = () => {
    userService.logOut();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

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
          <Route exact path='/signup' render={({history}) => 
          <SignupPage
          history={history} 
          handleSignupOrLogin={this.handleSignupOrLogin}
          />
        } />
        <Route exact path='/login' render={({history}) => 
        <LoginPage
        history={history}
        handleSignupOrLogin={this.handleSignupOrLogin}
        />
      } />
        </Switch>
      </div>
    )
  }
}

export default App;
