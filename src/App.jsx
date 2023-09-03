import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
  }

  const removeValue = () => {
    if (count > 1) {
      setCount(count - 1)
    }

  }

  return (
    <>
      <div className='counter-container'>
        <h3>Counter</h3>
        <input type="text" value={count} readOnly /> <br /> <br />
        {/* <h2>Value is:&nbsp;{count} </h2> */}
        <button onClick={addValue}>Add Value</button>
        &nbsp;
        <button onClick={removeValue}


        > Remove value </button>

      </div>

    </>
  )
}

export default App
