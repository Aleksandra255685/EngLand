import React from 'react'
import Castle from '../img/castle.png'

export default function Footer() {
  return (
    <footer>
      <div className='div_logo'> 
            <img src={Castle} className='logo_img' alt="logo"/>
            <span className='logo'>EngLand</span>
      </div>
    </footer>
  )
}
