import React from 'react'
import InsightCard from '@/components/insightspage/InsightCard'
import { createClient } from '@/prismicio'
import PrimaryButton from '../buttons/PrimaryButton'
import Link from 'next/link'

const BlogSection = async ({ uid }: { uid?: string }) => {
    const client = createClient();
    const blogs = await client.getAllByType("blog_post");
    const allData = blogs.filter((item) => item.data.slices[0]?.primary.isfeatured);

    return (
        <div className='flex flex-col gap-16 justify-center items-center relative min-h-screen px-[7%] flex-wrap py-32'>
            <div className='flex min-w-[90%] justify-center gap-8'>
                <button className='py-1 px-4 bg-blue-100 text-primary_blue  w-fit rounded-full sm:text-base md:text-lg lg:text-xl text-sm'>Blog</button>
                <button className='py-1 px-4 bg-gray-300  w-fit rounded-full sm:text-base md:text-lg lg:text-xl text-sm'>Guides</button>
            </div>
            <div className='flex gap-16 flex-wrap justify-center'>

                {
                    allData.map((blog, idx) => (
                        <InsightCard key={blog.uid} {...blog} />
                    ))
                }
            </div>
            <Link href={'insights/blogs'}>
                <PrimaryButton title='All Blogs' />
            </Link>
            <div className='w-[200vw] bg-gray-100 h-[30rem] rotate-12 absolute -z-[1] -left-[20%] sm:-left-[10%]'></div>

        </div>
    )
}

export default BlogSection