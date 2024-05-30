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

const TimeLineCardMobile = ({props,className}:props) => {
  return (
    <div className={`${className} relative`}>
        <div className={`absolute -z-[1] p-4 ${props.id===4?'bg-blue-300':"bg-black/10"} rounded-full top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] ${props.id===4 && "animate-pulse"} origin-center`}></div>
        <div className={`p-[0.35rem] ${props.id===4?"bg-primary_blue":"bg-black/80"}  rounded-full `}></div>
        <div className={` ${props.id===4 && "text-primary_blue"} absolute top-[50%] -translate-y-[50%] ${props.id%2===0?'translate-x-10':'-translate-x-16'} `}>{props.year}</div>
        <div className={`absolute -top-[0.87rem] ${props.id%2===0?'-translate-x-[110%] sm:-translate-x-[130%]':'translate-x-7 sm:translate-x-14'} flex flex-col items-center justify-center`}>
                <div className={`relative px-3 py-5 sm:px-8 sm:py-7 ${props.id===4?"bg-blue-100":"bg-bg_gray"}   rounded-xl flex flex-col gap-6`}>
                    <Triangle className={` ${props.id!==4?"fill-bg_gray":"fill-blue-100"}  absolute ${props.id%2===0?'-right-7 rotate-90':'-left-0 -rotate-90'} -translate-y-[50%]  top-5 -translate-x-[50%]  `} />
                    <h1 className='text-black/50 '>{props.status}</h1>
                    <h1 className='min-w-32'>{props.title}</h1>
                    <h1 className='text-xl text-primary_blue'>{props.projects}</h1>
                </div>
            </div>
        <div className=''></div>

    </div>
  )
}

export default TimeLineCardMobile