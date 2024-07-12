import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import OneBlueWordHeading from '../OneBlueWordHeading'
import BgGridDark from '@/public/background/bgGridGrey.svg'


const PartnerHero = () => {
    return (
        <div id='hero' className='bg-white min-h-[100svh] relative z-0 overflow-hidden  flex flex-col items-center pt-5 justify-center text-black text-center min-w-full gap-14'>
            <div className='flex flex-col lg:w-2/3 items-center justify-center'>
                <div className='flex flex-col gap-8 w-full items-center'>
                    <h1 className='text-primary_blue text-xl md:text-2xl translate-y-6'>Partners</h1>
                    <OneBlueWordHeading heading='Team Up With Experts at Parentheses' wordNum={4} />
                    <h2 className='lg:w-fit w-[90%] text-sm md:text-xl tracking-wider font-sfpd-light text-black/60'>Take your app to the next level with one of our expert designers, developers, coaches and all-around good people!</h2>
                </div>
            </div>
            <PrimaryButton title='EXPLORE' className='relative z-10' />
            <BgGridDark className='rotate-180 absolute -z-0 top-0 scale-[5] sm:scale-[4]  xl:scale-[2] translate-y-12 md:translate-y-7 lg:-translate-y-10' />
            <BgGridDark className=' absolute -z-0 bottom-0 scale-[5] sm:scale-[4]  xl:scale-[2] -translate-y-10 md:-translate-y-4 lg:translate-y-16 ' />
        </div>
    )
}

export default PartnerHero