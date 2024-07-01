export const dynamicParams = true // true | false,
import ServiceHero from '@/components/servicespage/ServiceHero'
import ServiceSearch from '@/components/servicespage/ServiceSearch'

const page = () => {
  return (
    <main className=''>
        <ServiceHero/>
        <ServiceSearch/>
    </main>
  )
}

export default page