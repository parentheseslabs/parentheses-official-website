import React from 'react'
import BgGridDark from '@/public/background/bgGridGrey.svg'
import PrimaryButton from '../buttons/PrimaryButton'

const CommunityHero = () => {
    return (
        <div id='hero' className='bg-white min-h-[100svh] relative z-0 overflow-hidden  flex flex-col items-center pt-5 justify-center text-black text-center min-w-full gap-14 border-b border-gray-200'>
            <div className='flex flex-col lg:w-2/3 items-center justify-center'>
                <div className='flex flex-col gap-9 w-full items-center'>
                    <h1 className='text-primary_blue text-lg md:text-xl translate-y-6'>Community</h1>
                    <div className='flex text-[3.5vmax] md:text-[4vmax] flex-col  justify-center items-center leading-[5rem]'>
                        <h1 className=' font-sfpd-bold'>Welcome to Parentheses <span className='text-primary_blue'>Community</span></h1>
                    </div>
                    <h2 className='lg:w-fit w-[90%] text-sm md:text-xl tracking-wider font-sfpd-light text-black/60'>Explore what thousands of startups are building in your specific domain</h2>
                </div>
            </div>
            <PrimaryButton title='EXPLORE' className='relative z-10' />
            <BgGridDark className='rotate-180 absolute -z-0 top-0 scale-[5] sm:scale-[4]  xl:scale-[2] translate-y-12 md:translate-y-7 lg:-translate-y-10' />
            <BgGridDark className=' absolute -z-0 bottom-0 scale-[5] sm:scale-[4]  xl:scale-[2] -translate-y-10 md:-translate-y-4 lg:translate-y-16 ' />
        </div>
    )
}

export default CommunityHero