import React,{useState} from 'react'
import { StarIcon} from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';

const MAX_RATING = 5;
const MIN_RATING = 2;
function Product({id, title, price, description, category, image}) {
    const [rating, setRating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING))
    const [hasPrime] = useState(Math.random() < 0.5)
    return (
        // <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        //     <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
        //     <div className="w-full items-center justify-center h-32">
        //         <img src={image} className="h-full" style={{objectFit:'contain'}}/>
        //     </div>
        //     <div className="h-full w-full">
        //         <h6 className="text-sm">{title}</h6>
        //         <p className="mt-5" style={{maxLines:3}}>{description}</p>
        //     </div>
        //     <div className="flex">
        //         {Array(rating).fill().map((_,i)=>{
        //             return <StarIcon className="h-5 text-yellow-500"/>
        //         })}
        //     </div>
        //     <div className="mb-5">
        //         <Currency quantity={price} currency="GBP"/>
        //     </div>
        //     <button className="mt-auto button">Add to Basket</button>
        // </div>
        <div className="p-5 rounded-lg relative items-center bg-white m-5 transform shadow-sm hover:shadow-xl">
            <div className="md:flex-shrink-0">
                <div className="flex items-center p-2 justify-end">
                    <span className="py-1 px-3 bg-red-300 rounded-md text-xs hidden md: flex">Best Seller</span>
                </div>
                <div className="flex items-center justify-center h-42">
                    <img src={image} style={{height: 130, width:130, objectFit:'contain'}}/>
                </div>
            </div>
           <div className="flex-grow">
                <div className="p-2">
                    <h6 className="text-center">{title}</h6>
                    <p className="m-0 text-center hidden md:flex">64gb-black- unlocked warrenty: 12 months </p>
                </div>
                <div>
                    <p className="p-2 m-0 text-center">price: $ {price}</p>
                </div>
                <div className="flex items-center justify-center p-2 mb-0">
                    <button className="py-1 px-6 button ">Add To Cart</button>
                </div>
           </div>
        </div>
    )
}

export default Product
