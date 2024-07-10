import React from 'react'
import InsightCard from '../insightspage/InsightCard'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/prismicio'
import SecondaryButton from '../buttons/SecondaryButton'


const BlogSection = async () => {
    const client = createClient();
    const blogs = await client.getAllByType("blog_post");
    const allData = blogs.filter((item) => item.data.slices[0]?.primary.isfeatured);
    return (
        <section className='min-h-[70svh] flex gap-8 px-[7%] py-20 xl:flex-row flex-col items-center lg:items-start'>
            <div className='flex flex-col gap-8 items-center lg:items-start pt-5'>
                <h1 className='sm:text-lg md:text-2xl lg:text-[2.25vmax] font-sfpd-bold'>Our Latest Blogs and Articles</h1>
                <h2 className='text-neutral-500 text-center lg:text-start text-sm md:text-base'>Insights, Trends and Expertise: Dive into our knowledge Hub</h2>
                <SecondaryButton title='All Blogs' className='hidden lg:flex' />
            </div>
            <div className='flex lg:flex-row flex-col gap-8 items-center sm:items-start'>
                {
                    allData.map((item, idx) => (
                        <Card key={idx} {...item} />
                    ))
                }
            </div>
            <SecondaryButton title='All Blogs' className='flex lg:hidden w-fit' />
        </section>
    )
}

export const Card = ({ ...props }) => {
    return (
        <Link href={`/insights/blogs/${props.uid}`} className=' rounded-3xl px-6 py-5 bg-white space-y-2 hover:border hover:border-primary_blue border border-transparent duration-300 h-fit'>
            <Image src={props.data.slices[0]?.primary.thumbnail.url} width={532} height={350} alt='' className='aspect object-cover h-48 rounded-2xl'></Image>
            <h1 className='py-1 px-3 bg-blue-50 text-primary_blue  w-fit rounded-full text-sm'>{props.data.slices[0]?.primary.type}</h1>
            <h1 className='md:text-[1.5vmax] font-sfpd-bold w-fit'>{props.data.slices[0]?.primary.title}</h1>
            <h2 className='text-black/50 text-sm md:text-base min-w-fit sm:w-96'>{props.data.slices[0]?.primary.description}</h2>
            <h3 className='text-black/50 text-sm md:text-base'>{props.data.slices[0]?.primary.publish_date}</h3>
        </Link>
    )
}

export default BlogSection