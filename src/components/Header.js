import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Menu from './img/bars-solid.svg';
import Close from './img/times-solid.svg';
import Cart from './img/cart.svg';
import { ProductContext } from './ProductProvider';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const value = useContext(ProductContext);
  const [cart] = value.cart;

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const styleMenu = {
    left: menu ? 0 : '-100%',
  };

  return (
    <header>
      <div className='menu' onClick={toggleMenu}>
        <img src={Menu} alt='' width='30' />
      </div>
      <div className='logo'>
        <h1>SHOP</h1>
      </div>
      <ul style={styleMenu}>
        <li>
          <Link exact to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/shop'>Products</Link>
        </li>
        <li>
          <Link exact to='/'>
            Contact
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <img src={Close} alt='' className='menu' width='30' />
        </li>
      </ul>
      <div className='cart-icon'>
        <Link to='/cart'>
          <img src={Cart} alt='' width='30' />
        </Link>
        <span>{cart.length}</span>
      </div>
    </header>
  );
};

export default Header;
