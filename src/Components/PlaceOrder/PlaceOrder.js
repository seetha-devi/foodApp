import React from 'react'
import '../PlaceOrder/PlaceOrder.css'
import { useSelector } from 'react-redux'
import { selectCartTotal } from '../../Features/Cart/CartSlice'


const PlaceOrder = () => {
    const total = useSelector(selectCartTotal);
  return (
    <div className='place-order'>
        <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
            <div className='multi-fields'>
                <input type='text' placeholder='First name' />
                <input type='text' placeholder='Last name' />
            </div>
             <input type='email' placeholder='Email' />
             <input type='text' placeholder='Street' />
             <div className='multi-fields'>
                <input type='text' placeholder='City' />
                <input type='text' placeholder='State' />
            </div>
            <div className='multi-fields'>
                <input type='text' placeholder='Zip code' />
                <input type='text' placeholder='Country' />
            </div>
            <input type='number' placeholder='Phone' />
        </div>
        <div className='place-order-right'>
        <div className='cart-bottom'>
            <div className='cart-total'>
                <h2>Cart Total</h2>
                <div>
                    <div className='cart-total-details'>
                        <p>Subtotal</p>
                         <p>{total}</p>
                    </div>
                    <hr/>
                    <div className='cart-total-details'>
                        <p>Delivery Fee</p>
                         <p>{30}</p>
                    </div>
                    <hr/>
                    <div className='cart-total-details'>
                        <b>Total</b>
                         <p>{`${total + 30}`}</p>
                    </div>
                   
                </div>
                <button>Proceed to Checkout</button>
            </div>
           
      </div>
        </div>
    </div>
  )
}

export default PlaceOrder