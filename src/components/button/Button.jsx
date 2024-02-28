import React from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from "react-icons/io";
const iconVariants = {
    hidden: {
      x: -100,
      opacity: 0
    },
  
    hover: {
      x: -3,
      opacity: 1
    }
  }


const Button = ({text, bgColor, textColor, padding}) => {
    return (
        <motion.button
              initial="hidden"
              whileHover="hover"
              style={{backgroundColor:bgColor, color:textColor, padding}}
              className=" text-black text-sm font-semibold rounded-full whitespace-nowrap relative  hover:scale-105 size-max">
              {text}
              <motion.span
                className="absolute"
                variants={iconVariants}
              ><IoIosArrowForward size={20} />
              </motion.span>


            </motion.button>
    );
}

export default Button;
