import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import BgGridDark from '@/public/background/bgGridGrey.svg'

const ResourcesHero = () => {
    return (

        <div id='hero' className='bg-white min-h-[100svh] relative z-0 overflow-hidden  flex flex-col items-center pt-5 justify-center text-black text-center min-w-full gap-14 border-b border-gray-200'>
            <div className='flex flex-col lg:w-2/3 items-center justify-center'>
                <div className='flex flex-col gap-0 md:gap-9 w-full items-center'>
                    <h1 className='text-primary_blue text-lg md:text-xl md:translate-y-6'>Resources</h1>
                    <div className='flex text-[3.5vmax] md:text-[4vmax] flex-col  justify-center items-center md:leading-[5rem]'>
                        <h1 className=' font-sfpd-bold'>Learn, Develop & Grow</h1>
                    </div>
                    <h2 className='lg:w-fit w-[90%] text-sm md:text-xl tracking-wider font-sfpd-light text-black/60'>Incorporate your company, and test with no-code tools, and automate financial operations to move faster using tools.</h2>
                </div>
            </div>
            <PrimaryButton title='EXPLORE' className='relative z-10' />
            <BgGridDark className='rotate-180 absolute -z-0 top-0 scale-[5] sm:scale-[4]  xl:scale-[2] translate-y-12 md:translate-y-7 lg:-translate-y-10' />
            <BgGridDark className=' absolute -z-0 bottom-0 scale-[5] sm:scale-[4]  xl:scale-[2] -translate-y-10 md:-translate-y-4 lg:translate-y-16 ' />
        </div>

    )
}

export default ResourcesHero