import React, { useRef } from 'react';
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
        img: "/virtual-cards.png",
        title1: "Virutal Crypto Cards",
        subtitle: "Get your virutal cards in minutes",
        title2: "The quickest crypto cards",
        desc: "TSimply pick which card type you want, pay with crypto through Zypto Pay and receive your card by email in minutes. Add them to Google/Apple Pay or pay online.",
        btn: "Get started!"
    },
    {
        id: 2,
        img: "/bill-payment.png",
        title1: "Bill payments",
        subtitle: "Over 20k US Payees",
        title2: "Utilities, credit cards, mortages, car loans...",
        desc: "Zypto Pay's bill payments service allows you to pay almost any bill in the US with crypto.",
        btn: "Get started!"
    },
    {
        id: 3,
        img: "/physical-cards.png",
        title1: "Physical Crypto Cards",
        subtitle: "The most versatile option",
        title2: "High limit global cards",
        desc: "With balance and transaction limits of up to $150k and availability in many countries, our physical cards are the ideal way to spend your crypto.",
        btn: "Apply today!"
    },
    {
        id: 4,
        img: "/gift-cards.png",
        title1: "Buy Gift Cards",
        subtitle: "Over 8500 options for all your needs",
        title2: "The cheapest option",
        desc: "Looking for the perfect gift or you know exactly what you want to buy? There are over 8500 gift cards available to buy through Zypto Pay.",
        btn: "Get started!"
    },
]



const CryptoSpending = () => {

    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div ref={ref} className='overflow-hidden relative w-full h-full flex flex-col'>

            <motion.div initial="hidden" variants={variants} animate={isInView ? "visible" : "hidden"} className='w-full h-full max-w-7xl mx-auto flex flex-col justify-center items-center  gap-10 p-5 md:p-0 mt-10 md:mt-0 '>


                {/*text container  */}

                <motion.div variants={variants} className='text-center flex flex-col gap-5'>
                    <h2 className='text-3xl md:text-7xl font-semibold'>Ready to spend your crypto?</h2>
                    <p className='md:text-xl font-medium text-gray-600'>Zypto is on a mission to get companies around the world to accept direct crypto payments, but this will take some time. Meanwhile, we are proud to offer an extensive range of products that make it simple to spend your crypto wherever you want to buy.

                    </p>

                </motion.div>

                {/* cards container */}
                <motion.div variants={variants}
                    className='grid md:grid-cols-4 gap-5'>
                    {cardData.map(item => (
                        <Card key={item.id} data={item} />
                    ))}
                </motion.div>
            </motion.div>





        </motion.div>
    );
}

export default CryptoSpending;
