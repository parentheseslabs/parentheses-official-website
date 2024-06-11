import React from 'react'
import { createClient } from '@/prismicio'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Link from 'next/link'



const page = async ({ params }: { params: { uid: string } }) => {

  const client = createClient();
  const blogData = await client.getByUID("blog_post", params.uid)
  const data = blogData.data.slices[0]?.primary
  // console.log('Data : ', blogData)

  return (
    <div className='min-h-[100svh] min-w-full text-black space-y-16 pt-32 pb-20 flex flex-col items-center'>
      <div className={`w-full bg-primary_blue py-10  md:px-[4%] gap-16 text-whit text-white flex md:flex-row flex-col md:justify-center md:items-center`}>
        <Image src={data?.thumbnail.url ? data?.thumbnail.url : ""} width={500} height={350} className=' md:w-[50svw] w-full  object-contain rounded-' alt={data?.thumbnail.alt ? data?.thumbnail.alt : ""}></Image>
        <div className='px-[4%] md:px-0 space-y-4'>
          <h1 className='text-[2.45vmax] font-sfpd-bold'>{data?.title}</h1>
          <p className='text-sm sm:text-base md:text-lg'>{data?.description}</p>
          <h2 className='text-white/60 italic text-sm sm:text-base'>{data?.publish_date}</h2>
        </div>
      </div>

      <div className='flex w-full justify-start gap-8 lg:flex-row flex-col'>
        <div className='space-y-4 md:space-y-12 lg:w-[30%] bg-gray-100 px-[4%] md:rounded-r-3xl py-5 md:py-10'>
          <div className='  py-10 space-y-8'>
            <h1 className='text-2xl font-sfpd-semibold'>AT A GLANCE</h1>
            <div className='flex lg:flex-col flex-row gap-4'>
              <div className='space-y-3'>
                <h1 className='text-base sm:text-lg md:text-xl'>CHALLENGES</h1>
                <div className='ml-3 text-sm md:text-base'>
                  <PrismicRichText field={data?.challenges} fallback={<div>Loading...</div>} />
                </div>
              </div>
              <div className='space-y-3'>
                <h1 className='text-base sm:text-lg md:text-xl'>PRODUCTS USED</h1>
                <div className='ml-3 text-sm md:text-base'>
                  <PrismicRichText field={data?.challenges} fallback={<div>Loading...</div>} />
                </div>
              </div>
            </div>
          </div>
          <div className='space-y-3'>
            <h1 className='text-2xl'>About <span className='text-primary_blue'>Parentheses</span></h1>
            <p className='italic text-sm md:text-base'>Our team is based in Kolkata and specializes in low-code development using popular platforms such as Bubble, Caspio, Zoho Creator, and Clappia. But that&apos;s not all we do. We also have extensive experience in traditional web development, including payments and e-commerce use cases, and are proud to be partners with industry leaders like Stripe and BigCommerce. So if you&apos;re looking to streamline your development process and achieve your business goals faster, let Parentheses Labs be your guide.</p>
          </div>
        </div>

        <div className='w-full space-y-12'>
          <div className='space-y-3 px-[4%]'>
            <h1 className='text-3xl font-sfpd-bold'>OBJECTIVES</h1>
            <p className='text-base sm:text-lg md:text-xl'>{data?.objectives_content}</p>
          </div>
          <div className='space-y-4 px-[4%]'>
            <h1 className='text-3xl font-sfpd-bold'>SOLUTIONS</h1>
            <div className='text-base sm:text-lg md:text-xl'>
            <PrismicRichText field={data?.solutions_content} />
            </div>
          </div>
          <div className='space-y-4 px-[4%]'>
            <h1 className='text-3xl font-sfpd-bold'>Results</h1>
            <p className='text-base sm:text-lg md:text-xl'>{data?.results_content}</p>
          </div>
        </div>
      </div>
      <Link href={'/insights/blogs'}>
        <PrimaryButton title='All Blogs' />
      </Link>
    </div>
  )
}

export default page