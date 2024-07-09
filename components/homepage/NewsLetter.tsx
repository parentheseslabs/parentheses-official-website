import React from 'react'
import BlockImage from '@/public/svgs/blockImageDark.svg';
// import Headhunting from '@/public/svgs/headhunting.svg'
// import SecondaryButton from '../buttons/SecondaryButton';
import DropDownArrow from '@/public/svgs/dropdownArrow.svg'

const NewsLetter = () => {
    return (
        <div className='flex justify-center px-[7%] py-16'>
            <div className='rounded-3xl bg-primary_blue relative flex flex-col gap-12 md:gap-14 justify-center items-center text-white w-full py-16 overflow-hidden text-center'>
                <div className='space-y-6 flex flex-col items-center relative z-10'>
                    <h1 className='text-white/70 text-xl'>Subscribe to our Newsletter</h1>
                    <h1 className='text-[3.5vmax] font-sfpd-bold'>Join to get exclusive stories for free.</h1>
                </div>

                <form action="" className='space-y-4 md:space-y-5 lg:space-y-6'>
                    <input type="email" className='bg-white/20 border border-white/30 rounded-full placeholder:text-white px-4 outline-none py-2 w-[16rem] sm:w-[18rem] lg:w-[20rem]' placeholder='Your email' required />
                    <button type='submit' className='w-full pl-8 pr-10 h-fit py-3 rounded-full border border-primary_blue hover:border-white  text-primary_blue hover relative group overflow-hidden flex items-center justify-center gap-2 hover:text-white duration-500 text-xs md:text-sm xl:text-[16px] z-30 bg-white active:scale-[.8]'>Submit
                        <div className='bg-primary_blue rounded-full p-[0.18rem] absolute -z-10 group-hover:scale-[70] duration-[400ms] translate-x-8'></div>
                        <DropDownArrow className='group-hover:stroke-white absolute -z-10 -rotate-90 translate-x-8 stroke-2' />
                    </button>
                </form>
                <div className='flex md:flex-row flex-col justify-center gap-6 md:gap-12 items-center md:text-lg text-white/80'>
                    <h1>Proactive Recruitment</h1>
                    <div className='bg-white p-1 rounded-full h-fit'></div>
                    <h1>Attracting Top-Tier Candidates</h1>
                    <div className='bg-white p-1 rounded-full h-fit'></div>
                    <h1>Approaching Industry-Leading Talent</h1>
                </div>
                <BlockImage className='absolute w-[80%] md:w-[40%] -z-0 -left-20 -top-8 md:-left-40 md:-top-10' />
            </div>
        </div>
    )
}

export default NewsLetter