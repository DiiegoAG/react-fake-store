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
    const appName = import.meta.env.VITE_APP_NAME
    document.title = appName;
}

export default App;
