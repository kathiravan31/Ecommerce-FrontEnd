import React from 'react'
import {useHistory} from 'react-router-dom';

function Cart() {
    const history = useHistory();

    const pay = () => {
        history.push('/checkout')
    }
    return (
        <div className="w-full block md:flex" style={{height:'88vh'}}>
            <div className="w-full block md:hidden p-5 pt-5">
                <h1 className="text-2xl" style={{fontFamily:'serif'}}>Summary</h1>
                <div className="bg-white rounded-xl shadow-md p-5">
                    <div className="flex items-center justify-between py-3">
                        <span>2 items, shipping included</span>
                        <span>$59.98</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <span>Quality Assurance Fee</span>
                        <span>$1.99</span>
                    </div>
                    <div className="py-4 flex items-center justify-between" style={{borderTopWidth:1,borderTopColor:'rgba(0,0,0,0.2)'}}>
                        <span>
                            <div className="text-lg font-medium">Cart total</div>
                            <div>Tax not included</div>
                        </span>
                        <span>$61.97</span>
                    </div>
                    <button onClick={()=>pay()} className="mt-3 w-full py-3 px-3 rounded-md bg-black text-white">Checkout</button>
                </div>
            </div>

            <div className="h-full w-full md:w-8/12 md:overflow-y-scroll p-6">
                <span className="font-bold text-lg" style={{fontFamily:'serif'}}>Your Cart</span>
                <br/>
                {[0,1,2,3,4].map(item=>{
                    return (
                        <div className="p-3 py-5 w-full flex bg-white shadow-sm rounded-lg items-center justify-between my-3">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-44 w-44 object-contain mix-blend-multiply"  src="https://d28i4xct2kl5lp.cloudfront.net/product_images/23782_b6d118fc-d8cf-41e6-9430-8884d6f3c949.jpg"/>
                            </div>
                            <div className="">
                                <div className="text-red-900 font-bold" style={{fontFamily:'serif'}}>Fiddlesticks! This item isn't available.</div>
                                <div className="text-lg font-bold" style={{fontFamily:'serif'}}>iPhone XR 64GB - (Product)Red - Fully unlocked (GSM & CDMA)</div>
                                <div className="text-gray-500" style={{fontFamily:'serif'}}>Condition: Fair</div>
                                <span className="font-bold text-lg" style={{fontFamily:'serif'}}>$299.00</span>
                            </div>
                            <div className="flex h-full items-center justify-center p-5">
                                <span className="text-base cursor-pointer hover:underline" style={{fontFamily:'serif'}}>Remove</span>
                            </div>
                        </div>
                    )
                })}
                
            </div>
            <div className="h-full w-4/12 hidden md:block p-5 pt-5">
                <h1 className="text-2xl" style={{fontFamily:'serif'}}>Summary</h1>
                <div className="bg-white rounded-xl shadow-md p-5">
                    <div className="flex items-center justify-between py-3">
                        <span>2 items, shipping included</span>
                        <span>$59.98</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <span>Quality Assurance Fee</span>
                        <span>$1.99</span>
                    </div>
                    <div className="py-4 flex items-center justify-between" style={{borderTopWidth:1,borderTopColor:'rgba(0,0,0,0.2)'}}>
                        <span>
                            <div className="text-lg font-medium">Cart total</div>
                            <div>Tax not included</div>
                        </span>
                        <span>$61.97</span>
                    </div>
                    <button onClick={()=>pay()} className="mt-3 w-full py-3 px-3 rounded-md bg-black text-white hover:bg-gray-700">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
