import React from 'react'
import TimeLineCard from './TimeLineCard'


const history = [
    {
        id:1,
        status: "Started",
        title: "A bubble Agency",
        projects: "16 Projects",
        year: "2021",
    },
    {   
        id:2,
        status: "Expansion",
        title: "Fullstack app and web development",
        projects: "5 Journeys",
        year: "2022",
    },
    {
        id:3,
        status: "Launched",
        title: "Pakriti AI",
        projects: "Own Product",
        year: "2023",
    },
    {
        id:4,
        status: "Launched",
        title: "Growth Products for ecommerce companies",
        projects: "Own Product",
        year: "2024",
    },

]

const OurHistory = () => {
    return (
        <section className='min-h-[100svh] flex flex-col items-center pt-36 text-center gap-48'>
            <div className='space-y-10 '>
                <h1 className='text-[3.4vmax] font-sfpd-bold'>Our History</h1>
                <h2 className='text-[1.6rem] text-black/70 font-sfpd-light tracking-wide'>The founding history of Parentheses</h2>
            </div>
            <div className='flex w-[80%] justify-between relative'>
                <div className='w-full absolute top-1/2 left-0 border-dashed border border-gray-500 group'></div>
                {
                    history.map((story,idx)=>(
                        <TimeLineCard key={idx} props={story}/>
                    ))
                }
            </div>
        </section>
    )
}

export default OurHistory