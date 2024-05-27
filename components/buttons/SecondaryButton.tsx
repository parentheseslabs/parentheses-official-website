import React from 'react'
import DropDownArrow from '@/public/svgs/dropdownArrow.svg'

interface props
{
    title:string,
    handleClick : ()=>void
}

const SecondaryButton = ({...props}:props) => {
  return (
    <button className='pl-7 pr-9 h-fit py-2 rounded-full border border-primary_blue text-primary_blue hover relative group overflow-hidden flex items-center gap-2 hover:text-white duration-500'>
        {props.title}
        <div className='bg-primary_blue rounded-full p-[0.18rem] absolute -z-10 right-5 group-hover:scale-[50] duration-500'></div>
        <DropDownArrow className='group-hover:stroke-white absolute -z-10 right-3 -rotate-90 stroke-2'/>
    </button>
  )
}

export default SecondaryButton