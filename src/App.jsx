
import React from 'react';
import { ProductsProvider } from './ProductsContext';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <ProductsProvider>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Product Display</h1>
        <ProductList />
      </div>
    </ProductsProvider>
  );
};

export default App;
