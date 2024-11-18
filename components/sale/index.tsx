'use client'
import React, { useEffect } from 'react'

interface props {
    bg: string,
    className?: string,
}

const Sale = ({ ...props }: props) => {
    
    const getTwoMonthsAhead = () => {
        const today = new Date();
        const twoMonthsAhead = new Date(today.getFullYear(), today.getMonth() + 2);
        return twoMonthsAhead.toLocaleString("default", { month: "long" });
      };
    
    return (
        <div className={`${" "+props.className+" "} ${props.bg === 'white' ? " bg-white" : " bg-gradient-to-r from-primary_blue/90 to-primary_blue text-white"} w-full font-sfpd-regular flex gap-4 items-center justify-center py-1 absolute z-[200] text-black top-0 tracking-widest`}>
            <h1>
                Accepting projects for : <span className='font-sfpd-semibold tracking-wider'>{getTwoMonthsAhead()}</span>
            </h1>
        </div>
    )
}

export default Sale