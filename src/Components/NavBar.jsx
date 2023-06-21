import React from 'react'
import logo from '../assets/logo_cinema.png'
import buscador from '../assets/buscador.png'


export const NavBar = () => {
  return (
    <>
      <header>
        <img src={logo} alt="logo Cinema" />
        <h2>Yesi</h2>

      </header>
      <nav>
          <ul className='menu'>
            <li><a href="">EN CARTELERA</a></li>
            <li><a href="">POPULAR</a></li>
            <li><a href="">MÁS VALORADAS</a></li>
            <li><a href="">PROXIMAMENTE</a></li>
            <li className='buscador'>
              <input type="text" />
              <img src={buscador} alt="icono buscador" />
            </li>
          </ul>
        </nav>
    </>


  )
}
