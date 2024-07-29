export const dynamicParams = true // true | false,
import ServiceHero from '@/components/servicespage/ServiceHero'
import dynamic from 'next/dynamic'

const ServiceSearch = dynamic(()=>import('@/components/servicespage/ServiceSearch'),{ssr:false});
const page = () => {
  return (
    <main className=''>
        <ServiceHero/>
        <ServiceSearch/>
    </main>
  )
}

export default page