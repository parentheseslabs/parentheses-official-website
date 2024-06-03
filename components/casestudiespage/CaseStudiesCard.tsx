import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'


interface cardProps {
    type: string,
    title: string,
    desc: string,
    img: string
}

const CaseStudiesCard = ({ ...props }: cardProps) => {
    return (
        <div className='w-[80%] flex md:flex-row flex-col gap-5 md:gap-8 md:even:flex-row-reverse items-center'>
            <Image src={props.img} width={478} height={589} alt='cases' className='w-full md:w-2/3'></Image>
            <div className='flex  justify-center w-full lg:px-10 flex-col gap-6 md:gap-10 md:items-start items-center'>
                <h1 className='py-1 px-3 bg-blue-50 text-primary_blue  md:w-fit rounded-full text-sm'>{props.type}</h1>
                <div className='space-y-2 text-center md:text-left'>
                    <h1 className='text-3xl md:text-5xl font-sfpd-bold'>{props.title}</h1>
                    <h2 className='text-base md:text-xl'>{props.desc}</h2>
                </div>
                <PrimaryButton title='VIEW CASE STUDY' className='w-fit' />
            </div>
        </div>
    )
}

export default CaseStudiesCard