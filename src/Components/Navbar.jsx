
import React, { useState } from 'react'
import './Navbar.css'
import { NavLink,Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import {VscThreeBars} from 'react-icons/vsc'
import {IoCloseSharp} from 'react-icons/io5'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <nav>
        <div className="container nav__container">
            <Link onClick={()=> setIsNavShowing(false)} to="/" className='logo'>
                <img src={Logo} alt="Nav-Logo" />
            </Link>
            <ul className= {`nav__links ${isNavShowing? 'show_nav':'hide-nav'}`}>
                {
                  links.map(({name,path},index)=>{
                    return(
                       <li key={index} className={({isActive})=> isActive ? 'active-nav': ''}>
                            <NavLink onClick={()=> setIsNavShowing(prevstate=>!prevstate)} to={path}  >{name}</NavLink>
                       </li>
                      
                    )
                  })  
                }
            </ul>
             <button onClick={()=> setIsNavShowing(prevstate=>!prevstate)} className='nav__toggle-btn'>
              {
                isNavShowing? <IoCloseSharp/> : <VscThreeBars/>
              }
             </button>
        </div>
        
    </nav>
  )
}

export default Navbar