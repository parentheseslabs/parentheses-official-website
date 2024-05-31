import React from 'react'
import OneBlueWordHeading from '../OneBlueWordHeading'
import Image from 'next/image'
import Develop from '@/public/svgs/develop.svg'


const qualities = [
    {
        title: "Speed & Cost Efficient",
        subtitle: "We help startups scale rapidly and efficiently, eliminating the need for time-consuming and costly hiring processes."
    },
    {
        title: "Risk Mitigation",
        subtitle: "Our experience and knowledge help you make informed decisions and avoid common startup pitfalls."
    },
    {
        title: "Focused yet Flexible",
        subtitle: "We handle key growth and operational challenges, freeing founders to focus on their core competencies and vision."
    },
]

interface cardProp {
    title: string,
    subtitle: string,
}


const WhyUs = () => {
    return (
        <div className='w-full flex justify-center items-center py-32 flex-col gap-32'>
            <OneBlueWordHeading heading='Why Choose Us?' wordNum={3} />
            <div className='flex w-[93%] lg:flex-row flex-col gap-14 lg:gap-0 items-center'>
                <div className=' w-full relative flex justify-center h-[35rem] items-center'>
                    <div className='relative px-8 sm:px-16'>
                        <Image src={'/raster/whyus.avif'} width={416} height={539} alt='why choose us' className=''></Image>
                        <div className=' bg-white drop-shadow-2xl rounded-md w-[80%] lg:w-[20rem] h-fit pt-16 px-4 pb-10  xl:px-8 absolute top-[50%] -translate-y-[50%] -right-0 flex justify-center items-center flex-col '>
                            <h1 className='text-[4rem] lg:text-[5rem] text-primary_blue absolute top-0 left-4 font-sfpd-bold'>&quot;</h1>
                            <h1 className='text-base md:text-lg'>“Parentheses have been great to work with. I really believe they genuinely want to help independent artists get that push without any restrictions“</h1>
                            <h3 className='w-full flex justify-end pt-16 font-sfpd-semibold'>--Abhijeet Singh</h3>
                            <h3 className='italic w-full flex justify-end text-gray-400 font-sfpd-semibold'>Founder, Nemu</h3>
                        </div>
                    </div>
                </div>
                <div className='w-[90%] lg:w-full '>
                    {
                        qualities.map((item, idx) => (
                            <Card key={idx} {...item} />

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const Card = ({ ...prop }: cardProp) => {
    return (
        <div className=' flex items-start gap-6 border-b last:border-none py-7 border-'>
            <Develop className='w-20' />
            <div className='space-y-3'>
                <h1 className='text-3xl font-sfpd-bold'>{prop.title}</h1>
                <p>{prop.subtitle}</p>
            </div>
        </div>
    )
}


export default WhyUs