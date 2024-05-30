
import AboutHero from "@/components/aboutpage/AboutHero";
import Sale from "../../components/sale";
import OurHistory from "@/components/aboutpage/OurHistory";
import OurMission from "@/components/aboutpage/OurMission";


const About = () => {
  return (
    <div className='min-h-[100svh]'>
      <Sale bg="white" className=""/>
      <AboutHero/>
      <OurHistory/>
      <OurMission/>
    </div>
  )
}

export default About;