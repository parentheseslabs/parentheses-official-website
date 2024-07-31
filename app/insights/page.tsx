import React from 'react'
import Sale from '@/components/sale'
import InsightsHero from '@/components/insightspage/InsightsHero'
import BlogSection from '@/components/insightspage/BlogSection'

const page = async() => {
  
  return (
    <main className='overflow-hidden h-full animate-fade'>
        <Sale bg='blue'/>
        <InsightsHero/>
        <BlogSection/>
    </main>
  )
}

export default page