import React from 'react'
import './Plans.css'
import Headerimg from '../../images/header_bg_4.jpg'
import {plans} from '../../data'
import Header from '../../Components/Header'
import Card from '../../UI/Card'

const Plans = () => {
  return (
    <>
    <Header title='MEMBERSHIP PLANS' image={Headerimg}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, reprehenderit voluptas alias et dolor consequuntur.
    </Header>

    <section className="plans">
      <div className="container plans_container">
        {
          plans.map(({id,name,desc,price,features})=>{
            return <Card key={id} className='plan'>
               <h3>{name}</h3>
               <small>{desc}</small>
               <h1>{`$${price}`}</h1><h2>/mo</h2>
               <h4>Feature</h4>
               {
                features.map(({feature,available},index)=>{
                  return <p key={index} className={available ? '': 'disabled'}>{feature}</p>
                })
               }
               <button className='btn lg'>Choose plan</button>
               
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans