import React from 'react'

import { Carousel } from 'antd';

import Banner1 from '../../assets/banners/US-AIRPODS-CAROUSEL-DESKTOP.png'
import Banner2 from '../../assets/banners/US-carousel-Champions_DesktopV2.jpg'
import Banner3 from '../../assets/banners/US-carousel-macbook-generic-desktop.png'
import Banner4 from '../../assets/banners/US-carrousel-iPhone11-new-desktop.png'
import Banner5 from '../../assets/banners/US-Student_Offer_CAROUSEL-D.png'
import ProductFeed from '../productFeed';

function Banner() {
    return (
        <div>
            <Carousel className="h-32 lg:h-72 md:h-56">
                <div className="items-center" style={{width: '100%'}}>
                    <img className="h-32 w-full lg:h-72 md:h-56" src={Banner1}/>
                </div>
                <div className="items-center" style={{width: '100%'}}>
                    <img className="h-32 w-full lg:h-72 md:h-56" src={Banner2}/>
                </div>
                <div className="items-center" style={{width: '100%'}}>
                    <img className="h-32 w-full lg:h-72 md:h-56" src={Banner3}/>
                </div>
                <div className="items-center" style={{width: '100%'}}>
                    <img className="h-32 w-full lg:h-72 md:h-56" src={Banner4}/>
                </div>
                <div className="items-center" style={{width: '100%'}}>
                    <img className="h-32 w-full lg:h-72 md:h-56" src={Banner5}/>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
