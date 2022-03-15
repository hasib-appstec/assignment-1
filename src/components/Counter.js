import React, {useState} from 'react'
import "../App.css"

const Counter = () => {

  const [count, setCount] = useState(0)

  return (
    <div className='counter'>

      <h1 style={{color: "royalblue"}}>{count}</h1>
      <button style={{width: "130px"}} onClick={() => setCount(count + 1)}>Increment</button> <br />
      <button style={{width: "130px"}} onClick={() => setCount(count + -1)}>Decrement</button>

    </div>
  )
}

export default Counter