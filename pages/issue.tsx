import Head from 'next/head'
import CountName from '../components/CountName'
import Crement from '../components/Crement'
import Join from '../components/Join'

const array: string[] = ['taro', 'jirou', 'sabur', 'shiro', 'goro']
const issue = () => {
  const greet = () => {
    return 'Hello World!'
  }
  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      issue
      <p>課題1</p>
      <p>{greet()}</p>
      <p>課題2</p>
      <ul>
        {array.map((item, idx) => {
          return (
            <li key={idx} className={idx == 4 ? 'font-bold' : ''}>
              {item}
              {idx == 4 ? '5番目' : ''}
            </li>
          )
        })}
      </ul>
      <CountName />
      <Crement />
      <Join />
    </div>
  )
}

export default issue
