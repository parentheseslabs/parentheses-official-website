
import AboutHero from "@/components/aboutpage/AboutHero";
import Sale from "../../components/sale";
import OurHistory from "@/components/aboutpage/OurHistory";
import OurMission from "@/components/aboutpage/OurMission";
import OurValues from "@/components/aboutpage/OurValues";
import Team from "@/components/aboutpage/Team";
import OurApproach from "@/components/aboutpage/OurApproach";
import WhyUs from "@/components/aboutpage/WhyUs";
import NoteWorthyAchievements from "@/components/aboutpage/NoteWorthyAchievements";
import { Suspense } from "react";

const About = () => {
  return (
    <div className='min-h-[100svh] animate-fade'>
      <Sale bg="white" className="" />
      <AboutHero />
      <Suspense fallback={<div>Loading History...</div>}>
        <OurHistory />
      </Suspense>
      <OurMission />
      <OurValues />
      <Team />
      <OurApproach />
      <WhyUs />
      <NoteWorthyAchievements />
    </div>
  )
}

export default About;