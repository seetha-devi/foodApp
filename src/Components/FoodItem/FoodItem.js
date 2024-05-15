import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItems } from '../../Features/Cart/CartSlice';
import { assets } from '../../assets/assets';
import '../FoodItem/FoodItem.css';

export const FoodItem = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);

  const handleUpdate = (id) => {
    dispatch(addToCart({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const item = items.find(item => item.id === id);


  return (
    <div className='food-item'>
      <div className='food-img-container'>
        <img src={image} alt='' className='food-item-image' />
        {!item ? (
          <img
            src={assets.add_icon_white}
            alt=''
            className='add'
            onClick={() => handleUpdate(id)}
          />
        ) : (
          <div className='food-item-counter'>
            <img
              src={assets.remove_icon_red}
              alt=''
              onClick={() => handleRemove(id)}
            />
            <p>{item.quantity}</p>
            {console.log("total:", item)}
            <img
              src={assets.add_icon_green}
              alt=''
              onClick={() => handleUpdate(id)}
            />
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
};
