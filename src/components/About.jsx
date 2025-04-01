import aboutIMG from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'



const About = () => {
  return (
   
         <div className=" pb-4">
          
         <h2 className="my-20  text-center text-6xl text-white ">About Me</h2>
 
          <div className="flex flex-wrap">
            {/* Left side content */}


            

            <motion.div
            whileInView={{  opacity: 1,x:0 }}
            initial={{ opacity: 0,x:-100 }}
            transition={{ duration: 0.5 }}className="w-full lg:w-1/2 lg:p-8 ">

            <div className="flex items-center justify-center">
              
              <img className="rounded-3xl" src={aboutIMG} alt="about me " />
            
            </div>
       
            </motion.div>
             

            <motion.div
            whileInView={{  opacity: 1,x:0 }}
            initial={{ opacity: 0,x:100 }}
            transition={{ duration: 0.5 }} 
            
            className="w-full lg:w-1/2 lg:mt-16">
                <div className="flex justify-center lg:justify-start ">
                  
<p className="text-white my-2 max-w-2xl py-6 text-2xl leading-relaxed">{ABOUT_TEXT}</p>     
   </div>
            </motion.div>

<div>

</div>



          </div>
          
         </div>
  )
}

export default About

