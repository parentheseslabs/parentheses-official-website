"use client"
import Image from 'next/image'
import { removeAllListeners } from 'process'
import React, { useEffect, useState } from 'react'

const data = [
    {
        id: 1,
        title: "Connect your data",
        img: "/subservices/bigframe.png",
        description:"kajndak akjsdvnal akjsdn kjjd jkasdnlakd ajsdhckacankscj jdh fuhasd"
    },
    {
        id: 2,
        title: "Connect your data",
        img: "/subservices/squareframe.png",
        description:"kajndak akjsdvnal akjsdn kjjd jkasdnlakd ajsdhckacankscj jdh fuhasd"
    },
    {
        id: 3,
        title: "Connect your data",
        img: "/subservices/bigframe.png",
        description:"kajndak akjsdvnal akjsdn kjjd jkasdnlakd ajsdhckacankscj jdh fuhasd"
    },
    {
        id: 4,
        title: "Connect your data",
        img: "/subservices/squareframe.png",
        description:"kajndak akjsdvnal akjsdn kjjd jkasdnlakd ajsdhckacankscj jdh fuhasd"
    },
]

const WorkFlow = () => {
    const [selectedService, setSelectedServices] = useState(1)
    useEffect(() => {
        const interval = setInterval(() => {
            if (selectedService >= data.length) {
                setSelectedServices(1)
            } else {

                setSelectedServices(prev => prev + 1)
            }
        }, 5000)

        return () => clearInterval(interval)
    })

    return (
        <section className='min-w-full min-h-svh flex flex-col items-center px-[10%] relative'>
            <div className='space-y-3 text-center'>
                <h1 className='text-4xl font-sfpd-bold'>How It Works</h1>
                <h2 className='text-black/60 md:text-lg'>Let&apos;s see what goes behind</h2>
            </div>
            <div className='w-full flex lg:flex-row flex-col-reverse justify-center items-center py-20 lg:gap-0 gap-16'>
                <div className='lg:w-1/2 space-y-10'>
                    {data.map((item, idx) => (
                        <div key={idx} className='flex gap-3 lg:pl-20'>
                            <h1 className={`rounded-full border ${selectedService === item.id ? "border-primary_blue text-black" : "border-gray-400 text-black/50"} size-10 p-5 lg:size-10 flex justify-center items-center`}>{item.id}</h1>
                            <div className='space-y-3'>
                                <h2 className={`${selectedService === item.id ? "text-black" : "text-black/50"} font-sfpd-semibold`}>{item.title}</h2>
                                <h1 className={`${selectedService===item.id?"text-black":"text-black/60"} text-sm`}>{item.description}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='lg:w-1/2 flex flex-col justify-center items-center'>
                    <div className='w-[400px] h-[400px] overflow-hidden p-5 bg-gray-100 rounded-xl flex flex-col items-center justify-center'>
                        {
                            data.map((item, idx) => (
                                <Image key={idx} src={item.img} width={400} height={400} alt='step' aria-label='This is a picture of one of the steps of our workflow' className={`${selectedService === item.id ? "scale-x-100" : "scale-x-0 w-0 h-0"} duration-500 origin-left transition`}></Image>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Image src={"/background/cardGridLight.png"} alt='grid' width={600} height={600} className='absolute -z-[1] opacity-30'></Image>
        </section>
    )
}

export default WorkFlow