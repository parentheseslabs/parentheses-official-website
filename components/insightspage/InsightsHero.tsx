import Image from 'next/image'
import React from 'react'
import SecondaryButton from '../buttons/SecondaryButton'
import BlockImageLight from '@/public/svgs/blockImageLight.svg'
import InsightHeroCard from './InsightHeroCard'


const data = [
    {
        type: "Guide",
        title: "Introduction to various techstacks",
        color:"blue",
    },
    {
        type: "Guide",
        title: "Introduction to various techstacks",
        color:"blue",
    },
    {
        type: "Guide",
        title: "Introduction to various techstacks",
        color:"blue",
    },
    {
        type: "Guide",
        title: "Introduction to various techstacks",
        color:"blue",
    },
    {
        type: "Guide",
        title: "Introduction to various techstacks",
        color:"blue",
    },
]

const InsightsHero = () => {
    return (
        <section className=' flex pt-40 pb-28 px-[7%] relative md:flex-row flex-col gap-16 md:gap-0'>
            <div className='w-full space-y-6 md:space-y-10 flex flex-col justify-center'>
                <div className='font-sfpd-bold text-[3.75vmax] space-y-3'>
                    <h1 className='text-primary_blue text-base md:text-xl font-sfpd-regular'>Insights</h1>
                    <h1 className=''>KEEP YOURSELF</h1>
                    <h1 className=' text-primary_blue'>UPDATED!</h1>
                </div>
                <h3 className='text-sm md:text-lg'>With our latest blogs & Guides crafted for you.</h3>
                <SecondaryButton title='EXPLORE' className='w-fit -z-[1]' />
            </div>
            <Image src={'/background/insightsImage.png'} width={724} height={721} alt='insigths' className='w-full hidden md:block'></Image>
            <div className='flex flex-col md:hidden gap-8 items-center'>
                {
                    data.map((item,idx)=>(
                        <InsightHeroCard key={idx} {...item}/>
                    ))
                }
            </div>
            <BlockImageLight className='absolute w-[30%] -bottom-32 -left-16' />
        </section>
    )
}

export default InsightsHero