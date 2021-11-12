import React,{useEffect} from 'react'
import {SearchIcon, ShoppingCartIcon, DotsVerticalIcon, ChevronDownIcon} from '@heroicons/react/outline';
import { Popover, Button } from 'antd';
import './style.css'


const dataCollection = [
    {
        title: 'Electronics',
        data: [
            {
                title: 'Phone',
                link: '#'
            },
            {
                title: 'Labtop',
                link: '#'
            },
            {
                title: 'Accessories',
                link: '#'
            },
            {
                title: 'HeadPone',
                link: '#'
            },
            {
                title: 'TV',
                link: '#'
            },
            {
                title: 'Computer',
                link: '#'
            },
        ]
    },
    {
        title: 'Furniture',
        data: [
            {
                title: 'Table',
                link: '#'
            },
            {
                title: 'Chair',
                link: '#'
            },
            {
                title: 'Dressing Table',
                link: '#'
            },
            {
                title: 'TV - Stand',
                link: '#'
            }
        ]
    },
    {
        title: 'Others',
        data: [
            {
                title: 'Clothes',
                link: '#',
                data: [
                    {
                        title: 'Men',
                        data:[
                            {
                                title: 'Shirts'
                            },
                            {
                                title: 'T-Shirts'
                            },
                            {
                                title: 'Jeans'
                            },
                            {
                                title: 'Cotton-Shirts'
                            },
                            {
                                title: 'Chinos Pants'
                            },
                            {
                                title: 'Cotton Pants'
                            },
                            {
                                title: 'Jackets'
                            },
                            {
                                title: 'Shorts'
                            },
                            {
                                title: 'Lowers'
                            },
                            {
                                title: 'Inner Wear'
                            }
                        ]
                    },
                    {
                        title: 'WoMen',
                        data:[
                            {
                                title: 'Shirts'
                            },
                            {
                                title: 'T-Shirts'
                            },
                            {
                                title: 'Jeans'
                            },
                            {
                                title: 'Cotton-Shirts'
                            },
                            {
                                title: 'Chinos Pants'
                            },
                            {
                                title: 'legins'
                            },
                            {
                                title: 'Jackets'
                            },
                            {
                                title: 'Sharee'
                            },
                            {
                                title: 'Sudi'
                            },
                            {
                                title: 'Night Dress'
                            },
                            {
                                title: 'Jackets'
                            },
                            {
                                title: 'Shorts'
                            },
                            {
                                title: 'Lowers'
                            },
                            {
                                title: 'Inner Wear'
                            }
                        ]
                    },
                    {
                        title: "Others",
                        data:[
                            {
                                title: "Tavel"
                            },
                            {
                                title: "Mats"
                            },
                            {
                                title: "Floor Mats"
                            },
                            {
                                title: "Hand Karchief"
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Shirts',
                link: '#'
            },
            {
                title: 'Jeans',
                link: '#'
            },
            {
                title: 'Groming',
                link: '#'
            },
            {
                title: 'Shoes',
                link: '#'
            },
            {
                title: 'Mens Wear',
                link: '#'
            },
        ]
    }
]

const DotContent = () => {
    return (
        <div>
            <div className="flex p-2 hover:bg-yellow-50 rounded-md cursor-pointer text-gray-500 items-center">Orders / Returns</div>
            <div className="flex p-2 hover:bg-yellow-50 rounded-md cursor-pointer text-gray-500 items-center">Settings</div>
            <div className="flex p-2 hover:bg-yellow-50 rounded-md cursor-pointer text-gray-500 items-center">Logout</div>
        </div>
    )
}

const ClothsContent = (data) => {
    return (
        <div className="flex p-4">
            {data.map(item=>{
                return (
                    <div className="p-3">
                        <h4>{item.title}</h4>
                        {item.data.map(item_=>(
                            <div className="p-2 pl-1 cursor-pointer text-gray-400 hover:text-yellow-100">
                                {item_.title}
                            </div>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

const content = (data) => {
    return (
        <div className="p-0 m-0">
            {data.map(item=>{
                if(item.data){
                    return (
                        <Popover content={ClothsContent(item.data)} placement="left" className="flex items-center p-0 m-0">
                            <p className="p-2 hover:bg-yellow-50 rounded-md cursor-pointer text-gray-500 flex items-center justify-between w-200">
                                <span className="mr-2">{item.title}</span>
                                <span>
                                    <img className="h-4 w-4" src="https://media.istockphoto.com/photos/various-sport-equipments-on-grass-picture-id949190736?b=1&k=20&m=949190736&s=170667a&w=0&h=f3ofVqhbmg2XSVOa3dqmvGtHc4VLA_rtbboRGaC8eNo="/>
                                </span>
                            </p>
                        </Popover>
                    )
                }
                return (
                    <p className="p-2 hover:bg-yellow-50 rounded-md cursor-pointer text-gray-500 flex items-center justify-between w-200">
                        <span className="mr-2">{item.title}</span>
                        <span>
                            <img className="h-4 w-4" src="https://media.istockphoto.com/photos/various-sport-equipments-on-grass-picture-id949190736?b=1&k=20&m=949190736&s=170667a&w=0&h=f3ofVqhbmg2XSVOa3dqmvGtHc4VLA_rtbboRGaC8eNo="/>
                        </span>
                    </p>
                )
            })}
        </div>
    )
};


function AppBar() {

    // useEffect(()=>{
    //     var preScrollpos = window.pageYOffset;
    //     window.onscroll = function () {
    //         var currentScrollPos = window.pageYOffset;
    //         if(preScrollpos > currentScrollPos){
    //             document.getElementById('navbar').style.top = "0";
    //         }else{
    //             document.getElementById('navbar').style.top = '-70px'
    //         }
    //         preScrollpos = currentScrollPos;
    //     }
    // },[])

    return (
        <header id="navbar" className="z-30">
            <div className="flex items-center flex-grow p-1 py-2 bg-gray-800">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <img
                        style={{
                            width: 150,
                            height: 40,
                            objectFit: 'contain'
                        }}
                        className='cursor-pointer'
                        src='https://links.papareact.com/f90'
                    />
                </div>
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-red-600 hover:bg-red-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"/>
                    <SearchIcon className="h-12 p-4" color="white"/>
                </div>
                <div className="hidden sm:flex items-center ml-5">
                {dataCollection.map(item=>(
                    <div className="flex items-center p-2 link text-white">
                        <Popover content={content(item.data)} className="flex items-center p-0 m-0">
                            <span className="flex items-center">{item.title} <ChevronDownIcon className="h-4"/></span>
                        </Popover>
                    </div>
                ))}
                </div>
                <div className="flex items-center px-5">
                    {/*<button className="bg-yellow-600 py-1 px-5 rounded-sm text-white">Login</button>*/}
                    <div className="relative flex items-center cursor-pointer">
                        <span className="absolute top-0 right-0 md:right-0 h-5 w-5 bg-red-600 rounded-full text-black font-bold text-center justify-center">10</span>
                        <ShoppingCartIcon className="h-8" color="white"/>
                    </div>
                    <div className="relative flex items-center cursor-pointer ml-5">
                        <Popover placement="bottomRight" content={DotContent} title="More" className="flex items-center p-0 m-0">
                            <span className="flex items-center"><DotsVerticalIcon className="h-8" color="white"/></span>
                        </Popover>
                        
                    </div>
                </div>
            </div>
            <div className="p-2 sm:hidden bg-gray-700">
                <div className="bg-yellow-500 flex rounded-sm items-center h-8 flex-grow-0">
                    <input className="h-full rounded-l-sm w-full focus:outline-none p-1"/>
                    <SearchIcon className="h-10 p-3" color="white"/>
                </div>
            </div>
        </header>
    )
}

export default AppBar
