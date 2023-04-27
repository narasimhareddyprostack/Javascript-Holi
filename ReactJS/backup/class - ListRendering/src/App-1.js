import React from 'react'
/* import Employee from './Employee/Employee'
import User from './User/User' */
import Digital from './Digital/Digital'
import Navbar from './Navbar/Navbar'
class App extends React.Component {
    render() {
        return <div>
            {/* 
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <a href="#" className='navbar-brand'>Employee Data</a>
                <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li className='nav-list'><a href="/index" className='nav-link'>Home</a></li>
                        <li className='nav-list'><a href="/about" className='nav-link'>About</a></li>
                        <li className='nav-list'><a href="/service" className='nav-link'>Services</a></li>
                        <li className='nav-list'><a href="/contact" className='nav-link'>Contact</a></li>
                    </ul>
                </div>
            </nav>
 */}            <hr />
            <Digital />
        </div >
    }
}
export default App