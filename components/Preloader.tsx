'use client'
import React from 'react'
import Lottie from 'react-lottie'
import PreloaderAnimation from '@/public/Preloader.json'
import { motion } from 'framer-motion'

// const initial = 

const Preloader = () => {
    return (
        <motion.div
            initial
            className="fixed top-0 left-0 w-[100vw] h-svh z-[9999] flex bg-white justify-center items-center">
            <div className='animate-fade overflow-hidden rounded-full w-[15rem] h-[15rem]'>
                <div className='relative top-1/2 -left-20 -translate-y-1/2'>
                    <Lottie options={{ animationData: PreloaderAnimation }} height={300} width={400} isClickToPauseDisabled/>
                </div>
            </div>
        </motion.div>
    )
}

export default Preloader