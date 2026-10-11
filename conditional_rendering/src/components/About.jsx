
const About = () => {


    let data = "no"

    console.log(typeof data)

    return (
        <>
            <hr></hr>
            {data && <p>About page is rendered because data value is true</p>}
        </>

    )
}

export default About