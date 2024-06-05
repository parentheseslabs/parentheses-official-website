'use client'
import React from 'react'
import BlockImageDark from '@/public/svgs/blockImageDark.svg'
import FooterLogo from '@/public/logo/footerLogo.svg'
import Phone from '@/public/svgs/phone.svg'
import Mail from '@/public/svgs/mail.svg'
import Linkedin from '@/public/svgs/linkedinWhite.svg'
import data from '@/public/navlinks/data'


const Footer: React.FC = () => {

  const handleScroll  = () =>{
    document.body.scrollTo(0,0); 
  }

  const linksHaveChildren = data.filter((item) => (item.haveChildren));
  const onlyLinks = data.filter((item) => (!item.haveChildren))
  return (
    <div className='min-w-full min-h-[80svh] bg-primary_blue relative overflow-hidden py-36 md:py-56 px-[4%] text-white flex flex-col items-center'>
      <div className='w-full space-y-6 flex flex-col gap-16'>
        <div className='space-y-6 px-2'>
          <FooterLogo />
          <div className='flex md:items-center items-start gap-4 flex-col md:flex-row'>
            <div className='flex items-center gap-1'>
              <Phone  className='fill-white stroke-white'/>
              <h1>+91 00000 00000</h1>
            </div>
            <a href='/' className='flex items-center gap-1'>
              <Mail />
              <h1>help@parentheses.com</h1>
            </a>
            <a href='/' className='flex items-center gap-1'>
              <Linkedin />
              <h1>Parentheses Labs</h1>
            </a>
          </div>
        </div>
        <div className='flex border-dashed border-x border-white/40 md:border-none flex-wrap px-5 md:px-0 justify-between'>
          {
            linksHaveChildren.map((item, idx) => (
              <div key={idx} className=' flex-col flex gap-4 md:border-dashed md:first:border-l md:border-r md:border-white/40 md:px-8 w-[9rem] md:w-1/4 mt-16'>
                <h1 className='text-lg sm:text-xl font-sfpd-bold'>{item.title}</h1>
                {
                  item.children?.map((child, key) => (
                    <a href={child.href} key={key} className='sm:text-base text-sm'>{child.subtitle}</a>
                  ))
                }
              </div>
            ))
          }
          <div className=' border-dashed md:border-r  md:border-white/40 md:px-8 w-[9.5rem] md:w-1/4 flex flex-col gap-6 mt-16'>

            {
              onlyLinks.map((item, key) => (
                <a key={key} href={item.href} className='text-xl font-sfpd-bold'>{item.title}</a>
              ))
            }
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 border-dashed border-white/40 border-t py-2 w-full flex justify-center'>©Parentheses Labs, 2024. All rights reserved.</div>
      <a href='#hero' className=' absolute right-[5vmax] top-[5vmax] bg-white rounded-full p-3 md:p-3 lg:p-4'>
        <div className=' size-[1.8vmax] border-l-4 border-b-4 border-primary_blue rotate-[135deg] translate-y-[0.5vmax]'></div>
      </a>
      <BlockImageDark className=' absolute left-0 top-0 w-[60%] md:-left-40  md:-top-[30%] opacity-70' />
    </div>
  )
}

export default Footer