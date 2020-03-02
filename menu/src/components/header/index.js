import React from 'react'
import './index.css'

const AppHeader = (props) =>{
    return(
        <div id="app-header">
            <h1 id="app-name" className="app-color">Han's Burger</h1>
            <h2 id="app-subtitle">O verdadeiro hamburger real</h2>
        </div>
    )
}

export default AppHeader