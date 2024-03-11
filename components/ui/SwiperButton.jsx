import React from 'react'
import { useSwiper } from "swiper/react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SwiperButton = () => {
    const swiper = useSwiper();


    return (

        <div className='flex absolute top-0 items-start right-0 flex-row gap-4 z-50'>
            <button onClick={() => swiper.slidePrev()}>
                <ChevronLeft className='w-8 h-8 rounded-full bg-gray-800 text-white' />
            </button>

            <button onClick={() => swiper.slideNext()} disabled={swiper.isEnd}>
                <ChevronRight className='w-8 h-8 rounded-full bg-gray-800 text-white'/>
            </button>
        </div>
    )
}

export default SwiperButton