import React from 'react'
import Hero from '@/components/subservice/Hero'
import Description from '@/components/subservice/Description'
import WorkFlow from '@/components/subservice/WorkFlow'
import Contact from '@/components/aboutpage/Contact'

const page = ({ params }: { params: { uid: string } }) => {

    return (
        <main>
            <Hero/>
            <Description/>
            <WorkFlow/>
            <Contact/>
        </main>
    )
}

export default page