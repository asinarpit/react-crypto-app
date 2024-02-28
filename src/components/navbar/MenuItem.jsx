import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

const variants = {
  hidden: {
    display: "none",
    opacity: 0,
    height: 0,
  },

  visible: {
    display: "flex",
    opacity: 1,
    height: 200,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

const MenuItem = ({ menuItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const title = menuItem.title;
  const dropdownList = menuItem.dropdownList;
  return (
    <motion.li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative text-center flex items-center gap-2  font-semibold cursor-pointer"
    >
      <motion.a
        className="py-3"
        href="#home"
      >
        {title}
      </motion.a>

      {/* show icon if it's a dropdown */}
      {dropdownList && (
        <motion.span animate={isHovered ? { rotate: 90 } : { rotate: 0 }}>
          <IoIosArrowForward size={12} />
        </motion.span>
      )}

      {/* dropdown menu */}

      {dropdownList && (
        <motion.ul
          initial="hidden"
          variants={variants}
          animate={isHovered ? "visible" : "hidden"}
          className="absolute top-[40px] left[-30px] flex flex-col items-center w-[150px] p-5 bg-white shadow-xl overflow-hidden text-black border-t-4 border-[#005578]"
        >
          {dropdownList.map((item, i) => (
            <motion.li
              className="rounded-sm w-full py-3"
              whileHover={{ backgroundColor: "rgba(0,0,0,0.06)" }}
              key={i}
            >
              <motion.a href="#">{item}</motion.a>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.li>
  );
};

export default MenuItem;
