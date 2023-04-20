import React, { Component } from 'react'
class Wish extends Component {
    state = {
        msg: "Hello"
    }
    gmHaldler = () => {
        this.setState({ msg: "Good Morning" })
    }
    gaHaldler = () => {
        this.setState({ msg: "Good After" })
    }
    geHaldler = () => {
        this.setState({ msg: "Good Evening" })
    }
    gnHaldler = () => {
        this.setState({ msg: "Good Night" })
    }
    render() {
        return (
            <div>
                <h2>Wish Message:{this.state.msg}</h2>
                <button onClick={this.gmHaldler}>GM</button>
                <button onClick={this.gaHaldler} >GA</button>
                <button onClick={this.geHaldler} >GE</button>
                <button onClick={this.gnHaldler} >GN</button>
            </div >
        )
    }
}

export default Wish