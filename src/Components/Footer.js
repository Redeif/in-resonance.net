import React from 'react'
import { Link } from 'react-router-dom';
import instagram_logo from '../img/Instagram_Glyph_Gradient.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <a href='/'>Homepage</a>    
        </div>
        <div>
            <Link to='/impressum'>Impressum</Link>
        </div>
        <div>
            <a href='https://www.instagram.com/freider.photography/'><img alt='Instagram Logo' src={instagram_logo}></img></a>
        </div>
      
    </div>
  )
}

export default Footer