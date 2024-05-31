import React from 'react'
import TimeLineCard from './TimeLineCard'
import TimeLineCardMobile from './TimeLineCardMobile'

const history = [
    {
        id: 1,
        status: "Started",
        title: "A bubble Agency",
        projects: "16 Projects",
        year: "2021",
    },
    {
        id: 2,
        status: "Expansion",
        title: "Fullstack app and web development",
        projects: "5 Journeys",
        year: "2022",
    },
    {
        id: 3,
        status: "Launched",
        title: "Pakriti AI",
        projects: "Own Product",
        year: "2023",
    },
    {
        id: 4,
        status: "Launched",
        title: "Growth Products for ecommerce companies",
        projects: "Own Product",
        year: "2024",
    },

]

const OurHistory = () => {
    return (
        <section className='min-h-[100svh] flex flex-col items-center pt-36 pb-96 text-center gap-32 lg:gap-48'>
            <div className='space-y-10 '>
                <h1 className='text-[3.4vmax] font-sfpd-bold'>Our Journey</h1>
                <h2 className='text-[1.6rem] text-black/70 font-sfpd-light tracking-wide'>The journey of Parentheses till now</h2>
            </div>
            <div className='flex lg:flex-row flex-col lg:w-[75%] justify-between relative h-[40rem] lg:h-fit'>
                <div className='w-full absolute top-1/2 -translate-y-[50%] left-0 border-dashed border border-primary_blue/60 group hidden lg:flex'></div>
                <div className='w-fit absolute top-0 left-[50%] border-dashed border-l border-gray-500 group lg:hidden flex min-h-[40rem]'></div>
                {
                    history.map((story, idx) => (
                        <React.Fragment key={idx}>
                            <TimeLineCard key={idx} props={story} className="hidden lg:block" />
                            <TimeLineCardMobile key={idx} props={story} className='lg:hidden'/>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}

export default OurHistory