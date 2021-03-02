import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './ProductProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faTimes,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={faBars} width='30' />
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
          <Link exact to='/odin'>
            TOP
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <FontAwesomeIcon icon={faTimes} width='30' className='menu close' />
        </li>
      </ul>
      <div className='cart-icon'>
        <Link to='/cart'>
          <FontAwesomeIcon icon={faShoppingCart} width='30' />
        </Link>
        <span>{cart.length}</span>
      </div>
    </header>
  );
};

export default Header;
