import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
        console.log("First Constructor")
    }
    msg = "Hello,,,,"
    gmHandler = () => {
        console.log("Without clicking")
        this.msg = "Hello,GM Mr Rahul"
        this.forceUpdate()
    }
    gnHandler() { }
    render() {
        console.log("Second - render method")
        return (
            <div>
                <h1>Message Component</h1>
                <hr />
                <h3>Message:{this.msg}</h3>
                <button onClick={this.gmHandler}>GM</button>
                <button>GN</button>
            </div>
        )
    }
}

export default Message