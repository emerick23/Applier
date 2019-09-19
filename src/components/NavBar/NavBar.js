import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = props => {

    let nav = props.user ?
        <ul className='navItems'>
            <li>Welcome {props.user.name}</li>
            <li><Link to='/jobs'>Jobs</Link></li>
            <li><Link to='/addJob'>Add a Job</Link></li>
            <li><Link to='' onClick={props.handleLogout}>Logout</Link></li>
        </ul>
        :
        <ul className='navItems'>
            <li><Link to='/signup'>SignUp</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>


    return (
        <div>
            {nav}
        </div>
    )
}

export default NavBar