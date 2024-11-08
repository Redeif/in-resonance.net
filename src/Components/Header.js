import React from 'react'
import back_logo from '../img/InResonance_Logo_Schwarz.svg'

const Header = () => {
  return (
    <div className='header'>
        <a href='/'><img className='headerLogo' src={back_logo} alt='In Resonance Logo'></img></a>
        <div className='links'>
            <h2>
            <a href='/'>Homepage</a> | <a href='/about'>About me</a> | <a href='/contact'>Contact</a> | <a href='/impressum'>Imprint</a>
            </h2>
        </div>      
    </div>
  )
}

export default Header
