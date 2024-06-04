import React from 'react'
import BlockImageDark from '@/public/svgs/blockImageDark.svg'
import BlockImageLight from '@/public/svgs/blockImageLight.svg'

interface cardProp {
    type:string,
    title: string,
    color?:string
}

const InsightHeroCard = ({...props}:cardProp) => {
  return (
    <div className={`relative rounded-2xl  ${props.color==='blue' && "bg-primary_blue"} px-6 py-4 w-[85%] h-72 overflow-hidden justify-center flex flex-col`}>
        <h2 className='text-white/50'>{props.type}</h2>
        <h1 className='text-white text-[4vmax]'>{props.title}</h1>
        <BlockImageDark className={`absolute w-[70%] -right-10 bottom-0 ${props.color==='blue'? "flex" : "hidden"}`}/>
        <BlockImageLight className={`absolute w-[70%] right-0 bottom-0 ${props.color==='white'?"flex":"hidden"}`}/>
    </div>
  )
}

export default InsightHeroCard