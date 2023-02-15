import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowIcon from '../../../../Icons/ArrowIcon'
import { motion } from 'framer-motion'

function SubmenuLink({ title, subMenuLinks, onClickChild }) {
    const [showSubMenu, setShowSubMenu] = useState(false)

    const menuVariants = {
        show: {
            scale: 1,
            y: 0,
            display: "block",
            transition: {
                type: "spring",
                duration: 0.4,
                delayChildren: 0.2,
                staggerChildren: 0.05,
            },
        },
        hide: {
            scale: 0,
            y: "-50%",
            display: "none",
            transition: {
                type: "spring",
                duration: 0.4,
            },
        }
    }

    const linksVariant = {
        show: {
            x: 0,
            opacity: 1
        },
        hide: {
            opacity: 0,
            x: -10,
        }
    }
    const iconVariants = {
        show: {
            transform: "rotate(90deg)",
            transition: {
                type: "spring",
                duration: 0.4,

            }
        },
        hide: {
            transform: "rotate(0deg)",
            transition: {
                type: "spring",
                duration: 0.4,

            }
        }
    }
    const clickHandler = () => {
        onClickChild(false)
    }
    const links = subMenuLinks.map((item, index) => {
        return (
            <motion.li variants={linksVariant} key={index}>
                <Link onClick={clickHandler} className='title-large' href={`/services${item.slug}`}>{item.title}</Link>
            </motion.li>
        )
    })

    return (
        <SubmenuWrapper >
            <span className='title-large' onClick={() => setShowSubMenu(showSubMenu ? false : true)}>{title}
                <motion.svg
                    animate={showSubMenu ? "show" : "hide"}
                    variants={iconVariants}
                    width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701M3.5 12.0001H20.33" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
            </span>
            <motion.ul
                initial="hide"
                animate={showSubMenu ? "show" : "hide"}
                variants={menuVariants}
            >
                {links}
            </motion.ul>
        </SubmenuWrapper >
    )
}

export default SubmenuLink
const SubmenuWrapper = styled.div`

    span{ 
        display: flex ;
        align-items: center; 
        justify-content: space-between; 
        cursor: pointer; 
   
    }
    ul{ 
        list-style: none ;
        padding-left: 16px; 
        li{ 
            color: var( --sanger--theme--sys--light--on-surface-variant); 
         a{ 
            @media(max-width: 600px){ 
            font-size: 16px;
        }
         }
               
        }
    }
`