import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div >
        <nav className='Navbar'>
        <li className='Navbar-items'><img src={props.image}/></li>
        <li className='Navbar-items'>{props.item1}</li>
        <li className='Navbar-items'><Link to="/AboutUs">{props.item2}</Link></li>
        <li className='Navbar-items'><Link to="/faq's">{props.item3}</Link></li>
        <li className='Navbar-items'><Link to="/ReleaseNotes">{props.item4}</Link></li>
        </nav>

    </div>
  )
}
