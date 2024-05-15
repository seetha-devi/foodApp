import React from 'react'
import { assets } from '../../assets/assets'
import '../Footer/Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt='logo' />
                <p>Whether you're joining us for a casual meal, a special celebration, or one of our cooking classes, we welcome you to our family. Our friendly staff is here to ensure that your time with us is memorable and enjoyable.</p>
                <div className='footer-social-icon'>
                    <img src={assets.facebook_icon} alt='facebook'/>
                    <img src={assets.twitter_icon} alt='twitter'/>
                    <img src={assets.linkedin_icon} alt='linkedin' />
                </div>
            </div>
            <div className='footer-content-center'>
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy police</li>
                    </ul>
            </div>
            <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-023-324-4300</li>
                        <li>foodie@yazhoo.com</li>
                    </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copy-right'> Copyright @{year} tomato.com.  All rights reserved. </p>
    </div>
  )
}

export default Footer