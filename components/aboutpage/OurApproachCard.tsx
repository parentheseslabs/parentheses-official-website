
import React from 'react'



interface cardProp {
    icon: React.ReactElement,
    title: string,
    desc: string
}

const OurApproachCard = ({ ...prop }: cardProp) => {
    return (
        <div className=' flex flex-col items-center w-[20rem]  gap-6 group'>
            <div className='rounded-full bg-highlight p-8 w-fit group-hover:bg-primary_blue duration-300'>
                {prop.icon}
            </div>
            <h1 className='font-sfpd-bold text-[2rem]'>{prop.title}</h1>
            <h1 className='text-text_black/50 text-xl'>{prop.desc}</h1>
        </div>
    )
}

export default OurApproachCard