import React from 'react'

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <img src={props.data.image}/>
      <div>
        <p>{props.data.name}</p>
        <p>{props.data.quantity}</p>
        <p>${props.data.price}</p>
        <div className="button-hold">
          <button>-</button>
          <button>Remove</button>
          <button>+</button>
        </div>
      </div>
    </div>
  )
}
export default CartItem
