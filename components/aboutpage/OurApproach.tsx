import React from 'react'
import BgGridGrey from '@/public/background/bgGridGrey.svg'
import OneBlueWordHeading from '../OneBlueWordHeading'
import OurApproachCard from './OurApproachCard'

const approaches = [
    {
        icon: "/svgs/discover.svg",
        title: "Discover",
        desc: "From market entry analysis to tech strategy and implementation is covered."
    },
    {
        icon: "/svgs/develop.svg",
        title: "Develop",
        desc: "Agile development and QA"
    },
    {
        icon: "/svgs/deliver.svg",
        title: "Deliver",
        desc: "Comprehensive documentation during handoff to set your future team for success."
    },
]

const OurApproach = () => {
    return (
        <div className='bg-gradient-to-b from-gray-100 min-h-[100svh] relative z-0 overflow-hidden  flex flex-col items-center pt-5 justify-center text-center min-w-full'>
            <OneBlueWordHeading heading='Our Approach' wordNum={2} />
            <div className='w-[90%] flex justify-center flex-wrap py-20 gap-24 translate-y-8'>
                {
                    approaches.map((item, idx) => (
                        <OurApproachCard key={idx} {...item} />
                    ))
                }
            </div>
            <BgGridGrey className='rotate-180 absolute z-0 top-0 scale-[5] sm:scale-[4]  xl:scale-[2] translate-y-12 md:translate-y-7 lg:-translate-y-10' />
            <BgGridGrey className='absolute z-0 bottom-0 scale-[5] sm:scale-[4]  xl:scale-[2] -translate-y-10 md:-translate-y-4 lg:translate-y-16' />
        </div>
    )
}

export default OurApproach