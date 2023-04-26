import React, { Component } from 'react'

class Wish extends Component {
    constructor(props) {
        super(props)
        console.log("First Const")
    }
    componentDidMount() {
        console.log("Third - class Comp life cycle method ie mount")
    }
    render() {
        console.log("Second - Render method")
        return (
            <div>
                <h2>Wish Component</h2>
            </div>
        )
    }
}

export default Wish