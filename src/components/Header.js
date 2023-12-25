import { NavLink } from "react-router-dom";
import React from 'react'
import Castle from '../img/castle.png'
import Home from '../img/home.png'

export default function Header() {
  return (
    <header>
        <NavLink to="/"  className='div_logo'> 
            <img src={Castle} className='logo_img' alt="logo"/>
            <span className='logo'>EngLand</span>
          </NavLink>
        <ul className='nav'>
            <li><NavLink to="/theory">Теория</NavLink></li>
            <li><NavLink to="/vocabulary">Лексика</NavLink></li>
            <li><NavLink to="/reading">Чтение</NavLink></li>
            <li><NavLink to="/listening">Аудирование</NavLink></li>
            <li><NavLink to="/authorization"><img src={Home} className='home_img' alt="home"/></NavLink></li>
        </ul>
    </header>
  )
}
