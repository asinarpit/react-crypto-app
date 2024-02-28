import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useTransform } from "framer-motion";
import Button from "../button/Button";




const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },


  animate: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1
    }
  }
}


const imgVariants = {
  initial: {
    top: -500,
    right: -500,
    rotate: 90

  },

  animate: {
    top: 50,
    right: 100,
    rotate: 340,
    transition: {
      duration: 1,
    }
  }
}



const Home = () => {

  const textData = { title: ["Earn", "Spend"], subtitle: ["Safer", "Faster", "Smarter"] }
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  
  
  const imgRotate = useTransform(scrollYProgress, [0, 1], ["340deg", "90deg"])

  const imgTranslateX = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])
  const imgTranslateY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const imgOpacity = useTransform(scrollYProgress, [0, 1], ["1", "0"])

  const textTranslateY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])




  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/home-bg.jpg"
        className="w-full h-full object-cover absolute -z-10"
        alt=""
      />
      <div className="w-full max-w-7xl mx-auto h-full flex items-center p-5 text-gray-100 text-left">



        <motion.div
          initial="initial"
          animate="animate"
          variants={textVariants}
          style={{ translateY: textTranslateY }}

          className="flex flex-col w-[60%] gap-8 justify-center">
          <AnimatedText data={textData} />
          <motion.p variants={textVariants} className="text-sm tracking-wider md:text-lg ">Spend your crypto your way with Zypto Pay.

            Earn more with the only tool your company needs to tap into the global blockchain economy.</motion.p>

          {/* Buttons */}

          <motion.div variants={textVariants} className="flex gap-5">
            <Button text="Spend Your Crypto" bgColor="#c6ffea" textColor="black" padding={innerWidth<=375?"0.5rem":"1rem"} />
            <Button text="Merchant Dashboard" bgColor="#50b2c0" textColor="white"  padding={innerWidth<=375?"0.5rem":"1rem"} />
          </motion.div>

        </motion.div>


        {/* Animated Image  */}
        <motion.img
          style={{
            rotate: imgRotate,
            translateX: imgTranslateX,
            translateY: imgTranslateY,
            opacity:imgOpacity
            
          }}

          className="absolute w-[500px] drop-shadow-2xl hidden md:flex"
          variants={imgVariants}
          initial="initial"
          animate="animate"
          src="/crypto-mobile.png" alt="" />
      </div>

    </div>
  );
};

export default Home;
