import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 20,
    transition: { type: "spring", damping: 15, stiffness: 1000 },

  },
  animate: {
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 1000, damping: 15 }
  },

};

const AnimatedText = ({ data }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setTitleIndex((prevIndex) =>
        prevIndex + 1 < data.title.length ? prevIndex + 1 : 0
      );
    }, 9000);

    return () => {
      clearTimeout(titleTimeout);
    };
  }, [titleIndex]);


  useEffect(() => {
    const subTitleTimeout = setTimeout(() => {
      setSubtitleIndex((prevIndex) =>
        prevIndex + 1 < data.subtitle.length ? prevIndex + 1 : 0
      );
    }, 2990);


    return () => {
      clearTimeout(subTitleTimeout);
    };
  }, [subtitleIndex]);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className="text-5xl md:text-8xl flex flex-wrap gap-5 "
    >
      <motion.h1
        key={titleIndex}
        variants={variants}
      >
        {data.title[titleIndex]}
      </motion.h1 >
      <motion.h2
        className="font-bold text-[#50b2c0]"
        variants={variants}
        key={data.subtitle[subtitleIndex]}

      >
        {data.subtitle[subtitleIndex]}
      </motion.h2>
    </motion.div>
  );
};

export default AnimatedText;
