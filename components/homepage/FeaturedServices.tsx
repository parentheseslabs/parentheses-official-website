"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Arrow from '@/public/icon/down-arrow.svg'

const buttons = [
    {
        id: 0,
        title: "Dedicated Product Team"
    },
    {
        id: 1,
        title: "UI/UX Design"
    },
    {
        id: 2,
        title: "Branding & SEO"
    },
    {
        id: 3,
        title: "Web Development"
    },
    {
        id: 4,
        title: "Customized Website and Dashboards"
    },
]

const services = [
    {
        id: 0,
        title: "Dedicated Product Team",
        img: "/featuredservice/productTeam.svg",
        desc: "The team will help end to end the creation of the product. The team will help end to end the creation of the product.",
        href: "/"
    },
    {
        id: 1,
        title: "UI/UX Design",
        img: "/featuredservice/uiux.svg",
        desc: "The team will help end to end the creation of the product. The team will help end to end the creation of the product.",
        href: "/"
    },
    {
        id: 2,
        title: "Branding & SEO",
        img: "/featuredservice/seo.svg",
        desc: "The team will help end to end the creation of the product. The team will help end to end the creation of the product.",
        href: "/"
    },
    {
        id: 3,
        title: "Web Development",
        img: "/featuredservice/dev.svg",
        desc: "The team will help end to end the creation of the product. The team will help end to end the creation of the product.",
        href: "/"
    },
    {
        id: 4,
        title: "Customized Website and Dashboards",
        img: "/featuredservice/dashboard.svg",
        desc: "The team will help end to end the creation of the product. The team will help end to end the creation of the product.",
        href: "/"
    },
]


const FeaturedServices = () => {
    const [activeTab, setActiveTab] = useState(0)

    const handleClick = (elemref: number) => {
        setActiveTab(elemref)
    }
    const goPrev = () => {
        if (activeTab > 0) {
            setActiveTab(prev => prev - 1)
        }
    }
    const goNext = () => {
        if (activeTab < buttons.length - 1) {
            setActiveTab(prev => prev + 1)
        }
    }

    return (
        <section className='flex px-[7%] min-h-[70svh] items-center lg:flex-row flex-col-reverse py-10 gap-16'>
            <div className='lg:w-1/2 lg:max-w-max max-w-[30rem] py-6 px-10 overflow-y-auto no-scrollbar bg-white rounded-2xl shadow-allsideSmall h-fit'>
                {
                    services.map((item, idx) => (
                        <div key={idx} className={`${activeTab === idx ? "flex" : "hidden"} min-h-[20rem] flex-col gap-6 animate-fadeInUp`}>
                            <Image src={item.img} width={65} height={65} alt={item.title + "image"} className=''></Image>
                            <div className='bg-blue-200 px-3 py-2 rounded-xl rounded-bl-none w-fit font-sfpd-semibold'>
                                {item.title}
                            </div>
                            <div className='bg-blue-200 px-3 py-2 rounded-xl rounded-bl-none w-fit text-sm sm:text-base lg:text-lg'>
                                {item.desc}
                            </div>
                            <Link href={item.href} className='bg-primary_blue px-3 py-2 rounded-xl rounded-bl-none w-fit text-white border border-dashed'>
                                LEARN MORE
                            </Link>

                        </div>
                    ))
                }
            </div>
            <div className='flex w-full max-w-[30rem] lg:w-fit lg:flex-col justify-between lg:min-h-[20rem] bg-neutral-200 rounded-full'>
                {
                    buttons.map((item, idx) => (
                        <motion.div key={idx} layoutId={'slider' + idx} className={`w-full border-t-8 lg:border-l-8 rounded-full ${activeTab === idx && "border-primary_blue"} lg:h-10 duration-300`}></motion.div>
                    ))
                }
            </div>
            <div className='w-full max-w-[30rem] lg:w-1/2 flex lg:flex-col flex-row justify-between lg:h-[20rem] lg:gap-0 gap-4 items-start'>
                {
                    buttons.map((item, idx) => (
                        <button
                            key={idx}
                            className={`${activeTab === idx ? "text-black" : "text-black/40"} h-fit text-xl font-sfpd-semibold hidden lg:flex`}
                            onClick={() => handleClick(idx)}
                        >{item.title}</button>
                    ))
                }
                <div className='flex justify-between w-full items-center h-10 gap-5 lg:hidden'>
                    <button onClick={goPrev} disabled={activeTab === 0} className='disabled:opacity-30'>
                        <Arrow className={`stroke-black rotate-90 w-5 h-fit `} />
                    </button>
                    <div className='flex gap-4'>
                        {
                            buttons.map((item, idx) => (
                                <button
                                    key={idx}
                                    className={`h-fit text-xl font-sfpd-semibold ${activeTab === idx || activeTab + 1 === idx ? "flex" : "hidden"} ${activeTab === idx ? "text-black" : "text-black/40"}`}
                                    onClick={() => handleClick(idx)}
                                >{item.title}</button>
                            ))
                        }
                    </div>
                    <button onClick={goNext} disabled={activeTab === (buttons.length - 1)} className='disabled:opacity-30'>
                        <Arrow className="stroke-black -rotate-90 w-5 h-fit" />
                    </button>
                </div>

            </div>

        </section>
    )
}

export default FeaturedServices