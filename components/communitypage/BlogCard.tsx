import Image from 'next/image'
import React from 'react'

interface cardProp{
    title:string,
    img:string,
    author:string,
    readtime:string
}

const BlogCard = ({...prop}:cardProp) => {
  return (
    <div className='rounded-lg space-y-3'>
        <Image src={prop.img} width={350} height={225} alt='blog image'></Image>
        <div className='flex justify-between'>
            <h1 className='font-sfpd-bold'>{prop.title}</h1>
            <h1 className='text-neutral-500'>{prop.readtime} mins read</h1>
        </div>
        <h1 className='text-neutral-500'>{prop.author}</h1>
    </div>
  )
}

export default BlogCard