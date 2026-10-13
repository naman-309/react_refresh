import { useState, useEffect } from "react"
const Changemsg = () => {
    const [msg, setmsg] = useState("hello react")

    useEffect(() => {

        console.log("new  msg upateD")
    }, [msg])

    const hanelmsg = () => {

        setmsg("this is new")

    }

    return (


        < div >
            this is chnage  msg component
            <br />
            <p>   : {msg}</p>
            <button onClick={hanelmsg}>click to chnage  the  msg</button>


        </div >
    )
}

export default Changemsg
