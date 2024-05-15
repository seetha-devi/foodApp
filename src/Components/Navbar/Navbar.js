import React, {useState} from 'react'
import {assets} from '../../assets/assets';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin, showLogin}) => {
    const [menu, setMenu] = useState('home');
  return (
     <div className='navbar'>
        <img src={assets.logo} alt='logo' className='logo'/>
        <ul className='navbar-menu'>
           <Link to='/' onClick={() => setMenu('home')} className={menu ==='home'? 'active' : ''}>Home</Link>
           <a href='#menu' onClick={() => setMenu('menu')} className={menu ==='menu'? 'active' : ''}>Menu</a>
           <a href='#mobile-app' onClick={() => setMenu('mobile-app')} className={menu ==='mobile-app'? 'active' : ''}>Mobile-app</a>
           <a href='#contact' onClick={() => setMenu('contact-us')} className={menu ==='contact-us'? 'active' : ''}>Contact us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt='' />
            <div className='navbar-search-icon'>
                <img src={assets.basket_icon} alt=''/>
                <div className='dot'></div>
            </div>
            <button onClick={()=>setShowLogin(!showLogin)}>Sign in</button>
        </div>
       
     </div>
  )
}

export default Navbar