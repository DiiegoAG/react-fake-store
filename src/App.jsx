import React from 'react';
import ProductList from './components/products/ProductsList';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <Sidebar>
        <ProductList />
      </Sidebar>
    </>
  )
}

export default App;
