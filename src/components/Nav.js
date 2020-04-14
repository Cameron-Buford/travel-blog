import React from 'react'
import useAxios from '../hooks/useAxios'
import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getUser} from '../Duxx/reducer'


const Nav = ({history}) => {
    return(
        <div>
            <button onClick={() => history.push('/Posts')}> Blog Posts </button>
            Nav 
            <button onClick = {() => history.push('/Gallery')}>Gallery</button>
            <button onClick = {() => history.push('/Destinations')}>Destinations in Planning</button>
        </div>
    )
}

export default (withRouter(Nav))
