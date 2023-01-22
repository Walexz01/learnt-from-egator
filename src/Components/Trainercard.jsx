import React from 'react'
import Card from '../UI/Card'

const Trainercard = ({image,name,job,social}) => {
  return (
    <Card className='Ourtrainer'>
        <div className="trainer__img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer_socials">
            {
                social.map(({icon,link},index)=>{
                    return <a href={link} key={index} target='_blank' rel='noreffer noopener'>{icon}</a>
                })
            }
        </div>

    </Card>
  )
}

export default Trainercard