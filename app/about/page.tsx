
import AboutHero from "@/components/aboutpage/AboutHero";
import Sale from "../../components/sale";
import OurHistory from "@/components/aboutpage/OurHistory";


const About = () => {
  return (
    <div className='min-h-[100svh]'>
      <Sale bg="white" className=""/>
      <AboutHero/>
      <OurHistory/>
    </div>
  )
}

export default About;