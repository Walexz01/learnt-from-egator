import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join the Legends of The Fitness Lorld</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa debitis nulla quidem porro earum.
          </p>
          <Link className='btn lg' to='/plans'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main_header-circle"></div>
          <div className="man_header-image">
            <img src={image} alt="Main Header image" />
          </div>
        </div>


      </div>
    </header>
  )
}

export default MainHeader