import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import ColumnTitle from '../Typography/ColumnTitle'
import Paragraph from '../Typography/Paragraph'
import styled from 'styled-components'
import Link from 'next/link'

function HorizontalScroll({ items }) {
    const [linkActive, setLinkActive] = useState({ activeIndex: 0 })
    const [hookedYPostion, setHookedYPosition] = React.useState(0);

    const contentRef1 = useRef(null)
    const contentRef2 = useRef(null)
    const contentRef3 = useRef(null)
    const contentRef4 = useRef(null)
    const testRef = useRef(null)
    const { scrollYProgress1 } = useScroll({ target: contentRef1, offset: ["end end", "start start"] });
    const { scrollYProgress2 } = useScroll({ target: contentRef2, offset: ["end end", "start start"] });
    const { scrollYProgress3 } = useScroll({ target: contentRef3, offset: ["end end", "start start"] });
    const { scrollYProgress4 } = useScroll({ target: contentRef4, offset: ["end end", "start start"] });


    const contentInView1 = useInView(contentRef1);
    const contentInView2 = useInView(contentRef2);
    const contentInView3 = useInView(contentRef3);
    const contentInView4 = useInView(contentRef4);



    const linkClickHandler = (index) => {
        setLinkActive({ activeIndex: index })
    }
    const containerVariants = {
        onscreen: {
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
            }
        },
        offscreen: {
        }
    }

    const imgVariants = {
        onscreen: {
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        offscreen: {
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };
    const contentVariants = {
        onscreen: {
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24, delay: 0.8 }
        },
        offscreen: {
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };
    const links = items.map((item, index) => {
        return (
            <Link
                key={index + 10}
                className={linkActive.activeIndex === index ? "active" : "link"}
                href={`#${(item.title.replace(/\s/g, '-').toLowerCase())}`}
                onClick={() => linkClickHandler(index)}
            >
                {item.title}
            </Link>
        )
    })
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
            variants={contentVariants}>
            <Paragraph singleListRow={true}
            >{item.content}</Paragraph>
        </motion.div>
    })
    const images = items.map((item, index) => {
        let inView
        if (index === 0) {
            inView = contentInView1
        }
        else if (index === 1) {
            inView = contentInView2
        }
        else if (index === 2) {
            inView = contentInView3
        }
        else if (index === 3) {
            inView = contentInView4
        }
        return (
            <motion.div
                style={{
                    opacity: inView ? 1 : 0,
                    // transition: inView ? null : "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    zIndex: index + 1
                }}
                key={item.image.ID}
                className={`image-container image-container${index + 1}`}

                variants={imgVariants} >
                <Image src={item.image.url} fill alt={item.title} />
            </motion.div>
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
border: solid red; 

padding: 120px 0; 
.sticky-wrapper{ 
    display: flex;
    justify-content: space-between; 
    align-items: flex-start; 
gap: 20px; 
border: solid red; 


.links-wrapper { 
    width: 200px;
    position: sticky ;
    top: 30vh; 
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    a{ 
        opacity: 0.4;
        display: inline-block; 
        margin-bottom: 24px; 
        padding-bottom: 4px; 
        border-bottom: 3px solid var( --sanger--theme--sys--dark--secondary); 
    } 
    .active{ 
        opacity: 1;
    }
}
.content-wrapper{ 
    width: 40%; 
   .content{ 
    height: 100vh;
    padding-top: 30vh;
    border: solid red; 
   }
}
.images-wrapper { 
    width: 50%; 
    position: sticky ;
    top: 30vh; 
    .image-container{ 
    position: absolute ;
    width: 100%; 
    height: 400px; 
    img{ 
        object-fit: cover; 
        position: absolute ;   
}
}

}




`