
import BgGrid from '@/public/background/bgGrid.svg';
import SecondaryButton from '../buttons/SecondaryButton';

const AboutHero = () => {
    return (
        <div className='bg-primary_blue min-h-screen relative z-0 overflow-hidden  flex flex-col items-center pt-10 justify-center text-white text-center min-w-full'>
            <div className='flex flex-col gap-8 lg:w-1/2 items-center justify-center'>
                <div className='flex text-[4vmax] flex-col  justify-center items-center'>
                    <h1 className=" font-sfpd-bold text-white/70 ">Discover the story</h1>
                    <h1 className=' font-sfpd-bold text-white/70 '>behind <span className='text-white'>Parentheses</span></h1>
                </div>
                <h2 className='lg:w-[55%] sm:w-full w-[93%]'>Elevate Your Business with tailored Apps, Personalized Dashboards, and  Intelligent AI Solutions</h2>
                <SecondaryButton title='Our Services'/>
            </div>
            <BgGrid className='rotate-180 absolute z-0 top-0 scale-[5] lg:scale-[2] translate-y-12 lg:-translate-y-10' />
            <BgGrid className=' absolute z-0 bottom-0 scale-[5] lg:scale-[2] -translate-y-10 lg:translate-y-16 ' />
        </div>
    )
}

export default AboutHero