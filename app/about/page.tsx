
import AboutHero from "@/components/aboutpage/AboutHero";
import Sale from "../../components/sale";
import OurHistory from "@/components/aboutpage/OurHistory";
import OurMission from "@/components/aboutpage/OurMission";
import OurValues from "@/components/aboutpage/OurValues";
import Team from "@/components/aboutpage/Team";

const About = () => {
  return (
    <div className='min-h-[100svh]'>
      <Sale bg="white" className=""/>
      <AboutHero/>
      <OurHistory/>
      <OurMission/>
      <OurValues/>
      <Team/>
    </div>
  )
}

export default About;