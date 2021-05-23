import { useState, useEffect } from 'react'

type ParamsProp = {
  text: string
  key: string
}

export const Parametar = () => {
  const params: ParamsProp[] = [
    {
      text: '力',
      key: 'pwr',
    },
    {
      text: '素早さ',
      key: 'spd',
    },
    {
      text: '賢さ',
      key: 'int',
    },
    {
      text: '器用さ',
      key: 'dex',
    },
  ]

  const [count, setCount] = useState({ pwr: 0, spd: 0, int: 0, dex: 0 })
  const [result, setResult] = useState({ origin: 20, sum: 0 })
  const paramsArray: number[] = Object.values(count)

  const handleChange = (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) {
      return false
    }
    setCount({ ...count, [input]: e.target.value })
  }
  useEffect(() => {
    const total = paramsArray.reduce((prev, current) => {
      return Number(prev) + Number(current)
    }, 0)
    setResult({ ...result, origin: 20 - total, sum: total })
  }, [count])

  return (
    <div>
      <p>初期値:{result.origin > 0 ? result.origin : '---'}</p>
      <ul>
        {params.map((param, idx) => {
          return (
            <li key={idx} className="h-12 grid grid-cols-2">
              <label className="w-20">{param.text}</label>
              <input
                className="w-10 bg-gray-200"
                type="number"
                value={count[param.key]}
                onChange={handleChange(param.key)}
              />
            </li>
          )
        })}
      </ul>
      <p>合計：{result.sum}</p>
      {result.sum > 20 ? <p className="text-red-500">20以上になっています</p> : null}
    </div>
  )
}
