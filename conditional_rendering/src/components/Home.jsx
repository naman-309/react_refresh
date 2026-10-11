
const Home = () => {
    let data = true

    if (data === true) {
        return (
            <>
                <p>home page  is  rendered because  data  value is true</p>
            </>
        )
    } else {
        return (
            <>
                <p>home page  is  not rendered because  data  value is false</p>
            </>)
    }

}



export default Home
