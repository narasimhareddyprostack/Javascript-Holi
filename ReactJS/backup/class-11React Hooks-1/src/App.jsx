import React from 'react'
import Message from './HooksEx/Message'
import Counter from './HooksEx/Counter'
import Test from './HooksEx/Test'
import Login from './HooksEx/Login'
import Users from './HooksEx/Users'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
    return (
        <div>
            <Router>
                <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                    <Link to="/index">React Hooks</Link>
                    <div className='ml-auto'>
                        <ul className='navbar-nav'>
                            <li className="nav-list"><Link className="nav-link" to="/useStateEx">useState-Ex1</Link> </li>
                            <li className="nav-list"><Link className="nav-link" to="/useStateEx2">useState-Ex2</Link> </li>
                            <li className="nav-list"><Link className="nav-link" to="/classLife">LifeCycle-Class</Link> </li>
                            <li className="nav-list"><Link className="nav-link" to="/usersClass">Users-Class</Link> </li>
                            <li className="nav-list"><Link className="nav-link" to="/useRefEx">useRef</Link> </li>
                        </ul>
                    </div>
                </nav >
                <Switch>
                    <Route path="/useStateEx" component={Message} />
                    <Route path="/useStateEx2" component={Counter} />
                    <Route path="/classLife" component={Test} />
                    <Route path="/usersClass" component={Users} />
                    <Route path="/useRefEx" component={Login} />
                </Switch>
            </Router >
        </div >
    )
}

export default App