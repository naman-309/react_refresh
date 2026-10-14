import React from 'react'
import { useRef } from 'react'

const Btn = () => {

    let clickCount = useRef(0)


    const handel = () => {
        clickCount.current = clickCount.current + 1


        console.log("btn clicked  ", clickCount.current, "times")
    }
    return (
        <div>
            <button onClick={handel}>click and check console</button>
        </div >
    )
}

export default Btn
