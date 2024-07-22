import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SecondaryButton from '../buttons/SecondaryButton'
import { Url } from 'url'

interface cardProp {
    img: string,
    designation: string,
    userName: string,
}
const PartnerCard = (data:string[]) => {
  return (
    <div className='w-[93%] sm:w-[20rem] border border-gray-400 bg-gray-100 rounded-[2rem] py-10 items-center flex flex-col justify-center gap-6 text-lg duration-300 mt-8 text-center px-4'>
            <Image src={'/raster/demoUserLogo.svg'} width={140} height={140} alt='core member' className='hover:saturate-100 saturate-0 duration-300'></Image>
            <div className='flex flex-col gap-2'>
                <h1 className='text-primary_blue text-lg'>{data[0]}</h1>
                <div className=' flex flex-col items-center'>
                    <h1 className='text-xl font-sfpd-semibold'>{data[1]}</h1>
                </div>
            </div>
            <SecondaryButton title='Get in touch'/>
        </div>
  )
}

export default PartnerCard