import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from './ProductProvider';
import { Link } from 'react-router-dom';

const Cart = () => {
  const value = useContext(ProductContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  if (cart.length === 0) {
    return <h2>Cart empty</h2>;
  }

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
                <button className='count'> - </button>
                <span>{product.count}</span>
                <button className='count'> + </button>
              </div>

              <div className='delete'>
                <button className='delItem'>remove from cart</button>
              </div>
            </div>
          </div>
        );
      })}
      <div className='total'>
        <Link to='/checkout'>Checkout</Link>
        <h3>Total: $ {total}</h3>
      </div>
    </div>
  );
};

export default Cart;
