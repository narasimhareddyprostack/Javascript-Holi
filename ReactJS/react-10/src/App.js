import React from 'react'
//import Salary from './EventBinding/Salary'
import Wish from './LifeCycleEx/Wish'
class App extends React.Component {
    render() {
        return <div>
            <nav className='navbar navbar-dark bg-dark'>
                <a href="#" className='navbar-brand'>Product Data</a>
            </nav>
            <hr />
            <Wish />
        </div >
    }
}
export default App