import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    getUserHandler = () => {
        //invoke rest apis
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response)
            })
            .catch(() => { })
    }
    render() {
        return (
            <div>
                <h1>User data</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <button onClick={this.getUserHandler}>Click Buddy</button>
            </div>
        )
    }
}

export default User