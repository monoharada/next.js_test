import { useState, useEffect } from 'react'

const Level = () => {
  const [exp, setExp] = useState(0)
  const [level, setLevel] = useState(1)

  const getExp = () => {
    setExp((prevE) => prevE + 1)
  }
  useEffect(() => {
    const coefficient = 1 / 1.5
    setLevel(Math.round(exp * coefficient))
  })
  return (
    <div>
      <button onClick={getExp} className="p-2 bg-blue-300 rounded-full hover:bg-opacity-75">
        Get Exp
      </button>
      <h2>Lv:{level > 1 ? level : 1}</h2>
    </div>
  )
}

export default Level
