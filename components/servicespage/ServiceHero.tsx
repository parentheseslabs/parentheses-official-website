"use client"
import React from 'react'
import ConversationCard from './ConversationCard'
import BgGridDark from '@/public/background/bgGridGrey.svg'

const ServiceHero = () => {
  return (
    <div id='hero' className='bg-white min-h-[100svh] relative z-0 overflow-hidden  flex lg:flex-row flex-col items-center  justify-center lg:justify-between text-black min-w-full px-[6%] pt-36 lg:pt-16 gap-16 pb-20'>
            <div className='flex flex-col lg:w-[55%] items-start justify-center font-sfpd-bold'>
                    <h1 className='text-primary_blue'>Services</h1>
                    <div className='flex text-[4vmax] md:text-[4.5vmax] flex-col  justify-center'>
                        <h1>Empowering Solutions for the <span className='text-primary_blue'>Digital Age</span></h1>
                    </div>
                    <h2 className='lg:w-fit w-[60%] text-sm md:text-xl tracking-wider font-sfpd-light text-black/60'>Faster post-production. Shorter review cycles. Better collaboration. We take your work to the next level.</h2>
            </div>
            <ConversationCard/>
            <BgGridDark className='rotate-180 absolute -z-[1] top-0 scale-[5] sm:scale-[4]  xl:scale-[2] translate-y-12 md:translate-y-7 lg:-translate-y-10' />
            <BgGridDark className=' absolute -z-[1] bottom-0 scale-[5] sm:scale-[4]  xl:scale-[2] -translate-y-10 md:-translate-y-4 lg:translate-y-16 ' />
        </div>
  )
}

export default ServiceHero