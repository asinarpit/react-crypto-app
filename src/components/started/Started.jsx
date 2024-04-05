import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


const variants={
  hidden:{
    opacity:0,
    y:100
  },
  visible:{
    opacity:1,
    y:0,
    transition:{
      staggerChildren:0.2,
      duration:0.5
    }
  }
}

const textVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const letterVariants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -50,
      y: 50,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };





const Started = () => {

    const ref = useRef();
    const isInView = useInView(ref, {margin:"-100px"})
    const heading = "Let's get started"
    const arr = Array.from(heading);
    
    
    return (
      <div className='w-full h-full px-5'>
         <div ref={ref} className='w-full max-w-7xl mx-auto h-full flex flex-col justify-center items-center gap-10 text-center py-20'>
            <motion.div  variants={textVariants}  initial="hidden" animate={isInView ? "visible" : "hidden"} className='text-4xl md:text-6xl flex font-semibold'>
                {arr.map((letter,i)=>(
                   <motion.span variants={letterVariants} key={i}>{letter===" " ? "\u00A0" : letter}</motion.span> 
                ))}
            </motion.div>

            <motion.div variants={variants} initial="hidden" animate={isInView ?"visible" :  "hidden"}  className='flex flex-col gap-10'>
            <motion.p variants={variants}  className=' font-semibold md:text-2xl text-gray-500'>Sign up for a physical card, purchase a virtual gift card or even pay your bills with any one of nearly 21 thousand US companies.</motion.p>
            <motion.p variants={variants}  className=' md:text-2xl font-semibold text-[#005578]'>Please read the FAQs before making any payments.</motion.p>

            </motion.div>

        </div>

      </div>
        
       

      
        


    );
}

export default Started;
