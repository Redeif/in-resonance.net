import React from 'react'
import back_logo from '../img/InResonance_Logo_Schwarz.svg'

const Header = () => {
  return (
    <div className='header'>
        <a href='/'><img className='headerLogo' src={back_logo} alt='In Resonance Logo'></img></a>
        <div className='links'>
            <h2>
            <a href='in-resonance.net/'>Homepage</a> | <a href='in-resonance.net/about'>About me</a> | <a href='in-resonance.net/contact'>Contact</a> | <a href='in-resonance.net/impressum'>Imprint</a>
            </h2>
        </div>      
    </div>
  )
}

export default Header
