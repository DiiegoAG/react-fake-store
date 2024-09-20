import ProductCard from './ProductItemCard';

const ProductList = ({products}) => {

    return (
    <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5">
        {
            products.map(item => (
                <ProductCard key={item.id} product={item}/>
            ))
        }
    </div>
    )
}

export default ProductList
