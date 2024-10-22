import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


function Footer() {
    return (
        <div className='Footer'>
            <div className="Footer1">
                <p>READY TO WORK WITH US?</p>
                <div className="input-container">
                    <input 
                        type="email" 
                        name="myEmail" 
                        id="myEmail" 
                        placeholder='Enter Your Email' 
                    />
                    <button> 
                        <FontAwesomeIcon icon={faPaperPlane} className='footerPlane' />
                    </button>
                </div>
            </div>
            <div className="Footer2">
                <div className="Footer21">
                    <h2>Staging</h2>
                    <p>7176 Blue Spring Lane Santa Monica, CA 90403</p>
                    <p>Info.colorlib@gmail.com +84 123 456 789</p>
                    <ul>
                        <li>
                            <i>
                                <a href="#Hero">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#Hero">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="#Hero">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#Hero">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </i>
                        </li>
                    </ul>
                </div>
                <div className="Footer21">
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Our Works</li>
                        <li>Career</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className="Footer21">
                    <h3>Services</h3>
                    <ul>
                        <li>Architecture</li>
                        <li>Interior Design</li>
                        <li>Exterior Design</li>
                        <li>Planning</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className="Footer21">
                    <h3>Get In Touch</h3>
                    <p>7176 Blue Spring Lane Santa Monica, CA 90403</p>
                    <p>Info.colorlib@gmail.com +84 123 456 789</p>
                </div>
            </div>
            <div className="Footer3">
              <p>Copyright © 2024 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} style={{ color: '#dfa667' }} /> 
              &nbsp;by <a href="#"> Colorlib</a></p>
              <div className="Footer31">
                
                <a href="#">Privacy Policy</a>
                <a href="#" className='useTerm'>Terms of use</a>
              </div>
            </div>

        </div>
    );
}

export default Footer;
