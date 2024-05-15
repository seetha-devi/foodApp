import React from 'react'
import '../ExploreMenu/Exploremenu.css';


const Exploremenu = ({ menu_list , category , setCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes.  Our mission is to satisfy your cravings and elevate your dining expperience, one delicious meal at a time.</p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                    <div key={ index }  className='explore-menu-list-items' onClick={() => setCategory(prev => prev ===item.menu_name ? "All" : item.menu_name)} >
                        <img  className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
           </div>
           <hr />
    </div >
  )
}

export default Exploremenu