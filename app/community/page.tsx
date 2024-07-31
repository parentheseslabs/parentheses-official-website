import React from 'react'
import CommunityCaseStudies from '@/components/communitypage/CommunityCaseStudies'
import CommunityHero from '@/components/communitypage/CommunityHero'

const page = () => {
    return (
        <div className='animate-fade'>
            <CommunityHero/>
            <CommunityCaseStudies/>
        </div>
    )
}

export default page