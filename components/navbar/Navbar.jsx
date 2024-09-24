import React from 'react'
import './navbar.css'
import { bg } from '../../src/assets/image'

const Navbar = () => {
  return (
      <header className='header'>
      <nav className='nav'>
        <div className="container nav__container">
          <a href="">
        <h2 className="nav__logo">PROWEB</h2>
        </a>
        <ul className="menu">
          <li><a href="" className="menu__link">Обо мне</a></li>
          <li><a href="" className="menu__link">Работы</a></li>
          <li><a href="" className="menu__link">Контакты</a></li>
        </ul>
        </div>
      </nav>
      <div className="bg">
      <div className="container header__container">
        <h1 className="header__title">Добро пожаловать на мой сайт</h1>
        <a href="" className="header__link">Позвонить</a>
      </div>
      </div>
      </header>
  )
}

export default Navbar