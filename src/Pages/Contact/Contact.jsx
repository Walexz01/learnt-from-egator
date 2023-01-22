import './Contact.css'
import React from 'react'
import Headerimg from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import Header from '../../Components/Header'

const Contact = () => {
  return (
    <>
      <Header image={Headerimg} title='Get In Touch'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quasi rem non doloremque illum ipsa? Tempora consectetur mollitia quas id doloribus quibusdam ut dolorum commodi nobis, assumenda dolore consequatur illo?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:adegbiteadewaleoluwaseun@gmail.com" target='_blank' rel='noreferrer noopener'>
            <MdEmail/>
            </a>
            <a href="" target='_blank' rel='noreferrer noopener'>
            <BsMessenger/>
            </a>
            <a href="https://wa.me/+2348156828375" target='_blank' rel='noreferrer noopener'>
            <IoLogoWhatsapp/>     
            </a>
          </div>
        </div>
      </section>
  
    </>
  )
}

export default Contact