import React from 'react'
import BgGridDark from '@/public/background/bgGridGrey.svg'

const OurMission = () => {
  return (
    <div className='bg-white min-h-[100svh] relative z-0 overflow-hidden  flex flex-col items-center pt-5 justify-center text-black text-center min-w-full'>
            <div className='flex flex-col gap-16 lg:gap-16 lg:w-2/3 items-center justify-center'>
                <div className='flex flex-col gap-12 md:gap-16 w-full items-center'>
                    <h1 className='text-primary_blue text-xl md:text-2xl translate-y-6'>Our Mission</h1>
                    <div className='flex text-[4vmax] md:text-[4.5vmax] flex-col  justify-center items-center'>
                        <h1 className=" font-sfpd-bold ">Creating a global community of </h1>
                        <h1 className=' font-sfpd-bold text-primary_blue'>independent artists</h1>
                    </div>
                    <h2 className='lg:w-fit w-[93%] text-sm md:text-xl tracking-wider font-sfpd-light'>A platform to support independent artists with the best-in-class technology. We are here to be a catalyst for artists to earn their true worth while empowering the community to cross-pollinate fans across the globe.</h2>
                </div>
            </div>
            <BgGridDark className='rotate-180 absolute z-0 top-0 scale-[5] sm:scale-[4]  xl:scale-[2] translate-y-12 md:translate-y-7 lg:-translate-y-10' />
            <BgGridDark className=' absolute z-0 bottom-0 scale-[5] sm:scale-[4]  xl:scale-[2] -translate-y-10 md:-translate-y-4 lg:translate-y-16 ' />
        </div>
  )
}

export default OurMission