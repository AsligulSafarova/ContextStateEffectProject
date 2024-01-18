import React from 'react';
import logo from "../images/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "./style.sass";
export default function Footer() {
    return (
        <div className='container'>
            <div className="logo">
                <div className="homes">
                    <img src={logo} />
                    <div className="home">
                        <p>Home</p>
                        <p>Blog</p>
                        <p>Pricing</p>
                        <p>About</p>
                        <p>Contact</p>

                    </div>
                    <h2>Company name © 2023</h2>
                </div>

                <div className="icons">
                    <div className="icon icon-1">
                        <div className="border"><FontAwesomeIcon icon={faLocationDot} className='map' /></div>
                        <p className='adress'>50128 Romerskirschen , Köln</p>
                    </div>
                    <div className="icon icon-1">
                        <div className="border">
                            <FontAwesomeIcon icon={faPhone} className=' phone' />
                        </div>
                        <p className='number'>+49178455687</p>
                    </div>
                    <div className="icon icon-1">
                        <div className="border">
                            <FontAwesomeIcon icon={faEnvelope} className='envelope' />
                        </div>
                        <p><a href="#">support@compny.com</a></p>
                    </div>
                </div>
                <div className="aboutCompany">
                    <h1>About Company</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                        necessitatibus recusandae quisquam itaque.</p>
                    <div className="socials">
                        <div className="iconss">
                            <div className="iconn"><FontAwesomeIcon icon={faFacebook} /> </div>
                            <div className="iconn"><FontAwesomeIcon icon={faLinkedin} /></div>
                            <div className="iconn"><FontAwesomeIcon icon={faGithub} /></div>
                            <div className="iconn"> <FontAwesomeIcon icon={faTwitter} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
