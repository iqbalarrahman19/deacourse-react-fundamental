import React, { useRef } from "react"
import '../../App.css'
import Image from "../../Image/img.jpg"
import Typewriter from "typewriter-effect"
import About from "../About/main.about"
const Home = () => {
    const LinkRef = useRef(null)
    return (
    <React.Fragment>
    <div className="container-image">
        <div className="bg-image"></div>
        <img src={Image} alt="img" className="image" />
        <div className="title">
            <h1 className="text1">Hi 😀</h1>
            <h1 className="text2">Welcome</h1>
            <h1 className="text3">My Website</h1>
            <div className="text4">
                <Typewriter 
                    options={{autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                        "Ini adalah website sederhana saya.",
                        "terima kasih atas ilmu reactnya bang dea."
                    ],
                    }}
                />
            </div>
        </div>
    </div>
    <About rel={LinkRef}/>
    </React.Fragment>       
    )
}
export default Home