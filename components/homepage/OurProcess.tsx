"use client"
import React from 'react'
import BgGridDark from '@/public/background/bgGridGrey.svg'
import Image from 'next/image'
import { useState } from 'react'


const data = [
    {
        id: 0,
        title: "Discovery",

    },
    {
        id: 1,
        title: "Solutioning"
    },
    {
        id: 2,
        title: "Handover"
    }
]

const picture = [
    {
        id: 0,
        img: '/animations/discovery.gif',
        left: "/ourprocess/discovery/lefttentacles.svg",
        right: "/ourprocess/discovery/righttentacles.svg"
    },
    {
        id: 1,
        img: "/animations/solutioning.gif",
        left: "/ourprocess/solutioning/lefttentacles.svg",
        right: "/ourprocess/solutioning/righttentacles.svg"
    },
    {
        id: 2,
        img: "/animations/handover.gif",
        left: "/ourprocess/handover/left.svg",
        right: "/ourprocess/handover/right.svg"
    },
]

const OurProcess = () => {
    const [activeTab, setActiveTab] = useState(0)

    const handleClick = (elemref: number) => {
        setActiveTab(elemref)
    }


    return (
        <div className='bg-white min-h-[100svh] relative z-0 overflow-hidden  flex flex-col items-start pt-5 justify-center text-black text-center min-w-full px-[7%] border-y'>
            <div className='w-full flex flex-col items-start gap-8'>
                <h1 className='text-[4vmax] font-sfpd-bold'>Our Process</h1>
                <div className='flex w-full justify-between items-center md:px-10'>
                    <button onClick={() => handleClick(0)} className={`${activeTab === 0 ? "bg-primary_blue text-white" : "bg-neutral-200 text-black"} sm:text-lg md:text-xl rounded-full border border-neutral-300 sm:px-5 sm:py-2 px-3 py-1 duration-300`}>Discovery</button>
                    <div className='border-t border-dashed border-neutral-400 w-full hidden md:flex'></div>
                    <button onClick={() => handleClick(1)} className={`${activeTab === 1 ? "bg-primary_blue text-white" : "bg-neutral-200 text-black"} sm:text-lg md:text-xl rounded-full border border-neutral-300 sm:px-5 sm:py-2 px-3 py-1 duration-300`}>Solutioning</button>
                    <div className='border-t border-dashed border-neutral-400 w-full hidden md:flex'></div>
                    <button onClick={() => handleClick(2)} className={`${activeTab === 2 ? "bg-primary_blue text-white" : "bg-neutral-200 text-black"} sm:text-lg md:text-xl rounded-full border border-neutral-300 sm:px-5 sm:py-2 px-3 py-1 duration-300`}>Handover</button>
                </div>
                <div className='flex w-full justify-center items-center py-10'>
                    {
                        picture.map((item, idx) => (
                            <div key={idx} className={`${activeTab === idx ? "flex" : "hidden"} animate-fade items-center`}>
                                <Image src={item.left} width={450} height={400} alt='step' className='hidden md:flex w-[18rem] lg:w-[25rem] xl:w-[30rem]'></Image>
                                <Image src={item.img} width={400} height={400} alt='step' className='lg:w-[16rem] lg:h-[16rem] w-[12rem] h-[12rem] bg-white p-6 rounded-2xl shadow-allsideSmall'></Image>
                                <Image src={item.right} width={300} height={300} alt='step' className='hidden md:flex w-[10rem] lg:w-[16rem] xl:w-[25rem]'></Image>
                            </div>
                        ))
                    }
                </div>
            </div>
            <BgGridDark className='rotate-180 absolute -z-[1] top-0 scale-[5] sm:scale-[4]  xl:scale-[2] translate-y-12 md:translate-y-7 lg:-translate-y-10' />
            <BgGridDark className=' absolute -z-[1] bottom-0 scale-[5] sm:scale-[4]  xl:scale-[2] -translate-y-10 md:-translate-y-4 lg:translate-y-16 ' />
        </div>
    )
}

export default OurProcess