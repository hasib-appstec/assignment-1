import React, {useState} from 'react'
import "./Accordion.css"

const MyAccordion = ({question, answer}) => {

  const [show, setShow] = useState(false)
  return (
    <>
      <div className='main-heading'>
        <p onClick={() => {setShow(!show)}}>{show ? "-" : "+"}</p>
        <h3 className='questions'>{question}</h3>
      </div>

      <div>
        {show && <p className='answers'>{answer}</p>}
      </div>


    </>
  )
}

export default MyAccordion