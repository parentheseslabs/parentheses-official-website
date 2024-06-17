'use client'
import React from 'react'
import BlockImageDark from '@/public/svgs/blockImageDark.svg'
import FooterLogo from '@/public/logo/footerLogo.svg'
import Phone from '@/public/svgs/phone.svg'
import Mail from '@/public/svgs/mail.svg'
import Linkedin from '@/public/svgs/linkedinWhite.svg'
import data from '@/public/navlinks/data'
import Link from 'next/link'


const Footer: React.FC = () => {

  const linksHaveChildren = data.filter((item) => (item.haveChildren));
  const onlyLinks = data.filter((item) => (!item.haveChildren))
  return (
    <div className='min-w-full min-h-[70svh] bg-primary_blue relative overflow-hidden pt-20 md:pt-48 pb-20 px-[10%] text-white flex flex-col items-center'>
      <div className='w-full flex lg:flex-row flex-col justify-center gap-10 md:gap-20'>
        <div className=' w-[15rem] lg:w-1/5 flex flex-col justify-between gap-4'>
          <Link href={"/"}>
            <FooterLogo className='w-[10rem]' />
          </Link>
          <div className='sm:text-base text-sm mb-12'>©Parentheses Labs, 2024.</div>
        </div>
        <div className='flex flex-wrap justify-between w-full '>

          {
            linksHaveChildren.map((item, idx) => (
              <div key={idx} className=' flex-col flex gap-4 md:gap-5 md:px-8 w-[9rem] md:w-[12rem] mb-12'>
                <h1 className='text-base md:text-lg font-sfpd-semibold'>{item.title}</h1>
                {
                  item.children?.map((child, key) => (
                    <a href={child.href} key={key} className='sm:text-base text-sm'>{child.subtitle}</a>
                  ))
                }
              </div>
            ))
          }
          <div className=' md:px-8 w-[9rem] lg:mt-0 md:w-[15rem] flex flex-col gap-6 '>
            <h1 className='text-base md:text-lg font-sfpd-semibold'>More</h1>
            {
              onlyLinks.map((item, key) => (
                <a key={key} href={item.href} className='sm:text-base text-sm'>{item.title}</a>
              ))
            }
          </div>
        </div>
      </div>
      <BlockImageDark className=' absolute left-0 top-0 w-[45%] md:-left-40  md:-top-[30%] opacity-40' />
    </div>
  )
}

export default Footer