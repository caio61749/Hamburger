import React from 'react'
import './index.css'

const CardBurger = (props) =>{
    return(
        <div id='card-burger'>
            <img src="https://i.pinimg.com/originals/32/98/bf/3298bf4d8f2fa600eb408cda093084b4.png"/>
            <div id='card-info'>
                <div>
                <h1>MONSTER BURGER</h1>
                <h2>Hamburger com 700g de carne, queijo, molho da casa,alface e tomate.</h2>
                </div>
                <h1 className='app-color' id="card-value">R$30,00</h1>
            </div>
        </div>
    )
}

export default CardBurger