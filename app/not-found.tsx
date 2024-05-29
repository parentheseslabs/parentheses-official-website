import Link from 'next/link'
import React from 'react'
import SecondaryButton from '@/components/buttons/SecondaryButton'
import BgGridGrey from '@/public/background/bgGridGrey.svg'


const index = () => {
  return (
    <div className='min-h-screen text-primary_blue text-[4vmax] bg-white flex flex-col items-center justify-center text-center gap-8 relative w-full overflow-hidden'>
      <h1 className='w-[70%]'>
        Oops! Came to a wrong direction?
      </h1>
      <h1>
        Here the way to Home...
      </h1>
      <Link href={'/'}><SecondaryButton title='Home'/></Link>
      <BgGridGrey className='absolute bottom-0 -z-0 scale-[5] lg:scale-[2] -translate-y-16 lg:translate-y-10'/>
    </div>
  )
}

export default index