import React from 'react'
import Header from '../../Components/Header'
import './About.css'
import storyimage from '../../images/about1.jpg'
import HearImage from '../../images/header_bg_1.jpg'
import visionimage from '../../images/about2.jpg'
import missionimage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title='About Us' image={HearImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat voluptates reiciendis suscipit eveniet incidunt nobis id quibusdam, quasi odit?
        </Header>

        <section className='about__story'>
          <div className="container about__story-container">
            <div className="about__section-image">
              <img src={storyimage} alt="Our Story Image" />
            </div>
            <div className="about__section-content">
              <h1>Our Story</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquid provident unde dolorum cupiditate, atque voluptatibus. Animi iure maxime voluptate. Delectus sint veniam magnam sequi tempore nihil animi facere accusamus mollitia cupiditate. Deserunt, minus. Distinctio fugiat, eos quia sit est neque minus hic sed recusandae totam, voluptates, deserunt quos dolore ducimus fugit ad facilis alias consectetur odit! Excepturi, deleniti quo?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sapiente eos ex, sequi placeat autem vitae, aliquam neque suscipit rerum itaque ullam architecto corrupti nulla reiciendis, eligendi cum ipsam laborum.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officia ratione fuga quos natus quaerat.</p>
            </div>
          </div>
        </section>

        <section className='about__vision'>
          <div className="container about__vision-container">
            <div className="about__section-content">
              <h1>Our Vision</h1>
              <p> cupiditate, atque voluptatibus. Animi iure maxime voluptate. Delectus sint veniam magnam sequi tempore nihil animi facere accusamus mollitia cupiditate. Deserunt, minus. Distinctio fugiat, eos quia sit est neque minus hic sed recusandae totam, voluptates, deserunt quos dolore ducimus fugit ad facilis alias consectetur odit! Excepturi, deleniti quo?</p>
              <p> Commodi sapiente eos ex, sequi placeat autem vitae, aliquam neque suscipit rerum itaque ullam architecto corrupti nulla reiciendis, eligendi cum ipsam laborum.</p>
            </div>
            <div className="about__section-image">
              <img src={visionimage} alt="Our vision Image" />
            </div>
          </div>

        </section>

        <section className='about__mission'>
          <div className="container about__mission-container">
            <div className="about__section-image">
              <img src={missionimage} alt="Our mission Image" />
            </div>
            <div className="about__section-content">
              <h1>Our Mission</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquid provident unde dolorum cupiditate, atque voluptatibus. Animi iure maxime voluptate. Delectus sint veniam magnam sequi tempore nihil animi facere accusamus mollitia cupiditate. Deserunt, minus. Distinctio fugiat, eos quia sit est neque minus hic sed recusandae totam, voluptates, deserunt quos dolore ducimus fugit ad facilis alias consectetur odit! Excepturi, deleniti quo?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sapiente eos ex, sequi placeat autem vitae, aliquam neque suscipit rerum itaque ullam architecto corrupti nulla reiciendis, eligendi cum ipsam laborum.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officia ratione fuga quos natus quaerat.</p>
            </div>
          </div>
        </section>

    </>
  )
}

export default About