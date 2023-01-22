import React from 'react'
import './Gallery.css'
import Header from '../../Components/Header'
import headerimg from '../../images/header_bg_3.jpg'



const Gallery = () => {
  const imagelength = 15;
  const images =[]
  for(let i = 1 ; i<= imagelength ; i++){
    images.push(require(`../../images/gallery${i}.jpg`))

  }
  return (
    <>
    <Header image={headerimg} title='Our Gallery'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero adipisci dolorem atque fuga repellendus nihil perspiciatis quo. Voluptatem, aut corrupti!
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image,index)=>{
            return <article key={index} >
              <img src={image} alt={`gallery image${index}`}/>
            </article>
          })
        }
      </div>
    </section>
    </>

  )
}

export default Gallery