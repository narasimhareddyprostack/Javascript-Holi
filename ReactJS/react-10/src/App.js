import React from 'react'
import Message from './components/Message'
import Product from './Product/Product'
class App extends React.Component {
    render() {
        return <div>
            <nav className='navbar navbar-dark bg-dark'>
                <a href="#" className='navbar-brand'>Product Data</a>
            </nav>
            <hr />
            <Product />
        </div >
    }
}
export default App