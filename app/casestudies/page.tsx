import React from 'react'
import CaseHero from '@/components/casestudiespage/CaseHero'
import CaseStudiesCard from '@/components/casestudiespage/CaseStudiesCard'
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
    <main className='flex flex-col items-center'>
      <CaseHero />
      <div className=' w-full flex flex-col items-center gap-24 md:gap-16 py-36'>
        {
          caseStudies.map((item, idx) => (
            <CaseStudiesCard key={idx} {...item} />)
          )
        }
      </div>
    </main>
  )
}

export default page