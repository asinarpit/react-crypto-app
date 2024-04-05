import React, { useState } from 'react';

import { motion } from 'framer-motion';
import Button from '../button/Button';

const variants = {
    hidden: {
        opacity: 0,


    },

    visible: {
        opacity: 1,

        transition: {
            duration: 1.5
        }
    }
}
const ProductCard = ({ data }) => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setInnerWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);



    return (
        <motion.div initial="hidden" whileInView="visible" variants={variants} className='h-[200px] md:h-[300px] w-full md:w-[600px] flex  '>
            <div className='w-full h-full'>
                <img className='w-full h-full object-cover' src={data.img} alt="" />

            </div>

            <div className=" w-full h-full flex flex-col justify-between  items-center text-center p-4 ">

                <h2 className='text-xl font-semibold md:text-4xl'>{data.title}</h2>
                <p className='text-sm md:text-lg'>{data.desc}</p>
                <Button bgColor="#c6ffea" text="FAQs and Conditions" padding={innerWidth>375?"1rem": "0.6rem"} />
            </div>

        </motion.div>
    );
}

export default ProductCard;
