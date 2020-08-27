import React from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Your Cart</h2>
        {props.cart.items.map(element => {
          return <CartItem key={element.cartId}/>
        })}
      </div>
      <div className="total">
        Your total: ${props.cart.total}
        <button>Checkout</button>
      </div>
    </div>
  )
}
export default Cart
