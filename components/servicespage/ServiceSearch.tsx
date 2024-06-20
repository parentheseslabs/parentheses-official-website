import React from 'react'
import OneBlueWordHeading from '../OneBlueWordHeading'
import Contact from '../aboutpage/Contact'

import ServiceCard from './ServiceCard'
import Link from 'next/link'

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
        href:"/services/ideation",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Brainstorming",
        href:"/services/brainstorming",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Market Research",
        href:"/services/market-research",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Development Overall",
        href:"/services/development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Branding",
        href:"/services/development/branding",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Designing",
        href:"/services/development/designing",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Prototyping",
        href:"/services/development/prototyping",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "MVP Development",
        href:"/services/development/mvp-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "App Development",
        href:"/services/development/app-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Android Development",
        href:"/services/development/android-app-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "iOS Development",
        href:"/services/development/ios-app-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Windows Development",
        href:"/services/development/windows-app-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "MacOS Development",
        href:"/services/development/macos-app-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "React Native Development",
        href:"/services/development/react-native-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Python Development",
        href:"/services/development/python-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "NextJS Development",
        href:"/services/development/nextjs-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "React Development",
        href:"/services/development/react-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Web Development",
        href:"/services/development/web-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "No Code Development ",
        href:"/services/development/no-code-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Bubble Development",
        href:"/services/development/bubble-no-code-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Stripe Development",
        href:"/services/development/stripe-connect-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Shopify Development",
        href:"/services/development/shopify-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Bigcommerce Development",
        href:"/services/development/bigcommerce-development",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Marketing Overall",
        href:"/services/marketing",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "SEO",
        href:"/services/marketing/seo",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "PPC",
        href:"/services/markerting/ppc",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Marketing Automation",
        href:"/services/marketing/automation",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
    {
        title: "Email Marketing",
        href:"/services/marketing/email-marketing",
        description: "Coming up with ideas that are backed up with extensive research.",
    },
]


const ServiceSearch = () => {
    return (
        <section className='min-w-full min-h-[100svh] py-28 flex flex-col items-center gap-6 md:gap-12'>
            <OneBlueWordHeading heading='Services For You' wordNum={1} />
            <h1 className='text-base md:text-2xl'>Tailored to your needs & requirements</h1>
            <input type="text" placeholder='Search what you are looking for' className=' w-[20rem] md:w-[30rem] lg:w-[40rem] py-4 px-5 border border-gray-300 rounded-full bg-gray-100 placeholder:text-center text-sm sm:text-base md:text-lg' />
            <div className='flex justify-center flex-wrap w-[70%] gap-16 mt-16'>

                {
                    data.map((item, idx) => {
                        
                        const bg = {
                            backgroundColor: color[idx % 2]
                        }
                        const image ={
                            img : images[idx%4]
                        }
                        return <Link key={idx} href={item.href}><ServiceCard props={item} Color={bg} images={image}/></Link>
                    })
                }
            </div>
            <div className='w-[20rem] md:w-[30rem] lg:w-[40rem] border-t border-gray-200 translate-y-10'></div>
            <Contact />
        </section>
    )
}

export default ServiceSearch