import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

let NavBar = props => {
    if (props.user && (props.user.personalWebsiteLink || props.user.linkedInLink)) {
        return (
            <div>
                <ul className='navItems'>
                    <li><Link to='/user'>{props.user.name}</Link></li>
                    <li><Link to='/jobs'>Jobs</Link></li>
                    <li><Link to='/addJob'>Add a Job</Link></li>
                    <li><Link to='' onClick={props.handleLogout}>Logout</Link></li>
                </ul>
            </div>
        )
    } else if (props.user) {
        return (
            <div>
                <ul className='navItems'>
                    <li><Link to='/jobs'>Jobs</Link></li>
                    <li><Link to='/addJob'>Add a Job</Link></li>
                    <li><Link to='' onClick={props.handleLogout}>Logout</Link></li>
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <ul className='navItems'>
                    <li><Link to='/signup'>SignUp</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
        )
    }
}


export default NavBar