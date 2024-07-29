import Image from 'next/image'
import React from 'react'
import SecondaryButton from '../buttons/SecondaryButton'

interface cardProps {
    type: string,
    title: string,
    desc: string,
    img: string
}


const CarouselCard = ({ ...props }: cardProps) => {
    return (
        <div className='flex  justify-center items-center'>
            <div className='w-fit rounded-2xl flex md:flex-row flex-col bg-white items-center overflow-hidden'>
                <Image src={props.img} width={400} height={600} alt='case study' className=''></Image>
                <div className='w-96 space-y-8 px-6 pb-8'>
                    <p className='font-sfpd-semibold'>&quot;{props.desc}&quot;</p>
                    <div className=''>
                        <h1 className='font-sfpd-bold text-lg'>--Abhijeet Singh</h1>
                        <h2 className='text-black/50 italic'>Founder, Nemu</h2>
                    </div>
                    <SecondaryButton title='View Case Study'/>
                </div>
            </div>
        </div>
    )
}

export default CarouselCard