import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from '../components/Button'

export default function Home() {
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
        <Button
          label="Button"
          onClick={function noRefCheck() {
            alert('click')
          }}
          primary
          size="medium"
        />
        <p className="text-4xl text-pink-500 font-bold">Hello Tailwind</p>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>top page &rarr;</h3>
            <p>go to top</p>
          </a>
        </div>
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
