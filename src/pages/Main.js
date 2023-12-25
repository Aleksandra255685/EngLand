import React from 'react'
import { NavLink } from "react-router-dom";

import Theory from '../img/knowledge.png'
import Vocabulary from '../img/dictionary.png'
import Reading from '../img/open-book.png'
import Audio from '../img/music.png'

export default function Main() {
  return (
    <div >
        <div className='section'>
            <p>Добро пожаловать в EngLand — сервис для изучения английского языка!</p>
        </div>
        <div className='box'>
            <p className='title'>Здесь вы откроете удивительный мир английского</p>
            <p className='text'>С нами вы сможете усовершенствовать все навыки языка</p>
            <div className='cards'> 
                <div className='card'>
                    <img src={Theory} className='img' alt="theory"/>
                    <NavLink to="/theory">Теория</NavLink>
                    <p>Изучай теорию и закрепляй знания с помощью тестов</p>
                </div>
                <div className='card'>
                    <img src={Vocabulary} className='img' alt="vocabulary"/>
                    <NavLink to="/vocabulary">Лексика</NavLink>
                    <p>Изучай и повторяй слова по различным темам</p>
                </div>
                <div className='card'>
                    <img src={Reading} className='img' alt="reading"/>
                    <NavLink to="/reading">Чтение</NavLink>
                    <p>Читай интересные тексты и выполняй задания</p>
                </div>
                <div className='card'>
                    <img src={Audio} className='img' alt="audio"/>
                    <NavLink to="/listening">Аудирование</NavLink>
                    <p>Слушай аудио и смотри видео с живой речью</p>
                </div>
            </div>
            <div className='invitation'>
                <p>Давайте вместе стремиться к Вашим целям и покорять новые вершины в мире английского языка!</p>
                <div className="button">
                    <NavLink to="/authorization"> Зарегистрироваться</NavLink>
                </div>
            </div>
        </div>
    </div>
    
  )
}
