import ProductCard from './ProductItemCard';
import useFetch from '../../hooks/useFetch'

const ProductList = () => {
    const { data, isPending, error } = useFetch('https://fakestoreapi.com/products?limit=9')

    return (
      <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5">
          {isPending && <div>Loading....</div>}
          {error && <div>{error}</div>}
          {data && data.map(item => (
            <ProductCard key={item.id} product={item}/>
          ))}
        </div>
    )
}

export default ProductList
