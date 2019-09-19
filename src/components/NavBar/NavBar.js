import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = props => {

    let nav = props.user ? 
    <div>
        <ul>
        <li><p>Welcome {props.user.name}</p></li>
        <li><Link to='/jobs'>Jobs</Link></li>
        <li><Link to='/addJob'>Add a Job</Link></li>
        <li><Link to='' onClick={props.handleLogout}>Logout</Link></li>
        </ul>
    </div>
    :
    <div>
        <ul>
        <li><Link to='/signup'>SignUp</Link></li>
        <li><Link to='/login'>Login</Link></li>
        </ul>
    </div>
    
    return (
        <div>
            {nav}
        </div>
    )
}

export default NavBar