import React from 'react'
import {StarIcon, ClipboardCheckIcon} from '@heroicons/react/outline';
function SideBarMobile(props) {
    const closeSidebar = () => {
        props.setMobileSideBar(!props.mobileSideBar);
        document.getElementById('body-container').style.overflow = 'auto'
    }
    return (
        <div className="w-full h-4/5 absolute z-30" style={{backgroundColor:'rgba(0,0,0,0.5)',zIndex:50}} onClick={()=> closeSidebar()}>
            <div className="w-64 bg-white" style={{height:'100%'}}>
                <div className="pb-4" style={{height:'80%',overflow:'auto'}}>
                    <div className="border-b-0 items-center justify-center" style={{borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
                        <a className="block pl-8 leading-10 text-black p-2">Flash Sales</a>
                    </div>
                    <div className="border-b-0 items-center justify-center" style={{borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
                        <a className="block pl-8 leading-10 text-black p-2">Cell Phones</a>
                    </div>
                    <div className="border-b-0 items-center justify-center" style={{borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
                        <a className="block pl-8 leading-10 text-black p-2">Laptops & Computers</a>
                    </div>
                    <div className="border-b-0 items-center justify-center" style={{borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
                        <a className="block pl-8 leading-10 text-black p-2">iPad & Tablets</a>
                    </div>
                    <div className="border-b-0 items-center justify-center" style={{borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
                        <a className="block pl-8 leading-10 text-black p-2">Smart Watches</a>
                    </div>
                    <div className="border-b-0 items-center justify-center" style={{borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
                        <a className="block pl-8 leading-10 text-black p-2">Audio</a>
                    </div>
                    <div className="border-b-0 items-center justify-center" style={{borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
                        <a className="block pl-8 leading-10 text-black p-2">Certified Renewed</a>
                    </div>
                    <div className="border-b-0 items-center justify-center" style={{borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
                        <a className="block pl-8 leading-10 text-black p-2">Apple Corner</a>
                    </div>
                    <div className="border-b-0 items-center justify-center" style={{borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
                        <a className="block pl-8 leading-10 text-black p-2">Certified Renewed</a>
                    </div>
                    <div className="border-b-0 items-center justify-center" style={{borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
                        <a className="block pl-8 leading-10 text-black p-2">Apple Corner</a>
                    </div>
                </div>
                <div className="shadow-lg">
                    <div className="flex items-center pl-8 p-3">
                        <ClipboardCheckIcon className="h-4 mr-2" color="gray"/>
                        Our quality standards
                    </div>
                    <div className="flex items-center pl-8 p-3">
                        <StarIcon className="h-4 mr-2" color="gray"/>
                        Verified customers ratings
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarMobile
