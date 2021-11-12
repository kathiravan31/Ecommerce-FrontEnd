import React from 'react'
import {
    Link,
    Redirect,
    useHistory,
} from 'react-router-dom';
// import history from '../../history';

const data = [
    {
        image: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=828/https://d28i4xct2kl5lp.cloudfront.net/product_images/product_images/102938_581d5446-e013-496e-88b1-0fac2b652386-thumb.jpg',
        title: 'iPhone11',
        description: '64 GB - Black - Unlocked',
        highlights: 'Warranty: 12 months',
        price: 404,
        oldPrice: 499,
    },
    {
        image: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://d28i4xct2kl5lp.cloudfront.net/product_images/product_images/97757_2cc715ec-676c-4666-9790-035c6ddb21c7-thumb.jpg',
        title: 'Apple AirPods Pro - White',
        description: 'Condition - Excellent',
        price: 169,
        oldPrice: 199,
    },
    {
        image: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://d28i4xct2kl5lp.cloudfront.net/product_images/product_images/1580389188.2771325-thumb.jpg',
        title: 'iPhone10',
        description: '64 GB - Gold',
        highlights: 'Warranty: 12 months',
        price: 404,
        oldPrice: 499,
    },
    {
        image: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://d28i4xct2kl5lp.cloudfront.net/product_images/product_images/114675_c44a1340-feb2-4275-9f3e-3d75dae14128-thumb.jpg',
        title: 'MacBook Pro Retina 13.3-inch (2016)', // - Core i5 - 16GB - SSD 256 GB
        description: '64 GB - Gold',
        highlights: 'Condition - Excellent',
        price: 649,
        oldPrice: 849,
    },
    {
        image: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://d28i4xct2kl5lp.cloudfront.net/product_images/product_images/133725_1b2b43ee-88ba-4da5-bd28-f9f2ed65e228-thumb.jpg',
        title: 'I Mac - White',
        description: 'Condition - Excellent',
        price: 299,
        oldPrice: 399,
    },
    {
        image: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://d28i4xct2kl5lp.cloudfront.net/product_images/product_images/1580907221.0294588-thumb.jpg',
        title: 'Drawing Pencil',
        description: 'Drawing Pad Pencile v2',
        highlights: 'Warranty: 12 months',
        price: 80,
        oldPrice: 100,
    },
    {
        image: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://d28i4xct2kl5lp.cloudfront.net/product_images/103026_a221d451-b679-4bd7-91d8-5377e1502b07-thumb.jpg',
        title: 'Apple Mounse', // - Core i5 - 16GB - SSD 256 GB
        description: 'Wireless Mouse',
        highlights: 'Condition - Excellent',
        price: 100,
        oldPrice: 120,
    },
]

function Product(props) {
    const history = useHistory()
    const onClick = () => {
        history.push(`product/8784702740`)
    }
    return (
        <div className="grid grid-cols-1 items-center p-6 md:p-24 md:grid-cols-3 lg:grid-cols-4" style={{paddingTop:10}}>
            {data.length > 0 && data.map(product=>{
                return (
                    <div className="m-2 bg-white rounded-md p-8 shadow-sm hover:shadow-md h-40 md:h-72 flex md:block items-center" onClick={()=> onClick()}>
                        <div className="w-1/2 md:w-full">
                            <img className="w-24 h-24 md:w-32 md:h-32 object-contain m-auto" src={product.image}/>
                        </div>
                        <div className="p-2 items-center justify-center w-full">
                            <p className="font-bold text-center">{product.title}</p>
                            <p className="text-center text-xs">{product.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Product
