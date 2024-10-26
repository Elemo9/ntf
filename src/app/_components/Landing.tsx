"use client";
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, EffectFade,Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "swiper/css/autoplay";
import studentImg from "../../../public/assets/proxy-image (10).jpeg";
import innovationImg from "../../../public/assets/proxy-image (8).jpeg";
import enterprenuerialImg from "../../../public/assets/proxy-image (6).jpeg";
import economicImg from "../../../public/assets/proxy-image (5).jpeg";
import Image from 'next/image';

export default function Landing() {
  return (
    <div className='w-full h-[85vh] relative'>
        {/* <div className='h-full w-full absolute top-0 left-0 bottom-0 bg-black z-30 opacity-70'>
        </div> */}
        <div className='h-full w-full flex flex-col gap-4 p-16 bg-transparent items-center justify-center absolute top-0'>
            <h2 className='text-4xl lg:text-5xl w-[95%] font-bold tracking-widest text-white z-40 text-center'>Welcome to <br /><span className='text-green-500 uppercase'>Naija </span><span className='text-green-500'>Tech </span><span className='text-green-500'>Fair </span>(Osun Chapter) 2025</h2>
            <p className='text-sm lg:text-2xl font-light tracking-widest text-white z-40 text-center'>Date: To Be Announced | Location: Osun State, Nigeria</p>
            <button className='bg-green-500 duration-500 transition-all z-40 py-6 max-lg:py-3 text-2xl max-lg:text-base uppercase px-12 max-lg:px-8 rounded-2xl shadow-2xl hover:bg-green-600  tracking-wider cursor-pointer font-normal text-white'>Get Tickets</button>
        </div>
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            autoplay={{
                delay: 7000,
            }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide className=''>
                <Image src={studentImg} alt='' className='w-full h-full object-cover brightness-50'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={innovationImg} alt='' className='w-full h-full object-cover brightness-50'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={enterprenuerialImg} alt='' className='w-full h-full object-cover brightness-50'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={economicImg} alt='' className='w-full h-full object-cover brightness-50'/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
