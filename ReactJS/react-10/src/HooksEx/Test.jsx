import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props)
        console.log("First Const")
    }
    componentDidMount(){
        console.log("Third - componet Did Mount")
    }
    render() {
        console.log("Second - Render")
        return (
            <div>Test</div>
        )
    }
}

export default Test