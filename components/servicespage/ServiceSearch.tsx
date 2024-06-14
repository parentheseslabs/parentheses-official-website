import React from 'react'
import OneBlueWordHeading from '../OneBlueWordHeading'
import Contact from '../aboutpage/Contact'

import ServiceCard from './ServiceCard'

const color = ["blue", "dark"]
const images =[
    "/cardpatterns/pattern1.png",
    "/cardpatterns/pattern2.png",
    "/cardpatterns/pattern3.png",
    "/cardpatterns/pattern4.png",
]

const data = [
    {
        title: "Ideation",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Ideation",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Ideation",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Ideation",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Ideation",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Ideation",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
]


const ServiceSearch = () => {
    return (
        <section className='min-w-full min-h-[100svh] py-28 flex flex-col items-center gap-6 md:gap-12'>
            <OneBlueWordHeading heading='Services For You' wordNum={1} />
            <h1 className='text-base md:text-2xl'>Tailored to your needs & requirements</h1>
            <input type="text" placeholder='Search what you are looking for' className=' w-[20rem] md:w-[30rem] lg:w-[40rem] py-4 px-5 border border-gray-300 rounded-full bg-gray-100 placeholder:text-center text-sm sm:text-base md:text-lg' />
            <div className='flex justify-center flex-wrap w-[70%] gap-8 mt-16'>

                {
                    data.map((item, idx) => {
                        const bg = {
                            backgroundColor: color[idx % 2]
                        }
                        const image ={
                            img : images[idx%4]
                        }
                        return <ServiceCard key={idx} props={item} Color={bg} images={image}/>
                    })
                }
            </div>
            <div className='w-[20rem] md:w-[30rem] lg:w-[40rem] border-t border-gray-200 translate-y-10'></div>
            <Contact />
        </section>
    )
}

export default ServiceSearch