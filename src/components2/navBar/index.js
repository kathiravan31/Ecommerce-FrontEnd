import React, { useEffect, useState } from 'react'
import {SearchIcon, UserIcon, ShoppingCartIcon, XIcon} from '@heroicons/react/outline'
import './style.css'
import SideBar from '../sideBar';
import { Popover } from 'antd';
import {useHistory} from 'react-router-dom';

const data = ['Flash Sales!', 'MacBook', 'iPhone 11', 'iPad', 'iPhoneXR', 'Apple Watch', 'iPhone XS', 'Samsung Galaxy', 'iPhone X', 'Laptops', 'Mi Laptops', 'Realme Mobile', 'MI watch', 'MI Lapops', 'MacBook Air']

function NavBar(props) {

    const [width_,setWidth] = useState(20);
  const [showSideBar, setShowSideBar] = useState(false);

    const history = useHistory();

    useEffect(()=>{
        var preScrollpos = window.pageYOffset;
        window.onscroll = function () {
            console.log(preScrollpos, 'preScrollProps')
            var currentScrollPos = window.pageYOffset;
            console.log(currentScrollPos, 'currentScrollPos');
            // if(currentScrollPos <= 20){
            //     document.getElementById('navbar').style.position = 'relative'
            // }
            if(preScrollpos > currentScrollPos){
                document.getElementById('navbar').style.top = "0";
            }else{
                // document.getElementById('navbar').style.position = 'fixed'
                document.getElementById('navbar').style.top = '-145px'
            }
            preScrollpos = currentScrollPos;
        }
    },[])

    const openSideBar = () => {
        props.setShowSideBar(!props.showSideBar);
        // document.getElementById('html').style.overflow = 'hidden'
        document.getElementById('body-container').style.overflow = 'hidden'
    }


    const closeSidebar = () => {
        props.setShowSideBar(!props.showSideBar);
        // setShowSideBar(!showSideBar);
        // document.getElementById('html').style.overflow = 'auto'
        document.getElementById('body-container').style.overflow = 'auto'
    }

    const openSideBarMobile = () => {
        props.setMobileSideBar(!props.mobileSideBar);
        // setShowSideBar(!showSideBar);
        // document.getElementById('html').style.overflow = 'hidden'
        document.getElementById('body-container').style.overflow = 'hidden'
    }

    const closeSideBarMobile = () => {
        props.setMobileSideBar(!props.mobileSideBar);
        // setShowSideBar(!showSideBar);
        // document.getElementById('html').style.overflow = 'hidden'
        document.getElementById('body-container').style.overflow = 'auto'
    }

    return (
        <div className="items-center p-2 pl-5 bg-black z-30" id="navbar" style={{position:'sticky'}}>
                <div className="p-2 items-center flex flex-grow justify-between">
                {!props.mobileSideBar ?
                    <div className="cursor-pointer md:hidden" onClick={()=> openSideBarMobile()}>
                        <div className="h-0.5 w-5 rounded-md m-1">
                            <div className="bg-white rounded-md h-full w-full" style={{width:18}}/>
                        </div>
                        <div className="h-0.5 w-5 rounded-md m-1">
                            <div className="bg-white rounded-md h-full w-full" style={{width:10}}/>
                        </div>
                        <div className="h-0.5 w-5 rounded-md m-1">
                            <div className="bg-white rounded-md h-full w-full" style={{width:18}}/>
                        </div>
                    </div>: 
                    <div className="cursor-pointer" onClick={()=> closeSideBarMobile()}>
                        <XIcon className="h-6" color="white"/>
                    </div>
                }
                <span className="font-bold text-white text-2xl cursor-pointer tracking-wider">BackMarket</span>    
                <div className="px-20 items-center hidden md:flex justify-between">
                    <span className="text-white mr-5 cursor-pointer">About us</span>
                    <span className="text-white cursor-pointer">Help</span>
                </div>
                <div className="h-10 hidden md:flex flex-grow bg-white rounded-md items-center">
                    <input className="h-full rounded-md p-2 w-full outline-none" placeholder="Try iPhone 11, MacBook, Samsung, Airpods"/>
                    <button>
                        <SearchIcon className="h-6 mr-2" color="black"/>
                    </button>
                </div>
                <div className="items-center flex p-2 justify-around w-35">
                    <div className="p-2 items-center">
                        <UserIcon className="h-6" color="white"/>
                    </div>
                    <div className="p-2 items-center" onClick={()=> history.push('/cart')}>
                        <ShoppingCartIcon className="h-6" color="white"/>
                    </div>
                </div>
            </div>
            <div className="flex items-center p-2">
                <div className="items-center hidden md:flex hover:text-gray-400">
                        {!props.showSideBar ? 
                            <div className="cursor-pointer" id="drawer-icon" onClick={()=> openSideBar()} onMouseOver={()=> setWidth(13)} onMouseLeave={()=> setWidth(20)}>
                            <div className="h-0.5 w-5 rounded-md m-1"> 
                                <div className="bg-white rounded-md h-full w-full" style={{width:20}}/>
                            </div>
                            <div className="h-0.5 w-5 rounded-md m-1">
                                <div className="bg-white rounded-md h-full w-full" style={{width:width_}}/>
                            </div>
                            <div className="h-0.5 w-5 rounded-md m-1">
                                <div className="bg-white rounded-md h-full w-full" style={{width:20}}/>
                            </div>
                        </div> :
                        <div className="cursor-pointer" onClick={()=> closeSidebar()}>
                            <XIcon className="h-6" color="white"/>
                        </div>}
                        <div className="text-white px-3 cursor-pointer w-40">
                            All Our Products
                        </div>
                </div>
                <div className="items-center hidden md:flex flex text-white overflow-hidden flex-grow" id="scroll" style={{overflowX:'scroll',whiteSpace:'nowrap'}}>
                    {data.map(item=>(<div className="m-2 hover:text-red-400 cursor-pointer">
                        {item}
                    </div>))}
                </div>
                <div className="h-10 flex md:hidden flex-grow bg-white rounded-md items-center">
                    <input className="h-full rounded-md p-2 w-full outline-none" placeholder="Try iPhone 11, MacBook, Samsung, Airpods"/>
                    <button>
                        <SearchIcon className="h-6 mr-2" color="black"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
