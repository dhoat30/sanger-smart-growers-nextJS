import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import ListItemButton from '@mui/material/ListItemButton';
import Image from 'next/image';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { motion } from 'framer-motion'

function DesktopSubmenu({ data }) {

    const [showDropDown, setShowDropDown] = React.useState(false);
    const clickHandler = (e) => {
        e.preventDefault()
        setShowDropDown(!showDropDown);
    };


    // mu custom css 
    const listStyle = {
        padding: 0,
        position: "relative"
    }
    // animation variant 
    const variants = {
        open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
            }
        },
        closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
            }
        }
    }
    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.2 }
        }
    };

    const menu = data.subMenu.map((data, index) => {
        return (
            // add motion to child item for staggering effect
            <motion.li key={index} variants={itemVariants} className="submenu-item" onClick={() => setShowDropDown(false)}>
                <ListItemButton alignItems="center" sx={listStyle}>
                    <Link href={`/services${(data.slug)}`}   >
                        <ImageContainer>
                            <Image fill="true" src={data.image} alt={data.title} />
                        </ImageContainer>
                        <div className='content'>
                            <p className="body-large">{data.title} </p>
                            <p className="body-small"> {data.excerpt} </p>
                        </div>
                    </Link>
                </ListItemButton>
            </motion.li>
        )
    })


    return (
        <ParentList>
            <ListItemButton alignItems="center" sx={listStyle}>
                <LinkStyle
                    href={`${data.slug}`}
                    onClick={clickHandler}
                    className="body-large"

                >
                    <span>{data.title}</span>
                    {showDropDown ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
                </LinkStyle>

            </ListItemButton>
            <motion.ul
                className='elevation-light5'
                animate={showDropDown ? "open" : "closed"}
                variants={variants}>
                {menu}
            </motion.ul>
        </ParentList>
    )
}

export default DesktopSubmenu
const ParentList = styled.li`
position: relative; 
>ul{ 
    list-style: none;
    position: absolute;
    transform: translate(-50%, 0);
    left: 0; 

    border-radius: 8px; 
    max-width: 600px; 
    padding: 16px; 
    background:var(--sanger--theme--sys--light--surface) ;
    .submenu-item{ 
 
    }
}
    a{ 
        display: flex; 
        align-items: center; 
        .content{ 
            margin-left: 16px; 
            width: 300px; 
        }
    }



`
const ImageContainer = styled.div`
width: 200px; 
height: 120px; 
position: relative ;
img{ 
    object-fit: cover; 
}
margin: 4px 0; 
`
const LinkStyle = styled(Link)`
 padding: 8px 16px 9px 16px; 
 display: flex; 
`