'use client'
import React, { useEffect, useState } from 'react'
import ParenthesesLogo from '@/public/logo/ParenthesesLogo.svg'
import DropDownArrow from '@/public/svgs/dropdownArrow.svg'
import Link from 'next/link'


const navElements = [
    {
        title: 'About',
        haveChildren: true,
        children: [
            {
                subtitle: "About Us",
                href: "/aboutus",
            },
            {
                subtitle: "Team",
                href: "/team"
            },
            {
                subtitle: "Partners",
                href: "/partners"
            },
            {
                subtitle: "Career",
                href: "/careers"
            },
            {
                subtitle: "Awards",
                href: "/awards"
            },
            {
                subtitle: "Press",
                href: "/press"
            },
        ]
    },
    {
        title: 'Services',
        haveChildren: true,
        children: [
            {
                subtitle: "Ideation",
                href: "/ideation",
            },
            {
                subtitle: "Market Research",
                href: "/marketresearch"
            },
            {
                subtitle: "Brainstorming",
                href: "/brainstorming"
            },
            {
                subtitle: "Designing",
                href: "/designing"
            },
            {
                subtitle: "Branding",
                href: "/branding"
            },
            {
                subtitle: "Prototype",
                href: "/prototype"
            },
            {
                subtitle: "Development",
                href: "/development"
            },
        ]
    }
]

const NavBar = () => {
    const [isNavOpened, setIsnavOpened] = useState(false);
    useEffect(() => {

    }, [])

    return (
        <section className='fixed top-8 w-full flex justify-center px-[3.5%]'>
            <div className='bg-white/60 backdrop-blur-lg h-fit w-full flex rounded-full border-2 border-primary_blue gap justify-between px-5 items-center'>
                <ParenthesesLogo />
                <div className='duration-500 flex gap-9'>
                    {
                        navElements.map((item, idx) => {
                            return (
                                <div key={idx} className='duration-500 relative cursor-pointer select-none'>
                                    <h2
                                        onClick={() => setIsnavOpened(!isNavOpened)}
                                        className='flex items-center text-gray-600 hover:text-primary_blue duration-300 group'>
                                        {item.title}
                                        <DropDownArrow className={`${isNavOpened ? " rotate-180 " : " rotate-0 "} duration-300 stroke-gray-600 group-hover:stroke-primary_blue`} />
                                    </h2>
                                    {
                                        item.haveChildren &&
                                        <div className={`${isNavOpened ? "flex" : "hidden"} absolute -bottom-8 -left-[90%]`}>
                                            <div className='relative -translate-x-[50%]'>

                                                <div className='flex flex-col gap-2 absolute bg-white px-5 py-4 drop-shadow-lg rounded-md w-56'>

                                                    {item.children.map((child, idx) => (
                                                        <Link key={idx} href={child.href} className='flex items-center text-nowrap gap-4 text-gray-500 hover:text-primary_blue duration-300 group'>
                                                            <div className='bg-gray-400 duration-300 group-hover:bg-primary_blue p-[0.35rem] rounded-sm w-fit h-fit'></div>
                                                            {child.subtitle}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <button className='px-8 h-fit py-2 rounded-full border border-primary_blue text-primary_blue'>LET&apos;S TALK</button>
            </div>
        </section>
    )
}


export const NavElementsFunc: React.FC = () => {
    return (
        <div>

        </div>
    )
}

export default NavBar;