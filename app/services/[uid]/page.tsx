import React from 'react'
import Hero from '@/components/subservice/Hero'
import Description from '@/components/subservice/Description'
import WorkFlow from '@/components/subservice/WorkFlow'
import Contact from '@/components/aboutpage/Contact'
import CaseStudiesCarousel from '@/components/subservice/CaseStudiesCarousel'
import FAQ from '@/components/subservice/FAQ'

const page = ({ params }: { params: { uid: string } }) => {

    return (
        <main>
            <Hero/>
            <Description/>
            <WorkFlow/>
            <CaseStudiesCarousel/>
            <FAQ/>
            <Contact/>
        </main>
    )
}

export default page