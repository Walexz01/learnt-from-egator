import React from 'react'
import './Trainer.css'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import Header from '../../Components/Header'
import Trainercard from '../../Components/Trainercard'


const Trainer = () => {
  return (
      <>
      <Header title='Our Trainers' image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quae ex, excepturi dolorum aliquid nobis, in, officia facere assumenda non odio blanditiis tempore.</Header>
      <section className="trainers">
        <div className="container trainers_container">
          {
            trainers.map(({id,image,name,job,socials})=>{
             return <Trainercard key={id} image ={image} name={name} job={job} social={
                [
                  {icon: <BsInstagram/>, link: socials[0]},
                  {icon: <AiOutlineTwitter/>, link: socials[1]},
                  {icon: <FaFacebookF/>, link: socials[2]},
                  {icon: <FaLinkedinIn/>, link: socials[3]}
                ]
              }/>
            })
          }
        </div>
      </section>
      </>
      
  )
}

export default Trainer