import React, { useRef } from 'react';
import LogoSlider from '../logo-slider/LogoSlider';
import Card from '../card/Card';
import { motion, useInView } from 'framer-motion';
const variants = {
    hidden: {
        opacity: 0,
        y: 100,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            staggerChildren: 0.2,
            duration: 0.5,



        }
    }


}

const cardData = [
    {
        id: 1,
        img: "/accept-crypto-pay.png",
        title1: "Accept Crypto Payment",
        title2: "Welcome, innovators!",
        desc: "The easiest way to accept crypto. Stay ahead of the competition with Zypto Pay",
        btn: "Get started!"
    },
    {
        id: 2,
        img: "/spend-your-crypto.png",
        title1: "Spend Your Crypto",
        title2: "Crypto to spend?",
        desc: "Try our physical cards, virtual cards, gift cards and bill payments today!",
        btn: "Go Shopping!"
    }
]



const Intro = () => {

    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div ref={ref} className='overflow-hidden relative w-full h-full flex flex-col'>

            <motion.div initial="hidden" variants={variants} animate={isInView ? "visible" : "hidden"} className='w-full h-full mt-10 md:mt-0 max-w-7xl mx-auto flex flex-col justify-center items-center gap-10 p-5 '>


                {/*text container  */}

                <motion.div variants={variants} className='text-center flex flex-col gap-5'>
                    <h2 className='text-4xl md:text-6xl font-semibold'>Pay and get paid in crypto</h2>
                    <p className='font-medium md:text-xl  text-gray-600'>Zypto Pay offers a full suite of products for companies that want to accept crypto payments and people that want to spend their cryptocurrency.

                    </p>

                    <p className='text-gray-600 font-medium text-sm md:text-lg'>From Q1 2024, download <a href="#" className='text-[#005578] font-bold'>Zypto App… </a>the best way to manage and spend your crypto.</p>
                </motion.div>

                {/* cards container */}
                <motion.div variants={variants}
                    className='grid md:grid-cols-2 gap-10'>
                    {cardData.map(item => (
                        <Card key={item.id} data={item} />
                    ))}
                </motion.div>
            </motion.div>





        </motion.div>
    );
}

export default Intro;
