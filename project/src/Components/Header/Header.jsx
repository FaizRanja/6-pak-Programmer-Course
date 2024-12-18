import React, { Fragment } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   <Fragment>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
   </Fragment>
  )
}

export default Header