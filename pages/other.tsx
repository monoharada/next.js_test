import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import { Button } from '../components/Button'
import { useState, useEffect } from 'react'

type ParamsProp = {
  text: string
  key: string
  value: number
}

export default function Home() {
  const params: ParamsProp[] = [
    {
      text: '力',
      key: 'pwr',
      value: 0,
    },
  ]

  const [count, setCount] = useState({ pwr: 0 })

  const handleChange = (input) => (e) => {
    setCount({ ...count, [input]: e.target.value })
  }
  useEffect(() => {
    const wip = 'wip'
    return wip
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Othre page</a>
        </h1>
        <ul>
          {params.map((param, idx) => {
            return (
              <li key={idx}>
                <label>{param.text}</label>
                <input type="number" value={count[param.key]} onChange={handleChange(param.key)} />
              </li>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
