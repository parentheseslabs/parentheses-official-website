"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import BlockImage from '@/public/svgs/blockImageDark.svg'
import Lottie from 'react-lottie'
import RingAnimation from '@/public/Aimations/Ring Animation.json'

const data = [
    {
        id: 1,
        title: "PRODUCT EXPERTISE",
        desc: "Seasoned product Team to tranform your ideas to product"
    },
    {
        id: 2,
        title: "PRODUCT EXPERTISE",
        desc: "Seasoned product Team to tranform your ideas to product"
    },
    {
        id: 3,
        title: "PRODUCT EXPERTISE",
        desc: "Seasoned product Team to tranform your ideas to product"
    },
]

const Steps = () => {
    const [selectedService, setSelectedServices] = useState(1)
    useEffect(() => {
        const interval = setInterval(() => {
            if (selectedService >= data.length) {
                setSelectedServices(1)
                console.log(selectedService);

            } else {

                setSelectedServices(prev => prev + 1)

            }
        }, 3000)

        return () => clearInterval(interval)
    })
    return (
        <section className='bg-primary_blue lg:h-svh relative flex lg:flex-row flex-col text-white px-[7%] items-center overflow-hidden mb-20 pt-28 lg:pt-0 justify-center'>


            <div className='flex flex-col justify-center gap-16 lg:w-[60rem] 2xl:w-[50rem]'>
                {
                    data.map((item, idx) => (
                        <div key={idx} className={`${selectedService === idx + 1 ? "text-white" : "text-white/30"}`}>
                            <h1 className='text-xl font-sfpd-bold'>{item.title}</h1>
                            <h1 className=''>{item.desc}</h1>
                        </div>
                    ))
                }
            </div>
            <div className='relative z-10 drop-shadow-xl h-[45rem] lg:w-[90rem] xl:w-[960px] overflow-hidden xl:pr-20 2xl:w-[50rem] md:flex items-center hidden'>
                <Lottie options={{
                    loop: true,
                    autoplay: true,
                    animationData: RingAnimation,
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                    }
                }}
                    speed={0.35}
                    width={600}
                    height={1200}
                />
            </div>
            <div className='relative z-10 drop-shadow-xl h-[30rem] lg:w-[90rem] xl:w-[960px] overflow-hidden xl:pr-20 2xl:w-[50rem] items-center flex md:hidden'>
                <Lottie options={{
                    loop: true,
                    autoplay: true,
                    animationData: RingAnimation,
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                    }
                }}
                    speed={0.35}
                    width={400}
                    height={800}
                />
            </div>
            <Image src={'/background/cardGrid.png'} width={700} height={700} alt='background grid' className='absolute right-10 -z-0 opacity-20 w-[60rem]'></Image>
            <BlockImage className='absolute -left-[9%] w-[30%] -top-28' />
        </section>
    )
}

export default Steps