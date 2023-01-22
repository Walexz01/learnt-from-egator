import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import Logo from '../../src/images/logo.png'


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">

            <article>
                <Link to='/' className='Footer logo'>
                    <img src={Logo} alt="" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque doloremque asperiores qui sint voluptatem temporibus tenetur, repellendus omnis est?
                </p>
                <div className="footer__socials">
                    <a href="" target='_blank' rel='noreferre noopener'> <FaLinkedin/> </a>
                    <a href="" target='_blank' rel='noreferre noopener'> <FaFacebook/> </a>
                    <a href="" target='_blank' rel='noreferre noopener'> <AiOutlineTwitter/> </a>
                    <a href="" target='_blank' rel='noreferre noopener'> <AiFillInstagram/> </a>
                </div>
            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Traniers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            
            </article>
            <article>
                <h4>Insights</h4>
                <Link to='/s'>Blog</Link>
                <Link to='/s'>Case Studies</Link>
                <Link to='/s'>Events</Link>
                <Link to='/s'>Communities</Link>
                <Link to='/s'>FAQs</Link>
            
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to='/s'>Contact us</Link>
                <Link to='/s'>support</Link>            
            </article>
        </div>
        <div className="footer_copyright">
            <small>2022 WALEXZ &copy; All Right Reserved</small>
        </div>
    </footer>
  )
}

export default Footer