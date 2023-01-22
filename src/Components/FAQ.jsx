import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'


const FAQ = ({id,question,answer}) => {
  const [isAnwerShowing, setIsAnwerShowing] = useState(false)
  return (
    <article className='faq' onClick={()=> setIsAnwerShowing(prevState=>!prevState)}>
      <div>
        <h4>{question}</h4>
        <button  className="faq__icon">
          {
            !isAnwerShowing ? <AiOutlinePlus/>: <AiOutlineMinus/>
          }
        </button>
      </div>
      { isAnwerShowing && <p>{answer}</p>}

    </article>
  )
}

export default FAQ