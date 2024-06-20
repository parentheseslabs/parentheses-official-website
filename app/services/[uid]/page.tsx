import React from 'react'
import Hero from '@/components/subservice/Hero'
import Description from '@/components/subservice/Description'
import WorkFlow from '@/components/subservice/WorkFlow'

const page = ({ params }: { params: { uid: string } }) => {

    return (
        <main>
            <Hero/>
            <Description/>
            <WorkFlow/>
        </main>
    )
}

export default page