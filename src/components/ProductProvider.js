import React, { useState, createContext } from 'react';
import everythingIsFine from './img/everything-is-fine.png';
import confused from './img/confused.png';
import fart from './img/fart-walk-away.png';
import favorite from './img/favorite-people.png';
import older from './img/not-older.png';
import okay from './img/okayest-engineer.png';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: '1',
      img: everythingIsFine,
      text: 'Everything Is Fine',
      price: 19.99,
    },
    {
      id: '2',
      img: okay,
      text: "World's Okayest Engineer",
      price: 20.99,
    },
    {
      id: '3',
      img: fart,
      text: 'I Fart And Walk Away',
      price: 20.99,
    },
    {
      id: '4',
      img: confused,
      text: "I'm More Confused Than A Chameleon In A Bag Of Skittles",
      price: 20.99,
    },
    {
      id: '5',
      img: favorite,
      text: 'My Favorite People Leave Me Alone',
      price: 20.99,
    },
    {
      id: '6',
      img: older,
      text: "I'm Not Getting Older, I'm Becoming Classic",
      price: 20.99,
    },
  ]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
