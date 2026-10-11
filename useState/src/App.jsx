import { useState } from 'react'
import CounterContext from './components/CounterContext'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [name, setName] = useState('John')

  let changeName = () => {
    setName('Doe')

  }
  // coutner ata 
  const initialValue = 10


  const [count, setCount] = useState(initialValue)
  const hanelCountIncrese = () => {

    setCount(count + 1)
  }
  const hanelCountDecrese = () => {
    setCount(count - 1)
  }
  const resetCount = () => {
    setCount(initialValue)
  }
  return (
    <>
      change  name  function
      <button onClick={changeName}>Change Name</button>
      <p>this is  change  name {name} </p>
      <CounterContext.Provider value={{ count, hanelCountIncrese, hanelCountDecrese, resetCount }}>

        <Counter></Counter>

      </CounterContext.Provider>

    </>
  )
}

export default App
