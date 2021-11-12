import React,{useEffect,useState} from 'react'
import Product from '../product/product';

function ProductFeed() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        await fetch('https://fakestoreapi.com/products',{
            method: 'get'
        })
        .then(async (res)=>{
            const data = await res.json()
            console.log(data)
            setProducts(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        fetchProducts();
    },[])
    return (
        <div className="grid grid-flow-dense lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2"> {/***md:-mt-52 */}
            {products.map(({id, title, price, description, category, image})=>(
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}   
        </div>
    )
}

export default ProductFeed
