import { useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const items = [
    {
        title: "Prepaid Virtual Cards",
        desc: "Virtual prepaid Visa/Mastercard to use online or add to Google/Apple Pay.",
        img: "/virtual-cards.png",
        link: "",
    },
    {
        title: "Physical Crypto Cards",
        desc: "Physical crypto-funded prepaid cards for your everyday spending.",
        img: "/physical-cards.png",
        link: "",

    },
    {
        title: "Gift Cards",
        desc: "Choose from over 8500 gift cards for many popular brands and stores.",
        img: "/gift-cards.png",
        link: "",

    },
    {
        title: "Bill Payments",
        desc: "Choose from over 20k companies in the USA, including banks, utility companies and more.",
        img: "/bill-payment.png",
        link: "",

    }
]



const Faq = () => {
    const ref = useRef();

    const [activeIndex, setActiveIndex] = useState(0);

    const updateActiveIndex = (value) =>{
        setActiveIndex(value);
    }

    



    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })


    const rotateACW = useTransform(scrollYProgress, [0, 1], ["0deg", "-450deg"])


    const rotateCW = useTransform(scrollYProgress, [0, 1], ["0deg", "450deg"])


    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])




    return (
        <div ref={ref} >

            <motion.div className='sticky top-0 w-full h-screen bg-gradient-to-r from-[#005578] to-[#50b2c0] overflow-hidden'>


                <motion.div className='w-full h-full max-w-7xl m-auto flex  items-center mt-10 md:mt-0'>

                    {/* Text container */}

                    <motion.div className='text-white flex flex-col gap-10 md:gap-5  md:max-w-[50%] px-5'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-3xl md:text-5xl'>Welcome to Zypto Pay</h1>
                            <p>Purchase prepaid virtual cards, apply for our physical crypto-funded cards, pick from 1000s of gift cards for top brands around the world or even your bills. All available with a wide range of cryptocurrency payment options.</p>

                        </div>

                        <div className='flex flex-col h-[200px] md:h-[300px] w-[350px]  md:w-[600px] overflow-hidden'>
                            <motion.div style={{ y }} className='flex flex-col'>
                                <div className='flex flex-col h-[200px] md:h-[300px] w-[350px] md:w-[600px] p-5 '></div>

                                {items.map((item, index) => (
                                    <ProductCard onUpdate={updateActiveIndex}  key={index} data={item} />
                                ))}

                            </motion.div>

                        </div>


                    </motion.div>


                    {/* Circular Caraousel */}
                    <motion.div className='absolute top-[60px] right-[-210px] hidden md:flex'>
                        <motion.div style={{ rotate: rotateACW }} className='relative w-[600px] h-[600px] border-2 rounded-full'>
                            <motion.div className='absolute w-[100px] h-[100px] bg-yellow-200 top-[-50px] left-[250px] rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]   '>
                            </motion.div>
                            

                            <motion.div className='absolute w-[100px] h-[100px] bg-pink-200 top-[250px] left-[-50px] rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  '></motion.div>

                            <motion.div className='absolute w-[100px] h-[100px] bg-green-200 top-[250px] right-[-50px] rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]   '></motion.div>

                            <motion.div className='absolute w-[100px] h-[100px] bg-blue-200 left-[250px] bottom-[-50px]   rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] '></motion.div>

                        </motion.div>

                    </motion.div>

                    <motion.div className='absolute top-[60px] right-[-210px] scale-[60%] hidden md:flex'>
                        <motion.div style={{ rotate: rotateCW }} className='relative w-[600px] h-[600px] border-2 rounded-full'>
                            <motion.div className='absolute w-[100px] h-[100px] top-[-50px] left-[250px]  rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                            <img className='w-full h-full object-cover' src="/doge-logo.png" alt="" />

                            </motion.div>



                            <motion.div  className='absolute w-[100px] h-[100px]  top-[250px] left-[-50px]  rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                            <img className='w-full h-full object-cover' src="/btc-logo.png" alt="" />

                            </motion.div>


                            <motion.div className='absolute w-[100px] h-[100px] top-[250px] right-[-50px]  rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                            <img className='w-full h-full object-cover' src="/eth-logo.png" alt="" />

                            </motion.div>

                            <motion.div className='absolute w-[100px] h-[100px]  left-[250px] bottom-[-50px]  rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                            <img className='w-full h-full object-cover' src="/usdc-logo.png" alt="" />
                            </motion.div>

                        </motion.div>

                    </motion.div>







                </motion.div>


                {/* Indicators */}
{/* 
                <div className='absolute w-full bottom-[50px]'>

                    <div className='flex max-w-max mx-auto gap-5'>
                        <a href="#product1">
                            <div onClick={() => setActiveIndex(0)} className={`border h-[20px] w-[20px] rounded-full ${activeIndex === 0 && 'bg-white'}`}></div>

                        </a>
                        <a href="#product2">
                            <div onClick={() => setActiveIndex(1)} className={`border h-[20px] w-[20px] rounded-full ${activeIndex === 1 && 'bg-white'}`}></div>

                        </a>
                        <a href="#product3">
                            <div onClick={() => setActiveIndex(2)} className={`border h-[20px] w-[20px] rounded-full ${activeIndex === 2 && 'bg-white'}`}></div>

                        </a>
                        <a href="#product4">
                            <div onClick={() => setActiveIndex(3)} className={`border h-[20px] w-[20px] rounded-full ${activeIndex === 3 && 'bg-white'}`}></div>

                        </a>





                    </div>


                </div> */}


            </motion.div>

            {/* extra sections to preserve scroll styling */}
            <section id='product1'></section>
            <section id='product2'></section>
            <section id='product3'></section>
            <section id='product4'></section>
        </div>




    );
}

export default Faq;
