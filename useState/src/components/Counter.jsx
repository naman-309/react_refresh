import CounterContext from './CounterContext'
import { useContext } from 'react'


const Counter = () => {
    const { hanelCountIncrese, hanelCountDecrese, resetCount, count } = useContext(CounterContext);
    return (
        <>
            <hr></hr>
            conunter app

            the  value  of count : {count}
            <button onClick={hanelCountIncrese}> click to increse count </button>
            <button onClick={hanelCountDecrese}> click to ecerese count </button>
            <button onClick={resetCount}> click to reset count </button>



        </>
    )

}
export default Counter