import React from 'react'
import OneBlueWordHeading from '../OneBlueWordHeading'
import Image from 'next/image'
import Location from '@/public/svgs/location.svg'
import Phone from '@/public/svgs/phone.svg'

const offices = [
    {
        location: "140L, 5th Main Rd, Sector 6, HSR Layout, Bengaluru, Karnataka 560102, India",
        ph: "+91 8524896654"
    },
    {
        location: "116/C, N.S. Sarani, Halisahar, North 24 Parganas, Kolkata, WB 743134",
        ph: "+91 8524896654"
    },
    {
        location: "266 Washington Ct, Sebastopol, CA, United States, 95472",
        ph: "+91 8524896654"
    },
    {
        location: "Apt #508, 1101 Rue Saint-Urbain, Montreal, QC, H2Z 1K8",
        ph: "+91 8524896654"
    },
]

const OurOffices = () => {
    return (
        <div className='flex flex-col items-center min-h-screen py-36 px-[4%] gap-20 text-black/60 text-sm sm:text-base'>
            <OneBlueWordHeading heading='Out Offices' wordNum={2} />
            <Image src={'/raster/Map.webp'} width={1231} height={730} aria-label='Our all offices marked on the world map.' alt='offices on map'></Image>
            <div className='flex flex-wrap gap-12 justify-center w-[97%]'>
                {
                    offices.map((item, idx) => (
                        <Card key={idx} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

export const Card = ({ location, ph }: { location: string, ph: string }) => (
    <div className='rounded-2xl shadow-allside px-8 py-5 flex flex-col gap-3 bg-white sm:w-[25rem]'>
        <div className='flex gap-2 items-center'>
            <Location className='' />
            <h1>{location}</h1>
        </div>
        <div className='flex gap-2 items-center'>
            <Phone className='stroke-primary_blue fill-primary_blue' />
            <h1>{ph}</h1>
        </div>
    </div>
)

export default OurOffices