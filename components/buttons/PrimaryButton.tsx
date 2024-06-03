import React from 'react'
import DropDownArrow from '@/public/svgs/dropdownArrow.svg'

interface props
{
    title:string,
    handleClick ?: ()=>void,
    className?:string
}

const PrimaryButton = ({...props}:props) => 
{
  return (
    <button className={`${props.className} pl-8 pr-12 h-fit py-3 rounded-full border border-primary_blue  text-white hover relative group overflow-hidden flex items-center gap-2 hover:text-primary_blue duration-500 text-xs md:text-sm xl:text-[16px] z-0 bg-primary_blue active:scale-[.8]`}>
        {props.title}
        <div className='bg-white rounded-full p-[0.18rem] absolute -z-10 right-5 group-hover:scale-[70] duration-[400ms]'></div>
        <DropDownArrow className=' group-hover:stroke-primary_blue absolute -z-10 right-3 -rotate-90 stroke-2'/>
    </button>
  )
}

export default PrimaryButton