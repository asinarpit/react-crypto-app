import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })

        }

        window.addEventListener("mousemove", mouseMove)
        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }

    }, [])






    return (

        <motion.div className='fixed w-[50px] h-[50px] rounded-full  bg-white z-[999] mix-blend-difference hidden md:flex' animate={{ x: position.x + 10, y: position.y + 10 }}>

        </motion.div>
    );
}

export default Cursor;
