import React from 'react'
import Hero from '@/components/subservice/Hero'
import Description from '@/components/subservice/Description'
import WorkFlow from '@/components/subservice/WorkFlow'
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
        </main>
    )
}

export default page