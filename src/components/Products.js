import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './ProductProvider';

const Products = () => {
  const [products, setProducts] = useContext(ProductContext);

  return (
    <div className='products'>
      {products.map((product) => {
        return (
          <div className='card' key={product.id}>
            <Link to={`/shop/${product.id}`}>
              <img src={product.img} alt='' />
            </Link>
            <div className='box'>
              <h3>
                <Link to={`/shop/${product.id}`}>T-Shirt {product.text}</Link>
              </h3>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
