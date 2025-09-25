import { Link } from 'react-router-dom'
import '../Frontend/Style/Hero.css'

function Hero(props) {
    return (
        <>
            <div className={`bgimage-text ${props.isHome ? "hero-home" : ""}`}>
                <div className="image-content">
                    <h4>{props.heading}</h4>
                    <p>{props.content}</p>
                    {props.isButton ? <button type="btn"><Link to="/contact">Contact us</Link></button> : ""}
                </div>
            </div>
        </>
    )
}

export default Hero