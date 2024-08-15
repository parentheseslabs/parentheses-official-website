import Image from 'next/image'
import React from 'react'

interface cardProp {
    props:{
        title : string,
        description : string  
    },
    Color:{
        backgroundColor:string
    },
    images:{
        img:string
    }
}

const ServiceCard = ({props,Color,images}:cardProp) => {
    let bgText ="";
    

  return (
    <div className={`${Color.backgroundColor=="blue"?"bg-primary_blue":"bg-card_dark_blue"} w-60 h-72 text-white px-8 py-6 rounded-lg relative overflow-hidden space-y-3 hover:-translate-y-4 duration-500 group`}>
        <h1 className='text-lg md:text-xl font-sfpd-semibold'>{props.title}</h1>
        <h1 className='text-sm font-sfpd-light '>{props.description}</h1>
        <Image src={images.img} width={200} height={200} alt='' className='absolute -right-10 -bottom-10 opacity-35 group-hover:translate-y-4 duration-500 group-hover:scale-105'></Image>
    </div>
  )
}

export default ServiceCard