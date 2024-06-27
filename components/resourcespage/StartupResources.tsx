import React from 'react'
import OneBlueWordHeading from '../OneBlueWordHeading';
import ResourcesCard from './ResourcesCard';

const resources = [
    {
        title: "RAISING CAPITAL",
        options: [
            {
                title: "YC Safe",
                href: "/"
            },
            {
                title: "Series Seed",
                href: "/"
            },
           
        ]
    },
    {
        title: "RAISING CAPITAL",
        options: [
            {
                title: "YC Safe",
                href: "/"
            },
            {
                title: "Series Seed",
                href: "/"
            },
            {
                title: "Tearm Sheet Grader",
                href: "/"
            },
        ]
    },
    {
        title: "RAISING CAPITAL",
        options: [
            {
                title: "YC Safe",
                href: "/"
            },
           
        ]
    },
    {
        title: "RAISING CAPITAL",
        options: [
            {
                title: "YC Safe",
                href: "/"
            },
            {
                title: "Series Seed",
                href: "/"
            },
            {
                title: "Tearm Sheet Grader",
                href: "/"
            },
        ]
    },
    {
        title: "RAISING CAPITAL",
        options: [
            {
                title: "YC Safe",
                href: "/"
            },
            {
                title: "Series Seed",
                href: "/"
            },
            {
                title: "Tearm Sheet Grader",
                href: "/"
            },
        ]
    },
    {
        title: "RAISING CAPITAL",
        options: [
            {
                title: "YC Safe",
                href: "/"
            },
            {
                title: "Series Seed",
                href: "/"
            },
            {
                title: "Tearm Sheet Grader",
                href: "/"
            },
        ]
    },
]

const StartupResources = () => {
    return (
        <section className='min-w-full min-h-svh pt-16 px-[7%]'>
            <OneBlueWordHeading heading='Startup Resources' wordNum={1} />
            <h1 className='text-lg text-gray-400'>Let&apos;s build the right foundation for yours.</h1>
            <div className='flex justify-center w-full py-16'>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-12'>
                    {
                        resources.map((item, idx) => (
                            <ResourcesCard key={idx} {...item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default StartupResources;
