import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Arrow from '@/public/icon/arrow.svg'

interface cardProp {
  name: string;
  website: string,
  description: string;
  usecase: {
    case: string;
    desc: string;
  }[];
  tags: string[],
  img: string;
}

const CommonCard = ({ ...data }: cardProp) => {
  return (
    <section className='min-h-[30svvh] flex lg:flex-row flex-col lg:gap-16 gap-8 py-10'>
      <div className='w-full space-y-4'>
        <Image src={data.img} width={59} height={51} alt='tool' className='w-[8rem] drop-shadow-xl bg-white p-4 rounded-lg'></Image>
        <h1 className='text-2xl font-sfpd-bold'>{data.name}</h1>
        <div className='flex gap-2 flex-wrap'>
          {
            data.tags.map((tag,idx) => (
              <div key={idx} className='rounded-full px-5 py-1 bg-primary_blue/10 border border-primary_blue text-neutral-600 text-nowrap'><h1>{tag}</h1></div>
            ))
          }
        </div>
        <h2 className='text-lg text-neutral-500'>{data.description}</h2>
        <Link href={data.website} className='text-primary_blue group flex items-center gap-1'>Read More <Arrow className='stroke-primary_blue rotate-90 group-hover:translate-x-2 duration-300' /></Link>
      </div>
      <div className='w-full space-y-4'>
        <h1 className='text-xl font-sfpd-semibold'>Use Cases : </h1>
        <div className='space-y-3'>
          {
            data.usecase.map((caseItem, idx) =>
              <div key={idx} className='flex'>
                <h1 className='text-lg text-neutral-500'><span className='font-sfpd-semibold text-nowrap text-lg mr-2 text-neutral-800'>- {caseItem.case}:</span>
                  {caseItem.desc}</h1>
              </div>
            )
          }
        </div>
      </div>


    </section>
  )
}

export default CommonCard