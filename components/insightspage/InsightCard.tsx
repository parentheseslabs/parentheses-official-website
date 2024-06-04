import Image from 'next/image'
import React from 'react'


interface cardProp {
    img: string,
    type:string,
    title: string
    desc: string
    date: string
    author: string
}

const InsightCard = ({...props}:cardProp) => {
    return (
        <div className=' rounded-3xl px-6 py-5 bg-white space-y-4 '>
            <Image src={props.img} width={532} height={350} alt=''></Image>
            <h1 className='py-1 px-3 bg-blue-50 text-primary_blue  w-fit rounded-full text-sm'>{props.type}</h1>
            <h1 className='text-[2.2vmax] font-sfpd-bold w-fit'>{props.title}</h1>
            <h2 className='text-black/50 text-sm md:text-lg min-w-fit sm:w-96'>{props.desc}</h2>
        </div>
    )
}

export default InsightCard