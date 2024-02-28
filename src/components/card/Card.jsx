import React, { useState } from 'react';
import { motion } from 'framer-motion'
import Button from '../button/Button';






const circleVariants = {
    initial: {
        scale: 1,

    },


    hover: {
        scale: 10,

        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
}


const textVariants = {
    initial: {
        opacity: 0,
        x: -50,
        y: 50
    },

    hover: {
        opacity: 1,

        x: 0,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
}


const Card = ({ data }) => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <motion.div initial="initial" whileHover="hover" onClick={()=>setIsClicked(prev=>!prev)}
        animate={isClicked ? "hover" : "initial"}  className='w-full h-full max-w-[400px] max-h-[300px] min-h-[200px] relative overflow-hidden rounded-lg shadow-[rgba(13,_38,_76,_0.3)_0px_9px_20px] '>


            <img className='w-full h-full 
              object-cover' src={data.img} alt="" />


            {/* heading container */}
            <div className='absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center text-center'>

                <h2 className='text-white z-10 text-2xl font-semibold'>{data.title1}</h2>
                <h4 className='text-white font-semibold'>{data.subtitle}</h4>

            </div>




            {/* on hover effects */}
            <motion.div className='absolute top-0 left-0  w-full h-full flex  justify-center items-center text-center '>

                {/* text container */}
                <motion.div variants={textVariants} className='text-white w-full h-full p-3 z-30 flex items-center flex-col gap-1 justify-between'>
                    <div className='flex-col gap-2 '>
                        <h3 className='font-semibold text-lg'>{data.title2}</h3>

                        <p className='text-sm'>{data.desc}</p>

                    </div>
                    <Button text={data.btn} textColor="black" padding="0.6rem" bgColor="#c6ffea" />
                </motion.div>

                {/* circle */}
                <motion.div variants={circleVariants} className='absolute z-20 bg-[#005578]  w-[100px] h-[100px] bottom-[-50px] left-[-50px] rounded-full shadow-[0px_0px_20px_0px_#4a5568] '>
                </motion.div>

            </motion.div>



        </motion.div>
    );
}

export default Card;
