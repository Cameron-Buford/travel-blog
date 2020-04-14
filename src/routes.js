import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Destinations from './components/Destinations'
import Posts from './components/Posts'
import Gallery from './components/Gallery'
import Auth from './components/Auth'



export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/Destinations' component={Destinations}/>
        <Route path='/Posts' component={Posts}/>
        <Route path='/Gallery' component={Gallery}/>
        <Route path='/Auth' component={Auth}/>
        
    </Switch>
);