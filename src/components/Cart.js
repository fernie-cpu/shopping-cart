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

  const decrement = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const increment = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeItem = (id) => {
    if (
      window.confirm(
        'Are you sure you wanna remove this product from the cart?'
      )
    ) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  return (
    <div>
      {cart.map((product) => {
        return (
          <div className='details cart-item' key={product.id}>
            <div
              className='img-container'
              style={{ backgroundImage: `url(${product.img})` }}
            ></div>
            <div className='box-details'>
              <h2>T-SHIRT {product.text}</h2>
              <p>$ {product.price}</p>

              <div className='amount'>
                <button className='count' onClick={() => decrement(product.id)}>
                  -
                </button>
                <span>{product.count}</span>
                <button className='count' onClick={() => increment(product.id)}>
                  +
                </button>
              </div>

              <div className='delete'>
                <button
                  className='delItem'
                  onClick={() => removeItem(product.id)}
                >
                  remove from cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className='total'>
        <Link to='/shopping-cart/checkout'>Checkout.</Link>
        <h3>Total: $ {total}</h3>
      </div>
    </div>
  );
};

export default Cart;
