import React from 'react'
import Triangle from '@/public/svgs/triangle.svg'


interface props {
    props:
    {   id:number,
        status: string,
        title: string,
        projects: string,
        year: string,
    },
    className:string
}

const TimeLineCard = ({ props,className }: props) => {
    return (
        <div className={` ${className} relative rounded-full`}>
            <div className={`absolute -z-[1] p-4 ${props.id===4?'bg-blue-300':"bg-black/10"} rounded-full top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] ${props.id===4 && "animate-pulse"} origin-center`}></div>
            <div className={`p-[0.35rem] ${props.id===4?"bg-primary_blue":"bg-black"}  rounded-full `}></div>
            <div className={` ${props.id===4 && "text-primary_blue"} absolute bottom-0 -translate-x-[30%] -translate-y-10 `}>{props.year}</div>

            <div className='absolute left-[50%] -translate-x-[50%] translate-y-14 flex flex-col items-center justify-center'>
                <div className={`relative px-10 p-8 ${props.id===4?"bg-blue-100":"bg-bg_gray"}   rounded-xl flex flex-col gap-6`}>
                    <Triangle className={` ${props.id!==4?"fill-bg_gray":"fill-blue-100"} absolute -translate-y-[100%] left-[50%] -translate-x-[50%] top-1 `} />
                    <h1 className='text-black/50 '>{props.status}</h1>
                    <h1 className='min-w-32'>{props.title}</h1>
                    <h1 className='text-xl text-primary_blue'>{props.projects}</h1>
                </div>
            </div>
        </div>
    )
}

export default TimeLineCard