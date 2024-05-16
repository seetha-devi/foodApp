import React, {useState} from 'react'
import {assets} from '../../assets/assets';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../../Features/Cart/CartSlice';
import {useSelector} from 'react-redux';


const Navbar = ({setShowLogin, showLogin}) => {
    const [menu, setMenu] = useState('home');
    const total = useSelector(selectCartTotal);
    const item = useSelector(selectCartItems);
  return (
     <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt='logo' className='logo'/></Link>
        <ul className='navbar-menu'>
           <Link to='/'><li onClick={() => setMenu('home')} className={menu ==='home'? 'active' : ''}>Home</li></Link>
           <a href='#menu'><li onClick={() => setMenu('menu')} className={menu ==='menu'? 'active' : ''}>Menu</li></a>
           <a href='#mobile-app'><li onClick={() => setMenu('mobile-app')} className={menu ==='mobile-app'? 'active' : ''}>Mobile-app</li></a>
           <a href='#contact'><li onClick={() => setMenu('contact-us')} className={menu ==='contact-us'? 'active' : ''}>Contact us</li></a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt='' />
            <div className='navbar-search-icon'>
               <Link to='/cart'> <img src={assets.basket_icon} alt=''/> </Link>
               {total > 0 ? <div className="dot">{item.length}</div> : <></> }
                
            </div>
            <button onClick={()=>setShowLogin(!showLogin)}>Sign in</button>
        </div>
       
     </div>
  )
}

export default Navbar