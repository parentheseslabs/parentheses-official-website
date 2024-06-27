import React from 'react'
import OneBlueWordHeading from '../OneBlueWordHeading'
import Image from 'next/image'

const data = [
    {
        title: "Development Tools",
        desc: "Creating an app for your business can get your product in front of new audiences.",
        tools: [
            {
                cardTitle: "Ruby",
                cardDesc: "Creating app for you.",
                img: "/raster/ruby.png"
            },
            {
                cardTitle: "Ruby",
                cardDesc: "Creating app for you.",
                img: "/raster/ruby.png"
            },
            {
                cardTitle: "Ruby",
                cardDesc: "Creating app for you.",
                img: "/raster/ruby.png"
            },
        ]
    },
    {
        title: "Development Tools",
        desc: "Creating an app for your business can get your product in front of new audiences.",
        tools: [
            {
                cardTitle: "Ruby",
                cardDesc: "Creating app for you.",
                img: "/raster/ruby.png"
            },
            {
                cardTitle: "Ruby",
                cardDesc: "Creating app for you.",
                img: "/raster/ruby.png"
            },
            {
                cardTitle: "Ruby",
                cardDesc: "Creating app for you.",
                img: "/raster/ruby.png"
            },
        ]
    },
]


interface descProps {
    title: string;
    desc: string;
    tools: {
        cardTitle: string;
        cardDesc: string;
        img: string;
    }[];
}

interface cardProp {
    cardTitle: string;
    cardDesc: string;
    img: string;
}


const Tools = () => {
    return (
        <section className=' flex justify-center px-[10%] flex-col py-20'>
            <div className='flex flex-col justify-center items-center text-center space-y-3'>
                <OneBlueWordHeading heading='Bring the tools together' wordNum={3} />
                <h2 className='text-black/60 text-xl'>One place for your core business tools.</h2>
            </div>
            <div className='divide-y-2 divide-gray-200'>

                {
                    data.map((item, idx) => (

                        <Description  key={idx} {...item} />
                    ))
                }
            </div>
        </section>
    )
}



const Description = ({ ...props }: descProps) => {
    return (
        <div className='flex py-20 items-center lg:flex-row lg:even:flex-row-reverse  flex-col gap-12 lg:gap-0 justify-between'>
            <div className='ml-10'>
                <h1 className='text-xl font-sfpd-semibold'>{props.title}</h1>
                <h1 className='text-black/60 sm:w-[70%] text-lg'>{props.desc}</h1>
            </div>
            <div className='lg:w-[70%] xl:w-[60%]'>
                <div className='grid grid-cols-2 gap-4 items-center'>
                    {
                        props.tools.map((tool, idx) => (
                            <Card key={idx} {...tool} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}


const Card = ({ ...props }: cardProp) => {
    return (
        <div className='rounded-2xl shadow-allsideSmall py-3 px-5 md:px-8 md:py-5 bg-white space-y-1 sm:space-y-2 "lg:w-[12rem]  xl:w-[16rem]" first:row-span-2 row-span-1 h-fit'>
            <Image src={props.img} width={59} height={51} alt='tool' className=''></Image>
            <h1 className='font-sfpd-semibold text-lg md:text-xl'>{props.cardTitle}</h1>
            <h2 className='text-black/60 md:text-lg'>{props.cardDesc}</h2>
        </div>
    )
}


export default Tools