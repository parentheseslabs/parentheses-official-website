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
        className="fixed top-0 left-0 w-full h-svh z-[9999] flex bg-white justify-center ">
            <div className='w-[30rem] animate-fade'>
                <Lottie options={{ animationData: PreloaderAnimation }} height={500} width={500} isClickToPauseDisabled/>
            </div>
        </motion.div>
    )
}

export default Preloader