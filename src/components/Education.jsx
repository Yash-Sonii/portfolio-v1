import React from 'react'
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'

const Education = () => {
  return (
    <div className="pb-24">
      <div className='text-6xl text-white text-center my-15'>
        <h1>Education</h1>
      </div>

      <div className="flex flex-wrap items-start justify-between px-4 lg:ml-56 py-20">
        <div className="w-full lg:w-1/2">
          <motion.h2 
           
            whileInView={{  opacity: 1,x:0 }}
            initial={{ opacity: 0,x:-100 }}
            transition={{ duration: 0.5 }}
          
          

          className='text-5xl text-white mb-10 '>
            Bachelor of Computer Application
          </motion.h2>
        </div>

        <motion.div
            whileInView={{  opacity: 1,x:0 }}
            initial={{ opacity: 0,x:100 }}
            transition={{ duration: 0.5 }} 
             className="w-full lg:w-1/2">
          <p className="text-white max-w-3xl text-2xl leading-relaxed ">
            I have completed my Bachelor of Computer Applications (BCA) from Silver Oak University. 
            Throughout my academic journey, I took the initiative to learn many things on my own, 
            as the university curriculum didn't cover everything in depth. Beyond academics, 
            studying in a crowded environment taught me valuable life lessons about adaptability 
            and perseverance.

            My programming journey began with C, which laid the foundation for my technical skills. 
            From there, I ventured into full-stack web development, continuously expanding my knowledge. 
            Though I have come a long way, I am still learning and growing every day.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Education
