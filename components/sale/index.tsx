import React from 'react'

interface props {
    bg: string,
    className?: string,
}

const Sale = ({ ...props }: props) => {
    return (
        <div className={`${" "+props.className+" "} ${props.bg === 'white' ? " bg-white" : " bg-primary_blue text-white"} w-full  text-sm font-sfpd-regular flex gap-4 items-center justify-center py-2 absolute z-[100] text-black`}>
            <h1>
                Limited Time Offer: May Sale
            </h1>
            <button className={`rounded-full px-3 py-[0.375rem]  ${props.bg==='white'?" bg-primary_blue/20 text-primary_blue ":" bg-white/20 text-white"} cursor-pointer`}>Claim Now</button>
        </div>
    )
}

export default Sale