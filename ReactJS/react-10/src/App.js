import React from 'react'
import User from './components/User'
import { store } from './redux/store'
import { Provider } from 'react-redux'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <h1>App component</h1>
                <hr />
                <User />
            </Provider>

        </div>
    )
}

export default App