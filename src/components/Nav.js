import React from 'react'
import useAxios from '../hooks/useAxios'
import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getUser} from '../Duxx/reducer'


const Nav = () => {
    return(
        <div>
            <button>Blog Posts</button>
            Nav 
            <button>Gallery</button>
            <button>Destinations in Planning</button>
        </div>
    )
}

export default Nav
