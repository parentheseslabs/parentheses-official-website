import React from 'react'
import Hero from '@/components/subservice/Hero'
import Description from '@/components/subservice/Description'
import WorkFlow from '@/components/subservice/WorkFlow'
import CaseStudiesCarousel from '@/components/subservice/CaseStudiesCarousel'
import FAQ from '@/components/subservice/FAQ'
import { createClient } from '@/prismicio'

const page = async({ params }: { params: { uid: string } }) => {
    const client  = createClient();
    const data = await client.getByUID("sub_services",params.uid)
    const hero = data.data.slices[1]?.primary as {heading :string,sub_heading:string,big_image:{url:string},small_image:{url:string}}
    const features = data.data.slices[2]?.primary as {
        heading :string,
        sub_heading:string,
        color_word_no:number,
        feature_card:{
            title:string,
            feature_icon:{
                url:string
            }
        }[]
    }

    console.log('Data', features);

    return (
        <main>
            <Hero heading={hero.heading} subheading={hero.sub_heading} bigImage={hero.big_image.url} smallImage={hero.small_image.url}/>
            <Description heading={features.heading} sub_heading={features.sub_heading} color_word_no={features.color_word_no} feature_card={features.feature_card}/>
            <WorkFlow/>
            <CaseStudiesCarousel/>
            <FAQ/>
        </main>
    )
}

export default page