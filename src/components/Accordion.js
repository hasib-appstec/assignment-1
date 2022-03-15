import React, {useState} from 'react'
import "./Accordion.css"
import {questions} from './api'
import MyAccordion from './MyAccordion';

const Accordion = () => {

  const [data, setData] = useState(questions);
  return (
    <>

      <section className='main-div'>

        {
          data.map((curElem) => {
            const {id} = curElem;
            return <MyAccordion key={id} {...curElem} />
          })
        }
      </section>
    </>
  )
}

export default Accordion