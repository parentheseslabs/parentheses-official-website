import React from 'react'
import Image from 'next/image'


const values = [
    {
        title: "Ethics",
        img: '/raster/ethics.svg'
    },
    {
        title: "Work",
        img: '/raster/work.svg'
    },
    {
        title: "Culture",
        img: '/raster/culture.svg'
    },
]

const OurValues = () => {
    return (
        <div className='flex justify-center items-center py-28 min-h-screen'>
            <div className='bg-primary_blue w-[93%]  rounded-2xl lg:rounded-[2rem] flex justify-center items-center relative text-white flex-col gap-14 lg:gap-20 py-28 px-20 text-center'>
                <Image src={'/background/cardGrid.png'} width={200} height={200} alt='grid' className='w-[60%] absolute -z-0 top-[50%] -translate-y-[50%] hidden md:flex opacity-50'></Image>
                <h1 className='font-sfpd-bold text-3xl sm:text-4xl lg:text-5xl translate-y-4 drop-shadow-xl'>Our Values</h1>
                <h2 className=' text-base sm:text-lg lg:text-2xl drop-shadow-xl'>Our Core “Feed On” Prinicples</h2>
                <div className='flex gap-14 lg:gap-32 sm:flex-row flex-col'>
                    {
                        values.map((item, idx) =>
                        (
                            <div key={idx} className=' flex flex-col items-center gap-10 w-40 lg:w-48 xl:w-64'>
                                <Image key={idx} src={item.img} width={368} height={368} alt='value' className='relative' />
                                <h1>{item.title}</h1>
                            </div>
                        )
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default OurValues