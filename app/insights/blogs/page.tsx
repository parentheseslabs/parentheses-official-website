import React from 'react'
import InsightCard from '@/components/insightspage/InsightCard'
import { createClient } from '@/prismicio'
import OneBlueWordHeading from '@/components/OneBlueWordHeading'

const page = async () => {
  const client = createClient();
  const blogs = await client.getAllByType("blog_post");
  const featuredBlogs = blogs.filter((item) => item.data.slices[0]?.primary.isfeatured);
  const allBlogs = blogs.filter((blog)=>!blog.data.slices[0]?.primary.isfeatured)
  
  return (
    <div className='py-48 space-y-16'>
      <div className='flex flex-col items-center justify-center gap-12'>
        <OneBlueWordHeading heading='Featured Blogs' wordNum={1} />

        <div className='flex gap-8 flex-wrap justify-center'>
          {
            featuredBlogs.map((blog, idx) => (
              <InsightCard key={blog.uid} {...blog} />
            ))
          }
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-12'>
        <OneBlueWordHeading heading='All Blogs' wordNum={1} />
        <div className='flex gap-8'>
          {
            allBlogs.map((blog) => (
              <InsightCard key={blog.uid} {...blog} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default page