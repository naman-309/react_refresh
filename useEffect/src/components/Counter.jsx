import { useEffect, useState } from "react"
const Counter = () => {
    let initial = 10
    const [count, setCount] = useState(initial)

    const hanelplus = () => {

        setCount(count + 1)
    }
    const hanelminus = () => {

        setCount(count - 1)
    }


    useEffect(() => {
        console.log("useeffect renreD on count  chnage ", count)
    }, [count])
    return (
        <div>
            <h4>Counter app</h4>
            <p>value :{count}</p>
            <button onClick={hanelplus}>click to increse counter</button> <br></br>
            <button onClick={hanelminus}>click to Decerese counter</button> <br></br>




        </div>
    )
}

export default Counter
