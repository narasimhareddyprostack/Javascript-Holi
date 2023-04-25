import React, { Component } from 'react'

class Message extends Component {
    state = {

        msg: "Hello"
    }
    updateHandler = () => {
        this.setState({ msg: "Hello,Rajni" })
    }
    render() {
        return (
            <div>
                <h2>Message Value:{this.state.msg}</h2>
                <button onClick={this.updateHandler}>GM</button>
                <button onClick={this.updateHandler}>GA</button>
                <button onClick={this.updateHandler}>GE</button>
                <button onClick={this.updateHandler}>GN</button>
            </div>
        )
    }
}

export default Message