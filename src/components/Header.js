import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './img/bars-solid.svg';
import Close from './img/times-solid.svg';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h1>logo</h1>
      </div>
      <ul>
        <li>
          <Link exact to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/shop'>Products</Link>
        </li>
        <li>
          <img src={Close} alt='' className='menu' width='30' />
        </li>
      </ul>
      <div className='menu'>
        <img src={Menu} alt='' width='30' />
      </div>
    </header>
  );
};

export default Header;
