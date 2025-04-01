import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
// eslint-disable-next-line no-unused-vars
import {animate, motion} from 'framer-motion'

const iconVariants = (duration)=>({
  initial:{y:-10},
  animate:{
y:[10,-10],

transition:{
  duration:duration,
  ease:"linear",
repeat:Infinity,
repeateType:"reverse",

}

  },
});


const Technologies = () => {
  return (
    <div className="pb-24 bg-slate-950 -mt[1px]">

      <h2 className="mt-20 mb-20 text-center text-6xl text-white"> Technologies </h2>
       
       <div className='flex flex-wrap items-center justify-center gap-8'>

        <motion.div 
        
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-900 p-4 ">
            <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>

         <motion.div
         
         
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
         
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-7xl text-green-600' />
        </motion.div>

           <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiRedis className='text-7xl text-red-700' />
        </motion.div>

           <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className='text-7xl text-green-500' />
        </motion.div>

           <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className='text-7xl text-blue-800' />
        </motion.div>

           <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className='text-7xl text-white' />
        </motion.div>


       </div>
  </div>
  )
}

export default Technologies
