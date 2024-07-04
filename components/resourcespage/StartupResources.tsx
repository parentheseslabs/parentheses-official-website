import React from 'react'
import OneBlueWordHeading from '../OneBlueWordHeading';
import ResourcesCard from './ResourcesCard';

const resources = [
    {
        title: "RAISING CAPITAL",
        options: [
            {
                title: "YC Safe",
                href: "https://www.ycombinator.com/documents/"
            },
            {
                title: "Series Seed",
                href: "https://www.seriesseed.com/"
            },
            {
                title: "Term Sheet Grader",
                href: "https://www.pillar.vc/founder-support/term-sheet-grader/"
            },
           
        ]
    },
    {
        title: "LEGAL",
        options: [
            {
                title: "Carta",
                href: "http://www.carta.com/"
            },
            {
                title: "Clerky",
                href: "https://www.clerky.com/"
            },
            {
                title: "Avodocs",
                href: "https://www.avodocs.com/#documents"
            },
        ]
    },
    {
        title: "FINANCE",
        options: [
            {
                title: "Shasta SaaS Operating Model",
                href: "https://medium.com/@kenndanielso/shasta-saas-operating-model-7974d49a0c92"
            },
           
        ]
    },
    {
        title: "HR",
        options: [
            {
                title: "Work Rules",
                href: "https://www.workrules.net/"
            },
            {
                title: "OKR",
                href: "https://www.whatmatters.com/"
            },
            {
                title: "FlexJobs | Remote.co",
                href: "https://www.flexjobs.com/"
            },
        ]
    },
    {
        title: "M&A",
        options: [
            {
                title: "Atlassian Open Term Sheet",
                href: "https://www.atlassian.com/blog/technology/atlassian-term-sheet"
            },
        ]
    },
    {
        title: "BOOKS",
        options: [
            {
                title: "Start Up J-Curve",
                href: "http://www.howardlove.com/startup-jcurve/"
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
