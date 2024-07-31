import React from 'react'
import PartnerHero from '@/components/partnerspage/PartnerHero'
import AllPartners from '@/components/partnerspage/AllPartners'


const page = () => {
    return (
        <main className='animate-fade'>
            <PartnerHero/>
            <AllPartners/>
        </main>
    )
}

export default page