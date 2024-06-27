import React from 'react'
import BlockImage from '@/public/svgs/blockImageDark.svg';
import Headhunting from '@/public/svgs/headhunting.svg'
import SecondaryButton from '../buttons/SecondaryButton';

const HeadHunting = () => {
    return (
        <div className='flex justify-center px-[7%] py-16'>
            <div className='rounded-3xl bg-primary_blue relative flex flex-col gap-12 md:gap-14 justify-center items-center text-white w-full py-16 overflow-hidden text-center'>
                <div className='space-y-6 flex flex-col items-center relative z-10'>
                    <h1 className='text-white/70 text-xl'>Resources</h1>
                    <h1 className='text-[3.5vmax] font-sfpd-bold'>Head Hunting services</h1>
                </div>
                <Headhunting className='w-[8rem] md:w-[10rem]'/>
                <SecondaryButton title='Visit Site' />
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

export default HeadHunting