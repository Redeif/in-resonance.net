import React from 'react';
import { Link } from 'react-router-dom';
import back_logo from '../img/InResonance_Logo_Schwarz.svg';


const Header = () => {
    return (
      <div className='header'>
        <Link to='/'><img className='headerLogo' src={back_logo} alt='In Resonance Logo' /></Link>
        <div className='links'>
          <h2>
            <Link to='/'>Homepage</Link> | <Link to='/about-me'>About me</Link> | <Link to='/contact'>Contact</Link> | <Link to='/impressum'>Imprint</Link>
          </h2>
        </div>
      </div>
    );
  }
  

export default Header
