import { useState } from 'react'

const Crement = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <>
      <p>課題7,8?</p>
      <button onClick={increment}>足して</button>
      <button onClick={decrement}>引いて</button>
      <p>result:{count}</p>
    </>
  )
}

export default Crement
