import React from 'react'
import './index.css'

const Filter = (props) =>{
    return(
        <ul id="app-filter">
            <li>
                <h1>Todos</h1>
            </li>
            <li>
                <h1>Carne</h1>
            </li> 
            <li>
                <h1>Frango</h1>
            </li>
            <li>
                <h1>Vegetariano</h1>
            </li>
        </ul>
    )
}

export default Filter