import React, {Component} from 'react'

class IndexPage extends Component {
    
    state = {
        jobs: []
    }

    render() {
        return (
            <div>
                <p>{this.props.user.name}</p>
            </div>
        )
    }
}

export default IndexPage