import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, selectCartItems } from '../../Features/Cart/CartSlice';
import '../Cart/Cart.css'

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {items.length > 0 ? (
          items.map((item, index) => (
            <div>
             <div key={index} className='cart-items-title cart-items-item'>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <p>{item.price * item.quantity}</p>
              <p onClick={() => handleRemoveFromCart(item.id)} className='cross'>X</p>
            </div>
            <hr />
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className='cart-bottom'>
            <div className='cart-total'>
                <h2>Cart Total</h2>
                <div>
                    <div className='cart-total-details'>
                        <p>Subtotal</p>
                         <p>{0}</p>
                    </div>
                    <hr/>
                    <div className='cart-total-details'>
                        <p>Delivery Fee</p>
                         <p>{2}</p>
                    </div>
                    <hr/>
                    <div className='cart-total-details'>
                        <b>Total</b>
                         <p>{0}</p>
                    </div>
                   
                </div>
                <button>Proceed to Checkout</button>
            </div>
            <div className='cart-promotecode'>
                <div>
                    <p>If you have promo code please, Enter it here</p>
                    <div className='cart-promocode-input'>
                        <input type='text' placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Cart;
