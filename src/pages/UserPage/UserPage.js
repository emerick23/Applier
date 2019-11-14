import React, {Component} from 'react'
import './UserPage.css'


class UserPage extends Component {

    state = {
        
    }

    render() {
        return (
            <div className='UserPage'>Hello {this.props.user.name}</div>
        )
    }
}

export default UserPage