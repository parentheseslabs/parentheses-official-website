import React from 'react'
import ResourcesHero from '@/components/resourcespage/ResourcesHero'
import StartupResources from '@/components/resourcespage/StartupResources'
import HeadHunting from '@/components/resourcespage/HeadHunting'
import Tools from '@/components/resourcespage/Tools'


const page = () => {
  return (
    <main className='pb-20'>
        <ResourcesHero/>
        <StartupResources/>
        <HeadHunting/>
        <Tools/>
    </main>
  )
}

export default page