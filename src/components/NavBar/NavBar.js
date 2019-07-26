import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = props => {
    let nav = props.user ? 
    <div>
        <p>Welcome {props.user.name}</p>
        <button onClick={props.handleLogout}>Logout</button>
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