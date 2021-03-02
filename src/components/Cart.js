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

              <div className='amount'>
                <button> - </button>
                <span>{product.count}</span>
                <button> + </button>
              </div>

              <div className='delete'>
                <button>remove from cart</button>
              </div>
            </div>

            <div className='total'>
              <Link to='/checkout'>Checkout</Link>
              <h3>Total: $ {total}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
