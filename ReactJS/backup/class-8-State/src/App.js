import React, { Component } from 'react'
import Message from './Message/Message'
import Counter from './Counter/Counter'
import Wish from './Wish/Wish'
class App extends Component {
    render() {
        return (
            <div>
                <h1>App Component</h1>
                <hr />
                <Wish />
            </div>
        )
    }
}

export default App