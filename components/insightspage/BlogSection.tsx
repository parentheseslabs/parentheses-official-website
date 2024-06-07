import React from 'react'
import InsightCard from '@/components/insightspage/InsightCard'
import { createClient } from '@/prismicio'
import { PrismicRichText } from '@prismicio/react'
const data = [
    {
        img: "/raster/blog1.png",
        type: "News",
        title: "Create a bigger funnel",
        desc: "Insights, Trends and Expertise: Dive into our knowledge HubInsights, Trends and Expertise: Dive into our knowledge Hub.",
        date: "12th May 2024",
        author: "Parentheses Labs"

    },
    {
        img: "/raster/blog1.png",
        type: "News",
        title: "Create a bigger funnel",
        desc: "Insights, Trends and Expertise: Dive into our knowledge HubInsights, Trends and Expertise: Dive into our knowledge Hub.",
        date: "12th May 2024",
        author: "Parentheses Labs"

    },
    {
        img: "/raster/blog1.png",
        type: "News",
        title: "Create a bigger funnel",
        desc: "Insights, Trends and Expertise: Dive into our knowledge HubInsights, Trends and Expertise: Dive into our knowledge Hub.",
        date: "12th May 2024",
        author: "Parentheses Labs"

    },
    {
        img: "/raster/blog1.png",
        type: "News",
        title: "Create a bigger funnel",
        desc: "Insights, Trends and Expertise: Dive into our knowledge HubInsights, Trends and Expertise: Dive into our knowledge Hub.",
        date: "12th May 2024",
        author: "Parentheses Labs"

    },
    {
        img: "/raster/blog1.png",
        type: "News",
        title: "Create a bigger funnel",
        desc: "Insights, Trends and Expertise: Dive into our knowledge HubInsights, Trends and Expertise: Dive into our knowledge Hub.",
        date: "12th May 2024",
        author: "Parentheses Labs"

    },
    {
        img: "/raster/blog1.png",
        type: "News",
        title: "Create a bigger funnel",
        desc: "Insights, Trends and Expertise: Dive into our knowledge HubInsights, Trends and Expertise: Dive into our knowledge Hub.",
        date: "12th May 2024",
        author: "Parentheses Labs"

    },

]

const BlogSection = async ({ uid }: { uid?: string }) => {
    const client = createClient();
    const blogs = await client.getAllByType("blog");
    // console.log('Blog ', blogs[0].data.slices[0])
    const allData = blogs.map((item)=>(item.data.slices[0]))
    console.log(allData)
    return (
        <div className='flex gap-16 justify-center items-center relative min-h-screen px-[7%] flex-wrap'>
            <div className='flex min-w-[90%] justify-center gap-8'>
                <button className='py-1 px-4 bg-blue-100 text-primary_blue  w-fit rounded-full sm:text-base md:text-lg lg:text-xl text-sm'>Blog</button>
                <button className='py-1 px-4 bg-gray-300  w-fit rounded-full sm:text-base md:text-lg lg:text-xl text-sm'>Guides</button>
            </div>
            {
                data.map((blog, idx) => (
                    <InsightCard key={idx} {...blog} />
                ))
            }

            <div className='w-[200vw] bg-gray-100 h-[30rem] rotate-12 absolute -z-[1] -left-[20%] sm:-left-[10%]'></div>
            
        </div>
    )
}

export default BlogSection