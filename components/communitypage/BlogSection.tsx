import React from 'react'

import BlogCard from './BlogCard'

const data = [
    {
        title:"Development",
        img:"/raster/blog1.png",
        author:"Mr. Khola",
        readtime:"5"
    },
    {
        title:"Development",
        img:"/raster/blog1.png",
        author:"Mr. Khola",
        readtime:"5"
    },
    {
        title:"Development",
        img:"/raster/blog1.png",
        author:"Mr. Khola",
        readtime:"5"
    },
    {
        title:"Development",
        img:"/raster/blog1.png",
        author:"Mr. Khola",
        readtime:"5"
    },
    {
        title:"Development",
        img:"/raster/blog1.png",
        author:"Mr. Khola",
        readtime:"5"
    },
    {
        title:"Development",
        img:"/raster/blog1.png",
        author:"Mr. Khola",
        readtime:"5"
    },
    {
        title:"Development",
        img:"/raster/blog1.png",
        author:"Mr. Khola",
        readtime:"5"
    },
    {
        title:"Development",
        img:"/raster/blog1.png",
        author:"Mr. Khola",
        readtime:"5"
    },
    {
        title:"Development",
        img:"/raster/blog1.png",
        author:"Mr. Khola",
        readtime:"5"
    },
    {
        title:"Development",
        img:"/raster/blog1.png",
        author:"Mr. Khola",
        readtime:"5"
    },
]

const BlogSection = () => {
  return (
    <section className='min-h-svh flex flex-wrap w-full px-[7%] gap-16'>
        {
            data.map((item,idx)=>(
                <BlogCard key={idx} {...item}/>
            ))
        }
    </section>
  )
}

export default BlogSection