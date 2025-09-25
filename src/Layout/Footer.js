import assets from '../assets/assets'
import '../Frontend/Style/Footer.css'
import { Link } from 'react-router-dom'

function Footer() 
{
    return(
        <>
           <footer className="footer">
                <div className="footer-container">
                    <div className="footer-left">
                        <img src={assets.logo} alt="Logo" />
                        <p>Jl. Siliwangi No. 123, Cibadak, Sukabumi, West Java 43351, Indonesia</p>
                        <p>(0266) 531333</p>
                        <p>Email: info@smpncibadak.sch.id</p>
                    </div>

                    <div className="footer-links">
                        <h3>Tour</h3>
                        <Link to="/">Welcome</Link>
                        <Link to="#">School Profile</Link>
                        <Link to="#">News</Link>
                        <Link to="/gallery">Gallery</Link>
                    </div>

                    <div className="footer-links">
                        <h3>General Page</h3>
                        <Link to="/teacher">Teacher Data</Link>
                        <Link to="#">Admission to Cibadak 1st Junior High School</Link>
                        <Link to="#">PPDB Guide</Link>
                        <Link to="/contact">Location</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className="social-media">
                        <h3>Social Media</h3>
                        <ul className="social-icons">
                            <Link to="#"><i className="fa-brands fa-x-twitter"></i></Link>
                            <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    Copyright © SMP Negeri 1 Cibadak. All Rights Reserved. Hosting by IDCloudHost
                </div>
            </footer> 
        </>
    )    
}

export default Footer