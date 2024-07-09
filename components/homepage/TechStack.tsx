"use client"
import React, { useEffect, useState } from 'react'
import DarkLogo from '@/public/logo/mobileDarkLogo.svg'
import Image from 'next/image'


const data=[
    "/techstack/amazon.svg",
    "/techstack/azure.svg",
    "/techstack/bubble.svg",
    "/techstack/caspio.svg",
    "/techstack/commerce.svg",
    "/techstack/expo.svg",
    "/techstack/hasura.svg",
    "/techstack/shopify.svg",
    "/techstack/stripe.svg",
]

const TechStack = () => {
    const [selectedService, setSelectedServices] = useState(1)
    useEffect(() => {
        const interval = setInterval(() => {
            if (selectedService >= data.length) {
                setSelectedServices(1)
                console.log(selectedService);

            } else {

                setSelectedServices(prev => prev + 1)
                console.log(selectedService);

            }
        }, 2000)

        return () => clearInterval(interval)
    })
    return (
        <section className='min-h-svh px-[7%] flex justify-center items-center'>
            <div className='flex lg:h-[25rem] xl:h-[40rem] 2xl:h-[60rem] md:flex-row flex-col'>
                <div className='bg-primary_blue rounded-t-3xl md:rounded-l-3xl md:rounded-r-none flex flex-col justify-center  px-5 sm:px-10 py-8 md:py-0 md:px-14 lg:px-20 gap-8 text-white md:w-1/2 items-center'>
                    <div className='flex gap-8  items-center justify-center w-[20rem]'>
                        <DarkLogo />
                        <div className='h-10 border-l-4 border-l-white'></div>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-sfpd-bold'>TECHSTACK</h1>
                    </div>
                    <h1 className='text-lg md:text-xl'>450+ pre-built integrations that you can enable with the flip of a switch.</h1>
                </div>
                <div className='border border-primary_blue  grid grid-cols-2 lg:grid-cols-3 px-10 md:px-20 rounded-b-3xl md:rounded-l-none md:rounded-r-3xl items-center justify-items-center gap-8 lg:gap-12 md:w-1/2 lg:py-0 py-8'>
                    {
                        data.map((item,idx)=>(
                            <Image key={idx} src={item} width={109}height={67} alt='tech' className={`${selectedService===idx+1?"saturate-100 opacity-100":"saturate-0 opacity-30"}`}></Image>
                        ))
                    }
                </div>

            </div>

        </section>
    )
}

export default TechStack