import { useState } from 'react'

const CountName = () => {
  const [state, setState] = useState(false)
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const btnHandler = () => {
    setState(true)
    setCount(count + 1)

    if (count > 0 && count % 3 === 0) {
      setName('Name!!!')
    } else if (state) {
      setName('name...')
    }
  }
  return (
    <>
      <p>課題3,4</p>
      <div className="flex">
        <button onClick={btnHandler}>click!</button>
        <p className={count > 0 && count % 3 == 0 ? 'font-bold' : ''}>{count}</p>
      </div>
      <p>{count > 0 && count % 3 == 0 ? 'name!!!' : state ? 'name' : ''}</p>
      <p>{name}</p>
    </>
  )
}

export default CountName
