import React from 'react'
import ContactHero from '@/components/contactpage/ContactHero'
import Sale from '@/components/sale'
import Contact from '@/components/aboutpage/Contact'
import OurOffices from '@/components/contactpage/OurOffices'


const page = () => {
  return (
    <div className='min-h-screen min-w-full animate-fade'>
        <Sale bg='blue'/>
        <ContactHero/>
        <Contact heading={false}/>
        <OurOffices/>
    </div>
  )
}

export default page