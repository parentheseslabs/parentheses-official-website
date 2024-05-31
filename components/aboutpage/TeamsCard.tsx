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

const TeamsCard = ({ img = "/raster/demoUserLogo.svg", designation = "member", userName = "", edu = "", linkedin = "" }: cardProp) => {
    return (
        <div className='w-[23rem] border border-gray-400 bg-gray-100 rounded-[2rem] py-10 items-center flex flex-col justify-center group gap-6 text-lg hover:-translate-y-8 duration-300 mt-8'>
            <Image src={img} width={197} height={197} alt='core member' className='group-hover:saturate-100 saturate-0 duration-300'></Image>
            <div className='flex flex-col gap-2'>
                <h1 className='text-primary_blue'>{designation}</h1>
                <div className=' flex flex-col items-center'>
                    <h1 className='text-3xl font-sfpd-bold'>{userName}</h1>
                    <h1 className='text-text_black/50'>{edu}</h1>
                </div>
            </div>
            <Link href={linkedin}>
                <Linkedin className='translate-y-3'/>
            </Link>
        </div>
    )
}

export default TeamsCard