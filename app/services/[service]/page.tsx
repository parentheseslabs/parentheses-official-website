
import React from 'react'
import Hero from '@/components/subservice/Hero'
import Description from '@/components/subservice/Description'
import WorkFlow from '@/components/subservice/WorkFlow'
import CaseStudiesCarousel from '@/components/subservice/CaseStudiesCarousel'
import FAQ from '@/components/subservice/FAQ'
import { redirect } from 'next/navigation'
import { fetchData } from '@/utils/fetchData'


const page = async ({ params }: { params: { service: string } }) => {
    
    let data;
    let hero;
    let features;
    let workFlow;
    let Faq;
    try {
        data = await fetchData(params.service,"sub_services");
        hero = data.data.slices[1]?.primary as { heading: string, sub_heading: string, big_image: { url: string }, small_image: { url: string } }
        features = data.data.slices[2]?.primary as {
            heading: string,
            sub_heading: string,
            color_word_no: number,
            feature_card: {
                title: string,
                feature_icon: {
                    url: string
                }
            }[]
        }

        workFlow = data.data.slices[3]?.primary as { steps: { ids: number, title: string, sub_title: string, step_image: { url: string } }[] };
        Faq = data.data.slices[4]?.primary as { faq: { question: string, answer: string }[] }
        // console.log(Faq);
    } catch (error:any) {
        console.log(error?.url);

        redirect("/services")
    }

    return (
        <main className='animate-fade'>
            {
                hero &&
                <Hero heading={hero.heading} subheading={hero.sub_heading} bigImage={hero.big_image.url} smallImage={hero.small_image.url} />
            }
            {
                features &&
                <Description heading={features.heading} sub_heading={features.sub_heading} color_word_no={features.color_word_no} feature_card={features.feature_card} />
            }
            {
                workFlow &&
                <WorkFlow allProps={workFlow.steps} />
            }
            <CaseStudiesCarousel />
            {
                Faq && (

                    <FAQ allProp={Faq.faq} />
                )
            }
        </main>
    )
}

export default page