import React, { useState } from 'react';
import './style.css'
import {StarIcon, ChevronRightIcon} from '@heroicons/react/solid';
import {DeviceMobileIcon} from '@heroicons/react/outline';
import {Drawer} from 'antd';
import {MdOutlineDeliveryDining, BsShieldCheck, FiInbox, BiBadgeCheck, TiWorldOutline, FaShippingFast, BsTags, MdOutlineCable} from 'react-icons/all';
import ProductFeed from '../../components2/productFeed';
import Product from '../../components2/product';

const data = [
    {
        image: 'https://d28i4xct2kl5lp.cloudfront.net/product_images/23774_2b392b5d-546c-4b28-8437-7d7f76f33f52.jpg'
    },
    {
        image: 'https://d28i4xct2kl5lp.cloudfront.net/product_images/23774_3f84932e-b012-4773-ab8f-062831a96e2d.jpg'
    },
    {
        image: 'https://d28i4xct2kl5lp.cloudfront.net/product_images/23774_cb03b04a-b7b7-4ae7-bba0-127024758e20.jpg'
    },
    {
        image: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://d28i4xct2kl5lp.cloudfront.net/product_images/23774_2b392b5d-546c-4b28-8437-7d7f76f33f52.jpg'
    },
    {
        image: 'https://d28i4xct2kl5lp.cloudfront.net/product_images/23774_e88bee61-17e8-4be1-90fe-995f9eeb92b0.jpg'
    },
    {
        image: 'https://d28i4xct2kl5lp.cloudfront.net/product_images/23774_06ddf08a-3eb0-406b-b965-9f198a357301.jpg'
    }
]

const colorData = [
    {
        color: 'black'
    },
    {
        color: 'red'
    },
    {
        color: 'blue'
    },
    {
        color: 'coral'
    },
    {
        color: 'white'
    },
    {
        color: 'yellow'
    },
]

const storageData = [
    {
        storage: '64 GB'
    },
    {
        storage: '128 GB'
    },
    {
        storage: '256 GB'
    },
    {
        storage: '512 GB'
    }
]

const ForYouData = [
    {
        icon: BsTags,
        description: '-15% discount vs new.'
    },
    {
        icon: FiInbox,
        description: '30 days to change your mind'
    },
    {
        icon: MdOutlineDeliveryDining,
        description: 'Free 3-day delivery'
    },
    {
        icon: BsShieldCheck,
        description: '12 months refurbisher warranty'
    },
    {
        icon: FaShippingFast,
        description: 'Express delivery from $30.00'
    },
    {
        icon: TiWorldOutline,
        description: '7 oz of e-waste prevented'
    },
    {
        icon: BiBadgeCheck,
        description: 'Verified refurbished'
    }
] 

const specificationsData = [
    {
        description: 'Manufacturing part numbers (MPN)',
        key: 'MRYU2LL/A'
    },
    {
        description: 'Color',
        key: '(PRODUCT)Red'
    },
    {
        description: 'Is the phone Unlocked or tied to a carrier?',
        key: 'Fully unlocked (GSM & CDMA)'
    },
    {
        description: 'Screen size (inches)',
        key: '6.1'
    },
    {
        description: 'Storage',
        key: '64 GB'
    },
    {
        description: 'Memory',
        key: '3 GB'
    },
    {
        description: 'Modal',
        key: 'iPhone XR'
    },
    {
        description: 'Storage',
        key: '64 GB'
    },
    {
        description: 'Memory',
        key: '3 GB'
    },
    {
        description: 'Modal', //
        key: 'iPhone XR'
    },
    {
        description: 'Processor speed',
        key: '2.49 GHz'
    },
    {
        description: 'Processor brand',
        key: 'Apple'
    },
    {
        description: 'Processor Core',
        key: '8'
    },
    {
        description: 'OS',
        key: 'iOS'
    },
    {
        description: 'Resolution',
        key: '828 x 1792'
    },
    {
        description: 'Connector',
        key: 'Lightning'
    },
    {
        description: 'Network',
        key: 'GSM/CDMA + LTE'
    },
    {
        description: 'Release Date',
        key: 'September 2018'
    },
    { ///
        description: 'Release Date',
        key: 'September 2018'
    },
    {
        description: 'Double SIM',
        key: 'No'
    },
    {
        description: 'Manufacturer Ref.',
        key: 'A1984'
    },
    {
        description: 'Megapixels',
        key: '12'
    },
    {
        description: 'Screen type',
        key: 'LCD'
    },
    {
        description: 'AT&T compatible',
        key: 'Yes'
    },
    {
        description: 'Weight',
        key: '7 oz'
    },
]

