import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Btn from './Btn'
import CounterRef from './CounterRef'

const App = () => {
  const [count, setCount] = useState(10)

  let value = useRef(0)
  let btnref = useRef()
  let focusref = useRef()
  const handel = () => {
    value.current = value.current + 1
    console.log(value.current)
    setCount(count + 1)

  }
  let color = "blue"
  const changeColor = () => {
    btnref.current.style.backgroundColor = color
    console.log("color  chnage to :", color)
  }

  const resetcolor = () => {
    btnref.current.style.backgroundColor = ""
    console.log("butn color  reset")

  }
  const chnagefocus = () => {

    focusref.current.focus()

  }

  return (
    <div>
      {count}
      <button
        ref={btnref}
        onClick={handel}>click to increaee </button>
      <br></br>
      <button onClick={changeColor}>click to chnage color</button> <br></br>
      <button onClick={resetcolor}>click to reset color</button>
      <br></br>
      <input ref={focusref} type='text' value=" chnage  the  focus " /> <br></br>
      <button onClick={chnagefocus}>click to chnage  focus</button>
      <Btn></Btn>
      <CounterRef></CounterRef>
    </div >
  )
}

export default App
