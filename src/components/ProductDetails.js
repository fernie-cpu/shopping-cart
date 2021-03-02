import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from './ProductProvider';

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);

  const details = products.filter((product, index) => product.id === id);
  console.log(details);

  return (
    <div>
      {details.map((product) => {
        return (
          <div className='details' key={product.id}>
            <div
              className='img-container'
              style={{ backgroundImage: `url(${product.img})` }}
            ></div>
            <div className='box-details'>
              <h2>T-SHIRT {product.text}</h2>
              <h3>${product.price}</h3>
              <button className='cart'>ADD TO CART</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetails;
