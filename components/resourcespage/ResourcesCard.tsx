import React from 'react'
import Arrow from '@/public/icon/arrow.svg'

interface cardProps {
    title: string,
    options: {
        title:string,
        href:string
    }[]
}

const ResourcesCard = ({ title, options }: cardProps) => {
    return (
        <div className='flex flex-col gap-2 rounded-xl overflow-hidden w-[18rem] lg:w-[24rem] mb-10 shadow-allsideSmall '>
            <div className='h-5 bg-primary_blue'></div>
            <div className='px-6 py-5 space-y-6'>
                <h1 className='font-sfpd-semibold text-lg'>{title}</h1>
                <div className='flex flex-col text-primary_blue gap-4'>
                    {
                        options.map((item, idx) => (
                            <a href={item.href} key={idx} className='flex justify-between items-center group rounded-lg py-1'>
                                <h1>{item.title}</h1>
                                <Arrow className='stroke-primary_blue rotate-90 group-hover:translate-x-2 duration-300'/>
                            </a>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default ResourcesCard