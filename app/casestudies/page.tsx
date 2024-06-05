import React from 'react'
import CaseHero from '@/components/casestudiespage/CaseHero'
import CaseStudiesCard from '@/components/casestudiespage/CaseStudiesCard'
import BlockImageLight from '@/public/svgs/blockImageLight.svg'

const caseStudies = [
  {
    type: "Full Stack Development",
    title: "Nemu",
    desc: "Lorem ipsum dolor sit amet consectetur. Nisl neque sit id sed dictum non. Odio accumsan pharetra et id nisl morbi lectus pellentesque. Elit sapien aliquet pretium turpis nunc. Habitant rhoncus mattis tincidunt egestas blandit enim lectus donec vel.",
    img: "/raster/nemu.png"
  },
  {
    type: "Full Stack Development",
    title: "Nemu",
    desc: "Lorem ipsum dolor sit amet consectetur. Nisl neque sit id sed dictum non. Odio accumsan pharetra et id nisl morbi lectus pellentesque. Elit sapien aliquet pretium turpis nunc. Habitant rhoncus mattis tincidunt egestas blandit enim lectus donec vel.",
    img: "/raster/nemu.png"
  },
  {
    type: "Full Stack Development",
    title: "Nemu",
    desc: "Lorem ipsum dolor sit amet consectetur. Nisl neque sit id sed dictum non. Odio accumsan pharetra et id nisl morbi lectus pellentesque. Elit sapien aliquet pretium turpis nunc. Habitant rhoncus mattis tincidunt egestas blandit enim lectus donec vel.",
    img: "/raster/nemu.png"
  },
]


const page = () => {
  return (
    <main className='flex flex-col items-center overflow-hidden'>
      <CaseHero />
      <div className=' w-full flex flex-col items-center gap-24 md:gap-16 py-40 md:py-72 relative'>
        <BlockImageLight className='absolute w-[60%] md:w-[25%] top-20 md:top-40 -left-10 -z-[1]' />
        {
          caseStudies.map((item, idx) => (
            <CaseStudiesCard key={idx} {...item} />)
          )
        }
        <BlockImageLight className='absolute w-[60%] md:w-[25%] bottom-0 md:bottom-0 -right-5 md:-right-10 -z-[1]' />
      </div>
    </main>
  )
}

export default page