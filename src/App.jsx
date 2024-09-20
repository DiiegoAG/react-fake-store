import React, { useState } from 'react';
import ProductList from './components/products/ProductsList';
import Sidebar from './components/Sidebar';
import useFetch from './hooks/useFetch'

const App = () => {
    const appName = import.meta.env.VITE_APP_NAME
    document.title = appName;

    const { data, isPending, error } = useFetch(import.meta.env.VITE_APP_API_URL + 'products')
    const [filter, setFilter] = useState({
        category: 'all'
    })

    const filterProducts = (data) => {
        if (filter.category === 'all') {
            return data;
        }

        return data.filter(product => {
            return product.category === filter.category
        })
    }

    const productsFiltered = filterProducts(data)

    return (
        <>
            <Sidebar setFilter={setFilter}>
                {isPending && <div>Loading....</div>}
                {error && <div>{error}</div>}
                {data && <ProductList products={productsFiltered} />}
            </Sidebar>
        </>
    )
}

export default App;
