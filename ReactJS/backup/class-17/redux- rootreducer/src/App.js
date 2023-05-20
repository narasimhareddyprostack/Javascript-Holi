import React from 'react'
import Counter from './Counter/Counter'
import Message from './Message/Message'
import { Provider } from 'react-redux'
import { store } from './redux/store'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <h1>App component</h1>
                <hr />
                <Message />
                <Counter />
            </Provider>
        </div>
    )
}

export default App