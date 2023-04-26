import React, { Component } from 'react'

class Message extends Component {
    state = {

        msg: "Hello"
    }
    gmHandler = () => {
        this.setState({ msg: "Good Morning" })
    }
    gaHandler = () => {
        this.setState({ msg: "Good Afternoon" })
    }
    geHandler = () => {
        this.setState({ msg: "Good Evening" })
    }
    gnHandler = () => {
        this.setState({ msg: "Good Night" })
    }
    render() {
        return (
            <div>
                <h2>Message Value:{this.state.msg}</h2>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gnHandler}>GA</button>
                <button onClick={this.geHandler}>GE</button>
                <button onClick={this.gnHandler}>GN</button>
            </div>
        )
    }
}

export default Message