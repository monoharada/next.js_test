import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Parametar } from '../components/Parametar'
import Level from '../components/Level'
// import { Button } from '../components/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Othre page</a>
        </h1> */}
        <Level />
        <Parametar />
      </main>
    </div>
  )
}
