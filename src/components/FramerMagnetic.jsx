'use client';
import { motion } from 'framer-motion';
import { useRef, useState} from 'react';

export default function FramerMagnetic({children, scalingX, scalingY}) {
    
    const ref = useRef(null);
    const [position, setPosition] = useState({x: 0, y:0});
    // const scalingX = 0.3;
    // const scalingY = 1;

    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = scalingX*(clientX - (left + width / 2));
        const y = scalingY*(clientY - (top + height / 2));
        setPosition({x, y});
    }

    const mouseLeave = (e) => {
        setPosition({x: 0, y: 0})
    }

    const { x, y } = position;
    return (
        <motion.div
            onMouseMove = {mouseMove}
            onMouseLeave = {mouseLeave}
            ref = {ref}
            animate = {{x, y}}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap = {{ scale: 0.9}}
            transition = {{type: "spring", stiffness: 150, damping: 20, mass:0.1}}
            >
            {
                children
            }

        </motion.div>
    )
}