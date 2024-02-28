import React from "react";
import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },

  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },

  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ data }) => {
  return (
    <motion.div className="absolute w-full h-full flex flex-col justify-center items-center gap-5" variants={variants}>
      {data.map((menuItem) => (
        <motion.div variants={itemVariants}  key={menuItem.id}>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            href={`#${menuItem.id}`}

          >
            {menuItem.title}
          </motion.a>

          {/* sublist */}

          {/* {menuItem.dropdownList &&
            <ul className="">
              {menuItem.dropdownList.map((dropdownItem) => (
                <li key={dropdownItem}>{dropdownItem}</li>
              ))}
            </ul>

          } */}
        </motion.div>

      ))}
    </motion.div>
  );
};

export default Links;
