import ServiceHero from '@/components/servicespage/ServiceHero'
import ServiceSearch from '@/components/servicespage/ServiceSearch'
import { createClient } from '@/prismicio'

const page = async() => {
  
  
  return (
    <main className=''>
        <ServiceHero/>
        <ServiceSearch/>
    </main>
  )
}

export default page