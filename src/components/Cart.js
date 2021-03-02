import React, { useState, useContext } from 'react';
import { ProductContext } from './ProductProvider';
import { Link } from 'react-router-dom';

const Cart = () => {
  const value = useContext(ProductContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  return (
    <div>
      {cart.map((product) => {
        return (
          <div className='details' key={product.id}>
            <div
              className='img-container'
              style={{ backgroundImage: `url(${product.img})` }}
            ></div>
            <div className='box-details'>
              <h2>T-SHIRT {product.text}</h2>
              <p>$ {product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
