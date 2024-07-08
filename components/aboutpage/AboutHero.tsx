
import BgGrid from '@/public/background/bgGrid.svg';
import SecondaryButton from '../buttons/SecondaryButton';

const AboutHero = () => {
    return (
        <div id='hero' className='bg-primary_blue min-h-[100svh] relative z-0 overflow-hidden  flex flex-col items-center pt-36 justify-center text-white text-center min-w-full'>
            <div className='flex flex-col gap-16 lg:gap-16 lg:w-2/3 items-center justify-center'>
                <div className='flex flex-col gap-8 w-full items-center drop-shadow-xl'>
                    <div className='flex text-[4.5vmax] md:text-[5vmax] flex-col  justify-center items-center leading-[5.4vmax] md:leading-[6vmax]'>
                        <h1 className=" font-sfpd-bold text-white/70 ">Discover the story</h1>
                        <h1 className=' font-sfpd-bold text-white/70 '>behind <span className='text-white text-[5.5vmax] md:text-[6.5vmax]'>Parentheses</span></h1>
                    </div>
                    <h2 className='lg:w-[60%] w-[93%] text-base lg:text-base tracking-wider font-sfpd-light'>Elevate Your Business with tailored Apps, Personalized Dashboards, and  Intelligent AI Solutions</h2>
                </div>
                <SecondaryButton title='Our Services' />
            </div>
            <BgGrid className='rotate-180 absolute z-0 top-0 scale-[5] sm:scale-[4]  xl:scale-[2] translate-y-12 md:translate-y-7 lg:-translate-y-10' />
            <BgGrid className='absolute z-0 bottom-0 scale-[5] sm:scale-[4]  xl:scale-[2] -translate-y-10 md:-translate-y-4 lg:translate-y-16' />
        </div>
    )
}

export default AboutHero