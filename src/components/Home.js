import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
      <Link to='/shopping-cart/shop'>go shoppinG</Link>
    </div>
  );
};

export default Home;
