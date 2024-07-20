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
const PartnerCard = ({...props}:cardProp) => {
  return (
    <div className='w-[93%] sm:w-[23rem] border border-gray-400 bg-gray-100 rounded-[2rem] py-10 items-center flex flex-col justify-center group gap-6 text-lg hover:-translate-y-8 duration-300 mt-8'>
            <Image src={props.img} width={197} height={197} alt='core member' className='group-hover:saturate-100 saturate-0 duration-300'></Image>
            <div className='flex flex-col gap-2'>
                <h1 className='text-primary_blue'>{props.designation}</h1>
                <div className=' flex flex-col items-center'>
                    <h1 className='text-3xl font-sfpd-bold'>{props.userName}</h1>
                </div>
            </div>
            <SecondaryButton title='Get in touch'/>
            
        </div>
  )
}

export default PartnerCard