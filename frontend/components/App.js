import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const increment = evt => {
    setCount(count + 1)
  }
  const decrement = evt => {
    setCount(count - 1)
  }
  const changeInput = evt => {
    const { value } = evt.target
    setInputValue(value)
  }
  return (
    <div>
      <div>the count is {count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <input value={inputValue} onChange={changeInput} />
      <div>{inputValue.length ? 'You typed' : ''} {inputValue}</div>
      <div>{inputValue.length} characters</div>
    </div>
  )
}

export default App
