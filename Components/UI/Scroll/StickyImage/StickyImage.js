import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

function StickyImage({ scrollYProgress, className, image, alt }) {
    return (
        <motion.div
            style={{
                opacity: scrollYProgress,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            // style={{
            //     opacity: scrollY,
            //     // transition: inView ? null : "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            //     zIndex: index + 1
            // }}
            className={`image-container ${className}`} >
            <Image
                src={image}
                fill
                alt={alt} />
        </motion.div>
    )
}

export default StickyImage