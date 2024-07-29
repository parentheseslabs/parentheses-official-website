"use client"
import React from 'react'
import YellowStar from "@/public/icon/yellowStar.svg"
import Image from 'next/image'
import Lottie from 'react-lottie'
import HeroAnimationDesktop from '@/public/animations/homeDesk.json'
import HeroAnimationMobile from '@/public/animations/homeMobile.json'

const logos= [
    "/icon/google.svg",
    "/icon/reversed.svg",
    "/icon/trustpilot_logo.svg",
]
const customers= [
    "/raster/madverse.svg",
    "/raster/nemu.svg",
    "/raster/pizza.svg",
    "/raster/madverse.svg",
    "/raster/nemu.svg",
    "/raster/pizza.svg",
    "/raster/madverse.svg",
    "/raster/nemu.svg",
    "/raster/pizza.svg",


]

const Review = () => {
    return (
        <div className='flex flex-col items-center py-10 gap-10 px-[7%]'>
            <Lottie
            width={600}
            height={400}
            options={{animationData:HeroAnimationDesktop}}
            ></Lottie>
            <div className='flex md:gap-8 gap-4 items-center py-16 border-b border-neutral-200 md:flex-row flex-col'>
                <div className='flex gap-1 items-center '>

                    {new Array(5).fill(0).map((_, idx) => (
                        <YellowStar key={idx} />
                    ))}
                </div>
                <h1 className='md:text-base text-sm'>Based on 100+ reviews on</h1>
                <div className='flex gap-1'>
                        {
                            logos.map((item,idx)=>(
                                <Image key={idx} src={item} width={35} height={35} alt='logo'></Image>
                            ))
                        }
                </div>
            </div>
            <div className='flex flex-col items-center py-8 md:w-[60%]'>
                <h1 className='font-sfpd-bold text-primary_blue md:text-lg text-base'>Trusted by 100+ Professionals & Brands</h1>
                <div className='flex gap-16 pt-6 flex-wrap justify-center'>
                    {customers.map((item,idx)=>(
                        <Image key={idx} src={item}  width={100} height={70} alt='customer'></Image>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Review