import React from 'react';
import Button from '../button/Button';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Card from '../card/Card';

const variants = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            duration: 0.5
        }
    }
}

const itemVariants = {
    hidden: {
        y: 50,
        x: 50,
        opacity: 0
    },
    visible: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }

}

const cardData = [
    {
        id: 1,
        img: "/zypto-vault.png",
        title1: "Zypto Vault",
        subtitle: "Top tier wallet security the easy way",
        title2: "Easier than a bank account",
        desc: "Zypto Pay runs on our ISO and CCSS Level 3 certified vault system. We take care of all the complicated stuff so you can concentrate on your business.",
        btn: "Get started!"
    },
    {
        id: 2,
        img: "/e-commerce.png",
        title1: "E-commerce & In-Person",
        subtitle: "Use our plugins, soft-POS or API",
        title2: "Utilities, credit cards, mortages, car loans...",
        desc: "Zypto Pay has prebuilt plugins for Woocommerce, Prestashop and Adobe commerce, with more coming soon. Our API can be integrated with practically anything!",
        btn: "Get started!"
    },
    {
        id: 3,
        img: "/economical.png",
        title1: "Economical",
        subtitle: "Transaction fees from 0%",
        title2: "Save money with crypto",
        desc: "Our fee structure and crypto holders' willingness to pay for convenience make Zypto Pay more economical than card processing.",
        btn: "Sign up today!"
    },
    {
        id: 4,
        img: "/zero-risk-payment.png",
        title1: "Zero Risk Payments",
        subtitle: "No chargebacks, no volatility risk...",
        title2: "We take the risk out of crypto",
        desc: "Smart solutions to avoid volatility and the highest level of security features coupled with zero chargebacks make Zypto Pay the smart choice.",
        btn: "Sign up today!"
    },
]

const features1 = ["Accept crypto payments quickly, easily and economically.", "No need to create your own crypto wallets.", "Integration is as simple as any other payment gateway.", "Open an account in minutes.", "Pre-built plugins and simple API to automate your company's crypto payments."]

const features2 = ["Accept all kinds of cryptocurrencies with no previous knowledge required.",
    "Choose to keep crypto or to convert to local currency.",
    "Avoid volatility with stablecoins and smartswap.",
    "Pre-built plugins available for e-commerce.",
    "Generate payment links in seconds.",
    "24/7 support available."

]

const Features = () => {
    const ref1 = useRef();
    const ref2 = useRef();
    const isInView1 = useInView(ref1, { margin: "-100px" });
    const isInView2 = useInView(ref2, { margin: "-100px" });
    return (

        <div id='features ' className='bg-gradient-to-r from-[#005578] to-[#50b2c0]'>
            <section ref={ref1} >
                <div className='w-full max-w-7xl mx-auto h-full flex items-center p-5 gap-10 justify-between overflow-hidden '>

                    {/* text container */}
                    <motion.div variants={variants} initial="hidden" animate={isInView1 ? "visible" : "hidden"} className='text-white flex flex-col gap-5 w-full max-w-[50%]'>
                        <motion.h1 className='text-5xl'>Zypto Pay Features</motion.h1>
                        <motion.ul variants={variants} className='list-disc '>

                            {
                                features1.map((item, i) => (
                                    <motion.li variants={itemVariants} className='mb-3 text-lg' key={i}>{item}</motion.li>
                                ))
                            }


                        </motion.ul>

                        <motion.div variants={variants}>

                            <Button bgColor="#c6ffea" textColor="black" text="Sign up to get started" padding="1rem" />
                        </motion.div>
                    </motion.div>

                    {/* Logo svg */}
                    <div className='w-full flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={400} height={400} viewBox="0 0 544 548" >
                            <motion.path

                                fill='rgba(255,255,255,0)'
                                stroke='white'
                                strokeWidth={5}
                                initial={{ pathLength: 0 }}
                                animate={isInView1 ? { pathLength: 1, fill: "rgba(255,255,255,1)" } : { pathLength: 0, fill: "rgba(255,255,255,0)" }}
                                transition={{ pathLength: { duration: 2 }, fill: { delay: 2, duration: 0.5 } }}


                                fillRule="evenodd"
                                d="M62 26.567c-19.117 4.139-34.591 18.838-40.388 38.365C20.181 69.755 20 80.595 20 161.727v91.364l2.414 2.414c6.05 6.05 11.089 4.238 20.208-7.268 28.813-36.358 67.482-68.249 109.128-90 6.737-3.519 12.924-7.362 13.75-8.54 2.551-3.642 1.716-7.298-4.5-19.697-6.674-13.313-7.278-16.813-3.545-20.545l2.454-2.455h140.742l2.026 2.25c3.011 3.346 3.461 5.507 1.883 9.056-.781 1.757-19.789 27.488-42.24 57.18-30.484 40.316-41.534 54.234-43.638 54.967-5.094 1.773-7.526-.673-14.807-14.893-7.149-13.963-9.382-16.56-14.243-16.56-3.709 0-23.409 10.462-38.766 20.589C127.463 235.02 98.78 261.451 82.053 283c-33.646 43.346-54.312 93.566-60.49 147-2.141 18.521-2.114 49.78.049 57.068 4.308 14.51 15.018 27.678 27.497 33.806 13.114 6.44.427 6.091 221.391 6.091 170.607 0 202.022-.216 207.757-1.432 14.919-3.161 29.924-14.515 36.487-27.608 6.466-12.901 6.256-9.262 6.256-108.17 0-98.93.354-93.39-6.115-95.645-6.091-2.124-8.097-.759-20.224 13.761-28.582 34.22-64.394 63.654-102.161 83.966-22.481 12.092-22.176 11.393-13.069 29.93 3.613 7.354 6.569 14.485 6.569 15.847s-1.105 3.581-2.455 4.931L381.091 445h-70.546c-68.909 0-70.591-.046-72.52-1.975-2.459-2.459-3.551-6.562-2.399-9.011.481-1.022 19.324-26.398 41.874-56.39 27.552-36.645 41.885-54.907 43.699-55.678 5.689-2.416 7.666-.57 15.412 14.393 3.911 7.556 7.961 14.381 9 15.167 3.465 2.623 7.435 1.631 20.293-5.071 25.202-13.137 47.582-29.747 69.183-51.348 55.977-55.977 85.892-128.275 85.91-207.627.003-16.953-1.178-23.259-6.253-33.385-6.563-13.093-21.568-24.447-36.487-27.608-10.015-2.123-406.435-2.027-416.257.1"
                            />
                        </svg>

                    </div>

                </div>



            </section>


            <section className='overflow-hidden '  >

                {/* wrapper */}
                <div ref={ref2} className='w-full h-full max-w-7xl mx-auto flex justify-between items-center  '>
                    {/* text container */}
                    <motion.div variants={variants} initial="hidden" animate={isInView2?"visible":"hidden"} className='max-w-[30%] border border-white rounded-md p-5 '>
                        <motion.ul variants={variants} className='list-disc text-white list-inside '>
                        {
                                features2.map((item, i) => (
                                    <motion.li variants={itemVariants} className='mb-5  text-lg' key={i}>{item}</motion.li>
                                ))
                            }
                        </motion.ul>

                    </motion.div>

                    {/* card grid container  */}
                    <motion.div initial="hidden" animate={isInView2 ? "visible" :"hidden"} variants={variants} className='grid grid-cols-2 place-items-center gap-10 '>

                        {cardData.map((item) => (
                            <motion.div variants={itemVariants}>

                            <Card data={item} />
                            </motion.div>
                        ))}




                    </motion.div>


                </div>

            </section>

        </div>
    );
}

export default Features;
