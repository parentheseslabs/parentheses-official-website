'use client'
import dynamic from 'next/dynamic'
import ParenthesesLogo from '@/public/logo/ParenthesesLogo.svg'
import React, { useState, useEffect } from 'react'
import DropDownArrow from '@/public/svgs/dropdownArrow.svg'
import Link from 'next/link'

const SecondaryButton = dynamic(() => import('../buttons/SecondaryButton'))
const MobileNav = dynamic(() => import('@/components/navbar/MobileNav'));

import MobileLogo from '@/public/logo/moblieLogo.svg'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import MobileDarkLogo from '@/public/logo/mobileDarkLogo.svg'
import navElementMembers from '@/public/navlinks/data'


const NavBar: React.FC = () => {
    const [isNavOpened, setIsnavOpened] = useState(1000);
    const [isHamOpened, setisHamOpened] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const [urlpath, setUrlPath] = useState("/")
    useEffect(() => {
        if (isHamOpened) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isHamOpened])
    useEffect(() => {
        if (urlpath !== pathname) {
            setIsnavOpened(1000);
            setisHamOpened(false);
        }
        setUrlPath(pathname);
    }, [pathname])

    const handleClick = (idx: number) => {
        if (idx !== isNavOpened) {
            setIsnavOpened(idx)
            return;
        }
        setIsnavOpened(100);
    }



    useEffect(() => {
        function handleScroll() {
            const scrollPos = window.scrollY;
            if (scrollPos > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <section id='nav' className={`fixed ${isScrolled ? "pt-2" : "pt-14"} w-full justify-center px-[3.5%] z-[100] duration-500`}>
            <div className={`${pathname === '/about' ? "lg:bg-white" : "lg:bg-white/50"} lg:backdrop-blur-lg h-fit w-full flex rounded-full lg:border-[1.5px] border-primary_blue gap justify-between px-5 items-center relative z-50`}>
                <Link href={'/'} aria-label='Go to home page'>
                    <ParenthesesLogo className='hidden lg:flex relative z-50' />
                    {
                        pathname === '/about' ?
                            <MobileDarkLogo className='flex lg:hidden drop-shadow-3xl ' />
                            :
                            <MobileLogo className='flex lg:hidden drop-shadow-3xl ' />
                    }
                </Link>
                <div className='duration-500 gap-9 hidden lg:flex'>
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
                                        <div className={`${isNavOpened === idx ? "scale-y-100" : "scale-y-0"} absolute -bottom-8 -left-[90%] duration-300`}>
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

                {/* Hamburger button*/}
                <div className='flex gap-4 items-center'>
                    <a href="/contactus">
                        <SecondaryButton title='LET&apos;S TALK' />
                    </a>
                    <div
                        onClick={() => setisHamOpened(!isHamOpened)}
                        className={` lg:hidden rounded-full relative size-11 flex flex-col gap-1 justify-center p-2 ${pathname !== '/about' && !isHamOpened && " bg-primary_blue "} ${pathname !== '/about' && isHamOpened && "bg-white"} ${isHamOpened && "items-center"} ${pathname === '/about' && "bg-white"} duration-300`}>


                        <div
                            className={` pt-[0.2rem] ${isHamOpened && "rotate-45 translate-y-[0.28rem] w-[80%] bg-primary_blue"} duration-300 relative z-20 rounded-full ${pathname !== '/about' && !isHamOpened ? " bg-white " : " bg-primary_blue "}`}
                        ></div>
                        <div
                            className={`w-[80%]  pt-[0.19rem] ${isHamOpened && '/about' && "-rotate-45 -translate-y-[0.18rem] bg-primary_blue"
                                } duration-300 relative z-20 rounded-full ${pathname !== '/about' && !isHamOpened ? " bg-white " : " bg-primary_blue "}`}
                        ></div>
                        <div
                            className={`w-[50%] pt-[0.2rem] ${isHamOpened && "hidden"
                                } duration-700 relative z-20 rounded-full ${pathname === '/about' ? " bg-primary_blue " : "bg-white"}`}
                        ></div>


                    </div>
                </div>
            </div>

            {/* Hamburger manu */}
            <AnimatePresence>
                {
                    isHamOpened &&
                    <MobileNav isOpened={isHamOpened} />
                }
            </AnimatePresence>
            <a href='#hero' className={`${isScrolled?"scale-100":"scale-0"} fixed right-[3vmax] bottom-[3vmax] bg-white rounded-full p-2 md:p-3 lg:p-4 border-primary_blue border duration-500`}>
                <div className=' size-[1.3vmax] border-l-4 border-b-4 border-primary_blue rotate-[135deg] translate-y-[0.3vmax]'></div>
            </a>
        </section>
    )
}


export default NavBar;