import React, { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";
import Links from "./Links";

const variants = {
  open: {
    clipPath: "circle(1200px at 40px 30px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },

  closed: {
    clipPath: "circle(20px at 40px 30px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const SideBar = ({data}) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="flex md:hidden justify-center items-center bg-white text-black  "
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="bg-[#005578] text-white fixed h-screen z-[999] top-[0px] left-[0px] bottom-0 w-[300px] rounded-r-3xl rounded-br-3xl  rounded-tl-none shadow-lg  "
        variants={variants}
      >

        {/* Menu Links */}
        <Links data={data} />
      </motion.div>

      {/* Toggle Button */}
      <ToggleButton setOpen={setOpen} />

      {/* Overlay */}
      {open && (
        <motion.div className="fixed w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.3)]">

        </motion.div>
      )}
    </motion.div>
  );
};

export default SideBar;
