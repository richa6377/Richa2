
import React, { useContext } from 'react';
import { ProductsContext } from '../ProductsContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
