import Image from 'next/image'
import React from 'react'
import BlueTick from "@/public/icon/bluetick.svg"

const data = [
    {
        title: "Fixed Scope",
        img:"/svgs/fixedscope.svg",
        benefits: [
            "Deliverables scoped at the beginning",
            "Specs/feature oriented delivery",
            "Pay as you go in milestones",
            "Budget friendly, no cost overruns",
            "Best for launching MVPs",
            "Limited number of corrections and customization available"
        ]
    },
    {
        title: "Subscription",
        img:"/svgs/subscription.svg",
        benefits: [
            "Fixed per month billing for a dedicated team",
            "Agile, outcome-oriented development",
            "Best for pre-PMF, growth stage",
            "Endless customizations",
            "Customer decides the velocity of development",
            "Pause for a month or 2 if needed"
        ]
    }
]

const EngagementModel = () => {
    return (
        <section className='flex flex-col items-center py-28 gap-16'>
            <h1 className='text-[3vmax] font-sfpd-bold'>Engagement Model</h1>
            <div className='flex gap-16 lg:flex-row flex-col'>
                {
                    data.map((item, idx) => (
                        <Card key={idx} {...item} />
                    ))
                }
            </div>
        </section>
    )
}


export const Card = ({ ...props }: { title: string,img:string, benefits: string[] }) => {
    return (

        <div className='border border-neutral-200 flex flex-col rounded-3xl bg-neutral-100 w-[20rem] xs:w-[22rem] sm:w-[25rem] lg:w-[28rem] px-8 py-12 items-center gap-6'>
            <Image src={props.img} width={107} height={107} alt='subs model'></Image>
            <h1 className='text-xl font-sfpd-semibold'>{props.title}</h1>
            <div className='w-fit space-y-4'>
                {
                    props.benefits.map((item, idx) => (
                        <div key={idx} className='flex gap-4 max-w-[24rem] items-center'>
                            <BlueTick className='w-[2.8rem]'/>
                            <h1 className='max-w-[18rem]'>{item}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default EngagementModel