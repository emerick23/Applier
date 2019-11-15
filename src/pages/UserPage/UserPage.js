import React from 'react'
import './UserPage.css'


const UserPage = (props) => {
    return (
        <div className='container UserPage'>
            <div className='section'>
                <h4>Links</h4>
                <div className='divider divideLine'></div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>Personal Website Link:</th>
                        <td>{props.user.personalWebsiteLink}</td>
                    </tr>
                    <tr>
                        <th>LinkedIn Page:</th>
                        <td>{props.user.linkedInLink}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserPage