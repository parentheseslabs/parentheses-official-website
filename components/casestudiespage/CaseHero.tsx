import React from 'react'
import BgGridDark from '@/public/background/bgGridGrey.svg'
import PrimaryButton from '../buttons/PrimaryButton'

const CaseHero = () => {
    return (
        <div className='bg-white min-h-[100svh] relative z-0 overflow-hidden  flex flex-col items-center pt-5 justify-center text-black text-center min-w-full gap-14'>
            <div className='flex flex-col lg:w-2/3 items-center justify-center'>
                <div className='flex flex-col gap-8 w-full items-center'>
                    <h1 className='text-primary_blue text-xl md:text-2xl translate-y-6'>Case Studies</h1>
                    <div className='flex text-[4vmax] md:text-[4.5vmax] flex-col  justify-center items-center'>
                        <h1 className=" font-sfpd-bold ">Better <span className='text-primary_blue'>workflow.</span> </h1>
                        <h1 className=' font-sfpd-bold'>No matter what the <span className='text-primary_blue'>work</span> is.</h1>
                    </div>
                    <h2 className='lg:w-fit w-[90%] text-sm md:text-xl tracking-wider font-sfpd-light text-black/60'>Faster post-production. Shorter review cycles. Better collaboration. We take your work to the next level.</h2>
                </div>
            </div>
            <PrimaryButton title='EXPLORE' className='relative z-10'/>
            <BgGridDark className='rotate-180 absolute -z-0 top-0 scale-[5] sm:scale-[4]  xl:scale-[2] translate-y-12 md:translate-y-7 lg:-translate-y-10' />
            <BgGridDark className=' absolute -z-0 bottom-0 scale-[5] sm:scale-[4]  xl:scale-[2] -translate-y-10 md:-translate-y-4 lg:translate-y-16 ' />
        </div>
    )
}

export default CaseHero