function ProductDetails() {
    const [activeIndex,setActiveIndex] = useState(0);
    const [activeImage, setActiveImage] = useState(data[0].image);
    const [colorIndex, setColorIndex] = useState(0);
    const [storageIndex, setStorageIndex] = useState(0);
    const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
    return (
        <>
        <Drawer style={{borderTopLeftRadius:20}} title="Technical specifications" width={400} placement="right" onClose={onClose} visible={visible}>
            <div className="items-center justify-center p-3">
                <h1 className="mb-6" style={{fontSize:25}}>iPhone XR - 64 GB - (PRODUCT)Red - Unlocked</h1>
                <div>
                    <h2>What’s in the box?</h2>
                    <p style={{color:'rgba(0,0,0,0.5)'}}>All phones come with a compatible charging cable. To reduce e-waste, AC adapter and headphones are not included.</p>
                </div>
                <div>
                    <div className="flex items-center py-3" style={{borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,0.1)'}}>
                        <span className="mr-2"><DeviceMobileIcon style={{height:20,width:20}} color="rgba(0,0,0,0.5)"/></span>
                        <span style={{color:'rgba(0,0,0,0.5)'}}>iPhone XR</span>
                    </div>
                    <div className="flex items-center py-3" style={{borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,0.1)'}}>
                        <span className="mr-2"><MdOutlineCable size={20} color="rgba(0,0,0,0.5)"/></span>
                        <span style={{color:'rgba(0,0,0,0.5)'}}>Charging cable</span>
                    </div>
                </div>
                <div className="py-3">
                    <h2>Verified refurbished</h2>
                    <p style={{color:'rgba(0,0,0,0.5)'}}>Renewed electronics are like new – just better for the planet and your pocket. Our refurbishers are electronics experts who test and verify that every device is clean and 100% functional before it goes out for delivery. You get what it says on the box or your money back.</p>
                </div>
                <div>
                    {specificationsData.map(item => {
                        return (
                            <div className="flex items-center justify-between py-4 px-2" style={{borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,0.1)'}}>
                                <span style={{color:'rgba(0,0,0,0.5)'}}>{item.description}</span>
                                <span style={{color:'rgba(0,0,0,0.5)'}}>{item.key}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Drawer>
        <div className="h-full w-full">
            <div className="w-full relative block md:flex items-center bg-white md:h-4/5">
                <div className="w-full md:w-1/2 h-full block md:flex items-center justify-center">
                    <div className="p-5 flex items-center justify-center md:block">
                        {
                            data.map((item,index) => {
                                return (
                                    <div onClick={()=> {setActiveIndex(index); setActiveImage(item.image)}} className="m-2 rounded-lg h-14 w-14 cursor-pointer" style={{border:'1px solid rgba(0,0,0,1)', opacity: index == activeIndex ? '1': '0.3'}}>
                                        <img className="h-full w-full object-contain rounded-lg" src={item?.image} style={{mixBlendMode:"multiply"}}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex w-full items-center justify-center p-5">
                        <img className="h-80 w-80 object-contain" src={activeImage} style={{mixBlendMode:"multiply"}}/>
                    </div>
                </div>
                <div className="h-full w-full md:w-1/2 p-8" id="details" style={{overflow:'scroll'}}>
                    <div style={{borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,0.2)'}}>
                        <p className="text-md">
                            <span className="bg-gray-200 px-2 rounded-md p-1">30 days to change your mind</span>
                        </p> 
                        <div className="flex w-full items-center justify-between">
                            <div className="font-bold text-2xl font-thin" style={{fontFamily:"auto"}}>
                                iPhone XR
                                <div className="text-sm font-thin text-gray-400">
                                    64GB - Black - Unblocked 
                                </div>
                            </div>
                            <div className="items-center justify-between">
                                <label className="line-through text-md mr-2">$349</label>
                                <label className="text-lg font-semibold">$249</label>
                            </div>
                        </div>
                        <div>
                            <span className="flex items-center"><StarIcon color="orange" style={{width:20,height:20}}/> 4.4 <span className="ml-2 underline">(2438)</span></span>
                        </div>
                        <div className="flex items-center justify-around py-6">
                            <button className="bg-black rounded-md px-8 py-2 text-white w-40 hover:bg-gray-600">Add To Cart</button>
                            <button className="bg-black rounded-md px-8 py-2 text-white w-40 hover:bg-gray-600">Buy</button>
                        </div>     
                    </div>
                    <div style={{borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,0.2)'}}>
                        <div className="py-3">
                            <span className="font-medium">Color</span>
                            <div className="py-2 md:grid md:grid-flow-dense grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 flex">
                                {
                                    colorData.map((item, index) => {
                                        return (
                                            <>
                                            <div onClick={()=> setColorIndex(index)} className="hidden md:flex items-center justify-center rounded-lg p-2 w-32 m-2 cursor-pointer" style={{border:index == colorIndex ? '1px solid rgba(0,0,0,0.4)': '1px solid rgba(0,0,0,0.1)'}}>
                                                <div className="h-4 w-4 mr-2" style={{borderRadius:50, backgroundColor:item.color}}/> {item.color}
                                            </div>
                                            <div onClick={()=> setColorIndex(index)} className="h-5 w-5 flex md:hidden rounded-full items-center justify-center m-1" style={{border:index == colorIndex ? '1px solid black': ''}}>
                                                <div className="h-3 w-3 rounded-full" style={{backgroundColor: item.color}}/>
                                            </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="py-3">
                            <span className="font-medium">Storage</span>
                            <div className="py-2 grid grid-flow-dense grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                                {
                                    storageData.map((item, index) => {
                                        return (
                                            <>
                                            <div onClick={()=> setStorageIndex(index)} className="hidden md:flex items-center justify-center rounded-lg p-2 w-32 m-2 cursor-pointer" style={{border: index == storageIndex ? '1px solid rgba(0,0,0,0.4)': '1px solid rgba(0,0,0,0.1)'}}>
                                                {item.storage}
                                            </div>
                                            <div onClick={()=> setStorageIndex(index)} className="flex md:hidden items-center justify-center rounded-full" style={{border: index == storageIndex? '1px solid black':''}}>
                                                <div className="h-10 w-14 rounded-full items-center justify-center flex">
                                                    {item.storage}
                                                </div>
                                            </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="py-3">
                            <span className="font-medium">For you? Only the best.</span>
                            <div className="py-2 grid grid-flow-dense grid-cols-2">
                                {
                                    ForYouData.map((item, index) => {
                                        const {icon:Icon} = item;
                                        return (
                                            <div className="flex w-full items-center rounded-lg p-2 w-32 m-2 cursor-pointer" style={{fontFamily:'serif'}}>
                                                {Icon != '' && <Icon className="mr-2" size={25}/>}{item.description}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="py-3">
                            <div className="py-4 items-center justify-between flex px-2 cursor-pointer hover:bg-gray-200" style={{borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,0.1)'}}
                                onClick={()=> showDrawer()}
                            >
                                <span style={{fontFamily:'auto',fontSize:20}}>Technical specifications</span>
                                <span><ChevronRightIcon style={{width:20,height:20}} color="gray"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8">
                <div className="px-28"><h2 style={{fontSize:18,fontFamily:'auto',fontWeight:600}}>You may also like</h2></div>
                <Product/>
            </div>
        </div>
        </>
    )
}

export default ProductDetails
