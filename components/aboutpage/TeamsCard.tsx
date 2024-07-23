import React from 'react'
import Linkedin from '@/public/svgs/linkedin.svg'
import Image from 'next/image'
import Link from 'next/link'

interface cardProp {
    img: string,
    designation: string,
    userName: string,
    edu?: string,
    linkedin?: string

}

const TeamsCard = (data:string[]) => {
    return (
        <div className='w-[93%] sm:w-[23rem] border border-gray-400 bg-gray-100 rounded-[2rem] py-10 items-center flex flex-col justify-center group gap-6 text-lg hover:-translate-y-8 duration-300 mt-8 text-center'>
            <Image src={'/raster/demoUserLogo.svg'} width={140} height={140} alt='core member' className='group-hover:saturate-100 saturate-0 duration-300'></Image>
            <div className='flex flex-col gap-2 items-center'>
                <h1 className='text-primary_blue text-lg'>{data[0]}</h1>
                <div className=' flex flex-col items-center'>
                    <h1 className='text-xl font-sfpd-semibold'>{data[1]}</h1>
                </div>
            </div>
            <Link href={data[2]?data[2]:""}>
                <Linkedin className='translate-y-3'/>
            </Link>
        </div>
    )
}

export default TeamsCard