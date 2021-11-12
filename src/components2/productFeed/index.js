import React from 'react'
import Product from '../product'

const data = [
    {
        image: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://d28i4xct2kl5lp.cloudfront.net/operation_page_image/Test-apple_corner.png',
        title: 'Flash Sales!',
        description: 'Catch ‘em while theyre fresh!'
    },
    {
        image: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://d28i4xct2kl5lp.cloudfront.net/product_images/product_images/107677_e6b76cde-d52e-4bf3-a413-ab88221bc5b6-thumb.jpg',
        title: 'MacBook',
        description: 'Amazing deals dropped right into your lap.'
    },
    {
        image: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1080/https://d28i4xct2kl5lp.cloudfront.net/product_images/product_images/1588366985.0932403-thumb.jpg',
        title: 'iPhone',
        description: 'The greenest apples on the Market.'
    },
    {
        image: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1080/https://d28i4xct2kl5lp.cloudfront.net/product_images/product_images/117294_c9d00b23-f529-4c90-bcc6-271d01826869-thumb.jpg',
        title: 'iPad',
        description: 'Distract your kid (or yourself) for up to 40% off.'
    },
    {
        image: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1080/https://d28i4xct2kl5lp.cloudfront.net/product_images/product_images/None_916aada5-c445-4703-8986-4f386b7a8479-thumb.jpg',
        title: 'Chromebooks & Laptops',
        description: 'Premium laptops without the premium prices.'
    },
]

function ProductFeed() {

    return (
        <>
        <div className="hidden md:block p-4 md:p-24" style={{paddingBottom:10}}>
            <div className="grid grid-flow-dense grid-cols-2">
                {data.slice(0,2).map(product=>{
                    return (
                        <div className="p-5 rounded-xl shadow-sm bg-white flex-none m-1 items-center justify-around md:flex">
                            <img className="h-28 w-28 object-contain md:h-36 md:w-36 m-auto" src={product.image}/>
                            <div className="items-center justify-center p-1 md:p-4 m-auto">
                                <p className="text-md text-gray-600 font-black m-0 text-center">{product.title}</p>
                                <span className="hidden md:flex text-center text-gray-400">
                                    {product.description}
                                </span>
                            </div>
                        </div>
                    )
                })}
                
            </div>

            <div className="grid grid-flow-dense grid-cols-3">
                {data.slice(2,5).map(product=>{
                    return (
                        <div className="p-5 rounded-xl shadow-sm bg-white m-1 items-center justify-around">
                            <img className="h-16 w-16 object-contain md:h-28 md:w-28 m-auto" src={product.image}/>
                            <div className="items-center justify-center p-1 md:p-4 m-auto">
                                <p className="text-md text-gray-600 font-black m-0 text-center">{product.title}</p>
                                <span className="hidden md:flex text-center text-gray-400">
                                    {product.description}
                                </span>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
        {/****mobile view */}
        <div className="md:hidden p-3">
            <div className="flex overflow-x-scroll p-2">
                {data.map(product=>{
                    return (
                        <div className="p-4 rounded-md shadow-sm bg-white m-1 items-center justify-around">
                            <img className="h-16 w-16 object-contain md:h-28 md:w-28 m-auto" src={product.image}/>
                            <div className="items-center justify-center p-1 md:p-4 m-auto">
                                <p className="text-md text-gray-600 font-black m-0 text-center w-24">{product.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="rounded-lg px-24">
            <img className="w-full h-46 object-cover rounded-lg" src="https://img.poorvika.com/bootom/MainMobile-accessories-available-at-poorvika.jpg"/>
        </div>
        <Product data={data}/>
    </>
    )
}

export default ProductFeed
