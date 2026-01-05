import React from 'react'
import { Link } from 'react-router-dom'
import RandomGame from './RandomGame'

const Header = () => {
  return (
    <header>
      <RandomGame/>
      <Link to='/'>
        <h1>game lib
          <span>r</span>
          a
          <span>rr</span>
          y</h1>
      </Link>
      
      <Link to='/about'>
        about me
      </Link>
      

    </header>
  )
}

export default Header