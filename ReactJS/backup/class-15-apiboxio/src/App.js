import React from 'react'
import Home from './Boxio/Home'
import Cust_Moves from './Boxio/Cust_Moves'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends React.Component {
    render() {
        return <React.Fragment>
            <Router>
                <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                    <Link to="/" className='navbar-brand'>User App</Link>
                    <div className='ml-auto'>
                        <ul className='navbar-nav'>
                            <li className='nav-list'><Link className='nav-link' to="/home">Home</Link></li>
                            <li className='nav-list'><Link className='nav-link' to="/cust">Customer Movies</Link></li>

                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/cust" element={<Cust_Moves />} />

                </Routes>

            </Router>
        </React.Fragment>
    }
}


export default App