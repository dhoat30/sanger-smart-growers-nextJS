import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import ColumnTitle from '../Typography/ColumnTitle'
import Paragraph from '../Typography/Paragraph'
import styled from 'styled-components'
import Link from 'next/link'

function HorizontalScroll({ items }) {
    const [linkActive, setLinkActive] = useState({ activeIndex: 0 })
    const contentRef1 = useRef(null)
    const contentRef2 = useRef(null)
    const contentRef3 = useRef(null)
    const contentRef4 = useRef(null)

    const scrollYProgress1 = useScroll({ target: contentRef1, offset: ["start center", "end end"] }).scrollYProgress
    const scrollYProgress2 = useScroll({ target: contentRef2, offset: ["start center", "end end"] }).scrollYProgress
    const scrollYProgress3 = useScroll({ target: contentRef3, offset: ["start center", "end end"] }).scrollYProgress
    const scrollYProgress4 = useScroll({ target: contentRef4, offset: ["start end", "end end"] }).scrollYProgress

    // const scrollYProgress1 = useScroll({ target: contentRef1, offset: ["start center", "end end"] }).scrollYProgress
    // const scrollYProgress2 = useScroll({ target: contentRef2, offset: ["start center", "end end"] }).scrollYProgress
    // const scrollYProgress3 = useScroll({ target: contentRef3, offset: ["start center", "end end"] }).scrollYProgress
    // const scrollYProgress4 = useScroll({ target: contentRef4, offset: ["start end", "end end"] }).scrollYProgress


    const linkClickHandler = (index) => {
        setLinkActive({ activeIndex: index })
    }



    const content = items.map((item, index) => {
        let ref
        if (index === 0) {
            ref = contentRef1
        }
        else if (index === 1) {
            ref = contentRef2
        }
        else if (index === 2) {
            ref = contentRef3
        }
        else if (index === 3) {
            ref = contentRef4
        }
        return <motion.div
            ref={ref}
            key={index + 5}
            id={(item.title.replace(/\s/g, '-').toLowerCase())}
            className='content'
        >
            <Paragraph singleListRow={true}
            >{item.content}</Paragraph>
        </motion.div>
    })

    const links = items.map((item, index) => {
        let scroll
        if (index === 0) {
            scroll = scrollYProgress1
        }
        else if (index === 1) {
            scroll = scrollYProgress2
        }
        else if (index === 2) {
            scroll = scrollYProgress3
        }
        else if (index === 3) {
            scroll = scrollYProgress4
        }
        return (
            <Link

                key={index + 10}
                // className={linkActive.activeIndex === index ? "active" : "link"}
                href={`#${(item.title.replace(/\s/g, '-').toLowerCase())}`}
                onClick={() => linkClickHandler(index)}
            >
                <motion.span style={{
                    opacity: scroll ? scroll : "0.4",
                    zIndex: index + 1
                }}>
                    {item.title}
                </motion.span>

            </Link>
        )
    })
    const images = items.map((item, index) => {
        let scroll
        if (index === 0) {
            scroll = scrollYProgress1
        }
        else if (index === 1) {
            scroll = scrollYProgress2
        }
        else if (index === 2) {
            scroll = scrollYProgress3
        }
        else if (index === 3) {
            scroll = scrollYProgress4
        }

        return (
            <motion.div
                style={{
                    opacity: scroll,
                    zIndex: index + 1
                }}
                key={item.image.ID}
                className={`image-container image-container${index + 1}`}>
                <Image
                    src={item.image.url}
                    fill
                    alt={item.title}
                    sizes="(max-width: 900px) 100vw,
                50vw"
                />
            </motion.div >
        )
    })

    return (
        <Container as={motion.section}
            // initial="offscreen"
            // whileInView="onscreen"
            // viewport={{ amount: 0.6 }}
            // variants={containerVariants}
            className='max-width'>
            <div className='sticky-wrapper'>
                <div className='links-wrapper'>
                    {links}
                </div>
                <div className='content-wrapper'>
                    {content}
                </div>

                <div className='images-wrapper'>
                    {images}
                </div>
            </div>
        </Container>
    )
}

export default HorizontalScroll

const Container = styled.section`
position: relative;
 

padding: 120px 0; 
.sticky-wrapper{ 
    display: flex;
    justify-content: space-between; 
    align-items: flex-start; 
}

.links-wrapper { 
    width: 230px;
    position: sticky ;
    top: 30vh; 
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    a{ 
        span{ 
            margin-bottom: 24px; 
        padding-bottom: 4px; 
        border-bottom: 3px solid var( --sanger--theme--sys--dark--secondary); 
            display: inline-block; 
        }
    } 
    .active{ 
        opacity: 1;
    }
}
.content-wrapper{ 
    width: 500px; 
   .content{ 
    height: 100vh;
    padding-top: 50vh;
     
   }
}
.images-wrapper { 
    width: 50%; 
    height: 500px; 
    position: sticky ;
    top: 30vh; 
    margin-left:40px; 
    overflow: hidden ;
    .image-container{ 
    position: absolute ;
    width: 100%; 
    height: 500px; 

    img{ 
        object-fit: cover; 
        position: absolute ;   
        filter: contrast(120%);
filter: saturate(130%);
}
}
}
`