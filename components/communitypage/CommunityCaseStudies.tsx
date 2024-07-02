"use client"
import React, { useState } from 'react'
import OneBlueWordHeading from '../OneBlueWordHeading'
import DownArrow from "@/public/icon/down-arrow.svg"
import BlogSection from './BlogSection'
import SecondaryButton from '../buttons/SecondaryButton'

const type = ["All Startups", "Eaarly Stage", "Funded", "Established"]
const domain = ["All Domain", "Tech", "Design", "AI Tech", "FMCG", "Retail"]
const popularity = ["Popular", "Trending", "Recent"]


const CommunityCaseStudies = () => {
    const [selected, setSelected] = useState(9999)
    const [Type, setType] = useState("All Startups")
    const [Domain, setDomain] = useState("All Domain")
    const [Popularity, setPopularity] = useState("Popular")

    return (
        <div className='py-20 flex flex-col items-center gap-8'>
            <div className='flex justify-between w-full px-[7%] items-center md:flex-row flex-col gap-6'>
                <OneBlueWordHeading heading='Discover Case Studies' wordNum={1} />
                <input type="text" placeholder='Search' className='border border-gray-200 rounded-full w-60 h-fit py-1 px-2 md:py-3 md:px-4 outline-none' />
            </div>
            <div className='flex justify-between w-full px-[7%] items-center'>
                <div className='flex md:gap-8'>
                    <div
                        onClick={() => selected===1?setSelected(9999):setSelected(1)}
                        className='flex gap-2 items-center relative justify-center cursor-pointer w-28'>
                        <h1 className='text-sm md:text-base text-neutral-500'>{Type}</h1>
                        <DownArrow className='w-4 h-fit fill-neutral-500' />
                        <div className={`absolute border bg-white shadow-allsideSmall border-gray-200 rounded-lg px-1 py-2 w-fit text-nowrap top-full left-1/2 -translate-x-1/2 z-10 ${selected===1?"scale-y-100":"scale-y-0"} duration-300 origin-top `}>
                            {
                                type.map((item,idx)=>(
                                    <h1 key={idx} 
                                    onClick={()=>setType(item)}
                                    className='px-3 py-2 hover:bg-neutral-200 duration-200 rounded-md'>{item}</h1>
                                ))
                            }
                        </div>

                    </div>
                    <div
                        onClick={() => selected===2?setSelected(9999):setSelected(2)}
                        className='flex gap-2 items-center relative justify-center cursor-pointer w-28'>
                        <h1 className='text-sm md:text-base text-neutral-500'>{Domain}</h1>
                        <DownArrow className='w-4 h-fit fill-neutral-500' />
                        <div className={`absolute border bg-white shadow-allsideSmall border-gray-200 rounded-lg px-1 py-2 w-fit text-nowrap top-full left-1/2 -translate-x-1/2 z-10 ${selected===2?"scale-y-100":"scale-y-0"} duration-300 origin-top`}>
                            {
                                domain.map((item,idx)=>(
                                    <h1 key={idx} 
                                    onClick={()=>setDomain(item)}
                                    className='px-3 py-2 hover:bg-neutral-200 duration-200 rounded-md'>{item}</h1>
                                ))
                            }
                        </div>

                    </div>
                    <div
                        onClick={() => selected===3?setSelected(9999):setSelected(3)}
                        className='flex gap-2 items-center relative justify-center cursor-pointer w-28'>
                        <h1 className='text-sm md:text-base text-neutral-500'>{Popularity}</h1>
                        <DownArrow className='w-4 h-fit fill-neutral-500' />
                        <div className={`absolute border bg-white shadow-allsideSmall border-gray-200 rounded-lg px-1 py-2 w-fit text-nowrap top-full left-1/2 -translate-x-1/2 z-10 ${selected===3?"scale-y-100":"scale-y-0"} duration-300 origin-top`}>
                            {
                                popularity.map((item,idx)=>(
                                    <h1 key={idx} 
                                    onClick={()=>setPopularity(item)}
                                    className='px-3 py-2 hover:bg-neutral-200 duration-200 rounded-md'>{item}</h1>
                                ))
                            }
                        </div>

                    </div>
                </div>

            </div>
            <BlogSection/>
            <SecondaryButton title='Load More'/>
        </div>
    )
}

export default CommunityCaseStudies