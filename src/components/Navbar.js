import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logoMO.svg'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='tire logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>inicio</Link>
          </li>
          <li>
            <Link to='/about'>acerca de</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
