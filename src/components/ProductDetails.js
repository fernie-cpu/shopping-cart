import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from './ProductProvider';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const value = useContext(ProductContext);
  const [products] = value.products;
  const addCart = value.addCart;

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
              <p>$ {product.price}</p>
              <Link
                to='/cart'
                className='cart'
                onClick={() => addCart(product.id)}
              >
                add to cart
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetails;
