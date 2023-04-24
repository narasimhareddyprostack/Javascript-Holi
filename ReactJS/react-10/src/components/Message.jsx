import React from 'react'
class Message extends React.Component {
    //msg = "Hello....."
    state = {
        msg: "Hello,GM"
    }
    gmHandler = () => {
        this.setState({
            msg: 'GM Rahul Gandhi'
        })
    }
    gnHandler = () => {
        this.setState({ msg: "GN Rahul ji" })
    }
    render() {
        return <div>
            <h2>Message Component</h2>
            <h3>Message Value:{this.state.msg}</h3>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}

export default Message