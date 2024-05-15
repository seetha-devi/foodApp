import React from 'react';
import { useSelector } from 'react-redux';
import { FoodItem } from '../FoodItem/FoodItem';
import '../FoodDisplay/FoodDisplay.css';

const FoodDisplay = ({category}) => {
   const food = useSelector(state => state.food); // Assuming "food" is the slice name

   // Render the specific data from the state
   return (
      <div className="food-display" id='menu'>
        <h2>Top dishes here</h2>
         <div className='food-display-list'>
            {food.map((item, index)=>{
                if(category==="All" || category===item.category ){
                  return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
            })}
         </div>
      </div>
   );
};

export default FoodDisplay;
