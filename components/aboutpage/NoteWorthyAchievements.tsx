import React from 'react'
import BlockImageDark from '@/public/svgs/blockImageDark.svg'
import Image from 'next/image'
import AchievementLogo from '@/public/logo/achievementLogo.svg'
import Badge from '@/public/logo/badge.svg'

interface cardProp {
    title: string,
    year: string,
    logo: string
}

const awards = [
    {
        title: "Wharton India Economics Forum Finalist among 100 startups",
        year: "2023",
        logo: "/logo/WhartonIndia.svg"
    },
    {
        title: "Microsoft Founders Hub",
        year: "2023",
        logo: "/logo/foundershub.svg"
    },
    {
        title: "Big Commerce Big Design Awards",
        year: "2022",
        logo: "/logo/bigcommerce.svg"
    }
]

const NoteWorthyAchievements = () => {
    return (
        <section id='awards' className='w-full min-h-screen flex overflow-hidden pb-40'>
            <div className='bg-primary_blue w-full flex justify-center items-center relative text-white flex-col gap-14 lg:gap-20 py-28 px-20 text-center'>
                <Image src={'/background/cardGrid.png'} width={200} height={200} alt='grid' className='w-[75%] lg:w-[60%] absolute -z-0 top-20 lg:top-[50%] lg:-translate-y-[50%] flex opacity-50'></Image>
                <BlockImageDark className='absolute -left-10 -top-10 lg:-left-20 lg:-top-40 w-[15vmax] md:w-[30vmax] lg:w-[35vmax] z-0 rotate-180 opacity-80' />
                <h1 className='text-[3.2vmax] font-sfpd-bold drop-shadow-lg'>NOTEWORTHY ACHIEVEMENTS</h1>
                <AchievementLogo />
                <div className='flex gap-6 flex-wrap justify-center'>

                    {
                        awards.map((item, idx) => (
                            <Card key={idx} {...item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

const Card = ({ ...props }: cardProp) => {
    return (
        <div className='bg-card_dark_blue w-[20rem] relative rounded-lg flex flex-col items-center justify-center py-8 px-6 gap-8'>
            <Image src={props.logo} width={200} height={60} alt='awards'></Image>
            <div className='flex italic font-sfpd-semibold text-base md:text-lg'>
                <Badge/>
                #finalist
            </div>
            <h1 className=' text-lg md:text-2xl italic'>
                {props.title}
            </h1>
            <h1 className='text-white/70'>{props.year}</h1>
        </div>
    )
}

export default NoteWorthyAchievements