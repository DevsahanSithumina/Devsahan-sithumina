"use client"
import React from 'react'
import{motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'


const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
             variants={slideInFromTop}
             className="welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]"
             >
                <SparklesIcon className=" text-[#b49bff] mr-[10px] h-5 w-5"/>
                <h1 className="Welcome-text text-[13px]">
                    Think better with Next js 13
                </h1>



             </motion.div>

             <motion.div
             variants={slideInFromLeft(0.5)}
             className='text-[30px] text-white font-medium mt-[10px] text-center'
             >
                Skills
             </motion.div>
      
    </div>
  )
}

export default SkillText
