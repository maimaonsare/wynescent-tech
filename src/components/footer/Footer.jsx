import React from 'react';
import './Footer.css';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';
import youtube from '../../assets/youtube.png';
import logo from '../../assets/logo3.png';

function Footer() {
  return (
    <div className="footer-section">
         <hr />
         <div className="footer">
            <div className="social-icons">
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={linkedin} alt="linkedin" />
                <img src={whatsapp} alt="whatsapp" />
                <img src={youtube} alt="youtube" />
            </div>
            <div className="footer-logo">
            <img src={logo} alt="logo" />
         </div>
         </div>
         <div className="blur blur-footer1"></div>
         <div className="blur blur-footer2"></div>
    </div>
  )
}

export default Footer;