import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>

                    <Route path="/index" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
        </div>
    )
}

export default App