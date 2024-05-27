'use client'
import ParenthesesLogo from '@/public/logo/ParenthesesLogo.svg'
import React, { useState } from 'react'
import DropDownArrow from '@/public/svgs/dropdownArrow.svg'
import Link from 'next/link'
import SecondaryButton from '../buttons/SecondaryButton'


const navElementMembers = [
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
    },
    {
        title: 'Resources',
        haveChildren: true,
        children: [
            {
                subtitle: "Community",
                href: "/community",
            },
            {
                subtitle: "Creative Tools",
                href: "/creativetools"
            },
            {
                subtitle: "Development Tools",
                href: "/developmenttools"
            },
            {
                subtitle: "Headhunting Service",
                href: "/headhuntingtools"
            },
        ]
    },
    {
        title: 'Case Studies',
        href: '/casestudis',
        haveChildren: false,
    },
    {
        title: 'Insights',
        href: '/insights',
        haveChildren: false,
    },
    {
        title: 'Partners',
        href: '/partners',
        haveChildren: false,
    },


]

const NavBar: React.FC = () => {

    const [isNavOpened, setIsnavOpened] = useState(1000);
    const handleClick = (idx: number) => {
        if (idx !== isNavOpened) {
            setIsnavOpened(idx)
            return;
        }
        setIsnavOpened(100);
    }

    const buttonFunction = () => {

    }

    return (
        <section className='fixed top-8 w-full justify-center px-[3.5%] hidden xl:flex'>
            <div className='bg-white/60 backdrop-blur-lg h-fit w-full flex rounded-full border-2 border-primary_blue gap justify-between px-5 items-center'>
                <Link href={'/'}>
                    <ParenthesesLogo />
                </Link>
                <div className='duration-500 flex gap-9'>
                    {
                        navElementMembers.map((item, idx) => {
                            return (
                                <div key={idx} className='duration-500 relative cursor-pointer select-none'>
                                    {
                                        !item.haveChildren ?
                                            <Link
                                                onClick={() => handleClick(idx)}
                                                href={item.href ? item.href : "/"}
                                                className={`${isNavOpened === idx && " text-primary_blue "} flex items-center text-gray-600 hover:text-primary_blue duration-300 group`}>
                                                {item.title}
                                                {item.haveChildren &&
                                                    <DropDownArrow className={`${isNavOpened === idx ? " rotate-180 stroke-primary_blue" : " rotate-0 "} duration-300 stroke-gray-600 group-hover:stroke-primary_blue`} />
                                                }
                                            </Link>
                                            :
                                            <h2
                                                onClick={() => handleClick(idx)}
                                                className={`${isNavOpened === idx && " text-primary_blue "} flex items-center text-gray-600 hover:text-primary_blue duration-300 group`}>
                                                {item.title}
                                                {item.haveChildren &&
                                                    <DropDownArrow className={`${isNavOpened === idx ? " rotate-180 stroke-primary_blue" : " rotate-0 "} duration-300 stroke-gray-600 group-hover:stroke-primary_blue`} />
                                                }
                                            </h2>

                                    }
                                    {
                                        item.haveChildren &&
                                        <div className={`${isNavOpened === idx ? "flex" : "hidden"} absolute -bottom-8 -left-[90%]`}>
                                            <div className='relative -translate-x-[50%]'>

                                                <div className='flex flex-col gap-2 absolute bg-white px-5 py-4 drop-shadow-lg rounded-md w-56'>

                                                    {item.haveChildren && item.children?.map((child, childIdx) => (
                                                        <Link key={childIdx} href={child.href} className='flex items-center text-nowrap gap-4 text-gray-500 hover:text-primary_blue duration-300 group'>
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
                <SecondaryButton title='LET&apos;S TALK' handleClick={buttonFunction} />
            </div>
        </section>
    )
}


export default NavBar;