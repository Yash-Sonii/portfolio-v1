import React from 'react'
import { HERO_CONTENT } from '../constants'
import Profile_pic from '../assets/IMG_3916.jpg'
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'



const container = (delay) => ({
  hidden: { x:-100,opacity: 0 },
  visible: {
    x:0,
    opacity: 1,
    transition: { duartion: 0.5,delay:delay}

    },
  });




const Hero = () => {
  return (
    <div className=" border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center justify-between">
       
        {/* Left side content */}

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">

            <motion.h1
         
         variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-7xl font-thin tracking-tight lg:mt-60
            lg:ml-32  lg:text-8xl text-white ">
              Yash Soni
            </motion.h1>
             
             <motion.span 
               
         variants={container(0.5)}
            initial="hidden"
            animate="visible"className=" bg-fuchsia-800              bg-clip-text text-5xl tracking-tight text-transparent 
              lg:ml-32 lg:mb-39">

              Full Stack Developer
            </motion.span>

           <motion.p   
         variants={container(1)}
            initial="hidden"
            animate="visible"className="text-white  max-w-xl lg:mt-10 lg:ml-32  leading-relaxed text-2xl">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right side profile picture */}
        
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:ml-10">
            <motion.img
            
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
              src={Profile_pic} 
              alt="Yash Soni" 
              className="rounded-3xl w-[40rem] h-[40rem]  object-cover shadow-2xl border-3 border-slate-900"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
