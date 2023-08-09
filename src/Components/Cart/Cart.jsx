import React from 'react'
import './Cart.css'
import Button from '../Button/Button';

function Cart({cartItems, onCheckout}) {


  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
    
  return <div className='cart_container'>
      {cartItems.length === 0 ? "Нет товаров в корзине!": ""}

      <br /> <span className=''>Итоговая стоимость: ${totalPrice.toFixed(2)}</span>
        <Button title={`${cartItems.length === 0 ? 'Выбери продукт! ': 'Купить!'}`} 
        type={"checkout"}
        disable={cartItems.length === 0 ? true : false}
        onClick={onCheckout}
        />
  </div>;
}

export default Cart;