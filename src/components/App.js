import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './pages/homeroute/Home'
import Classical from './pages/classicalroute/Classical'
import LightMusic from './pages/lightmusicroute/LightMusic'
import Contact from './pages/contactroute/Contact'
import Navbar from './Navbar/Nav_bar'
import What from './pages/whatroute/what'
import './App.css'

function App(){
    return (
        <div className='container'>
            <Router>
                <Navbar/>
                <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/classical" component={Classical}/>
                <Route path="/lightmusic" component={LightMusic}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/what" component={What}/>
                </Switch>
            </Router>
        </div>
    )
}
export default App;