import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const InsightCard = ({...props}) => {
    return (
        <Link href={`/insights/blogs/${props.uid}`} className=' rounded-3xl px-6 py-5 bg-white space-y-4 hover:border hover:border-primary_blue border border-transparent duration-300'>
            <Image src={props.data.slices[0]?.primary.thumbnail.url} width={532} height={350} alt='' className='aspect object-cover h-72 rounded-2xl'></Image>
            <h1 className='py-1 px-3 bg-blue-50 text-primary_blue  w-fit rounded-full text-sm'>{props.data.slices[0]?.primary.type}</h1>
            <h1 className='text-[2.2vmax] font-sfpd-bold w-fit'>{props.data.slices[0]?.primary.title}</h1>
            <h2 className='text-black/50 text-sm md:text-lg min-w-fit sm:w-96'>{props.data.slices[0]?.primary.description}</h2>
            <h3 className='text-black/50'>{props.data.slices[0]?.primary.publish_date}</h3>
        </Link>
    )
}

export default InsightCard