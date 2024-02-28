import React, { useEffect } from "react";
import MenuItem from "./MenuItem";
import Sidebar from "../sidebar/Sidebar";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const menuData = [
    { id: 1, title: "Home" },
    { id: 2, title: "Features", dropdownList: ["item1", "item2", "item3", "item4"] },
    {
      id: 3, title: "Payment Products",
      dropdownList: ["item5", "item6", "item7", "item8"],
    },
    {
      id: 4, title: "Payment Gateway",
      dropdownList: ["item9", "item10", "item11", "item12"],
    },
    { id: 5, title: "More", dropdownList: ["item13", "item14", "item15", "item16"] },
    { id: 6, title: "Login"},
    { id: 7, title: "Signup"},
  ];


  

  const controls = useAnimation();
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

  useEffect(() => {
    if(innerWidth>375){
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const triggerPoint = 90;
  
        controls.start({
          color: scrollY > triggerPoint ? "rgb(0,0,0)" : "rgba(255,255,255)",
          boxShadow: scrollY > triggerPoint ? "0 8px 30px rgb(0,0,0,0.12)" : "none",
          transition: { duration: 0.2 },
        });
  
      }
      window.addEventListener("scroll", handleScroll);
      
    }
   

  }, [controls])

  return (
    <motion.div
      initial={{ color: "white" }}
      animate={controls}
      className="w-full fixed z-[999] top-0 md:backdrop-blur-sm  bg-transparent">
      <nav animate={controls} className="max-w-7xl mx-auto flex justify-between items-center  h-[60px] ">

        {/* sidebar */}
        <Sidebar data={menuData} />

        {/* logo image */}
        <img
          className="w-[100px]"
          src="/zypto-logo.png"
          alt=""
        />

        {/* nav menu */}
        <ul className="hidden gap-6 text-xs uppercase md:flex">
          {menuData.map((item, i) => (
            <MenuItem key={i} menuItem={item} />
          ))}
        </ul>

        {/* buttons */}
        <div className="gap-4 hidden md:flex">
          <button className=" text-xs uppercase font-semibold border-2 border-[#c6ffea] text-[#c6ffea] rounded-full px-3 py-2 ">
            Signup
          </button>
          <button className=" text-xs uppercase font-semibold bg-[#005578] text-white rounded-full px-4 py-2">
            Login
          </button>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
