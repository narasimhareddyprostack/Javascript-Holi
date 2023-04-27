import React from 'react'
/* import Employee from './Employee/Employee'
import User from './User/User' */
import Digital from './Digital/Digital'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
class App extends React.Component {
    render() {
        return <div>
            <Router>
                <Navbar />
                <Digital />
            </Router>
        </div >
    }
}
export default App