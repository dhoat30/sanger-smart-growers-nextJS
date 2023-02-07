import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';
import Link from 'next/link';
import SubmenuLink from './SubmenuLink/SubmenuLink';
import { motion } from 'framer-motion'
import PrimaryButton from '../../../Buttons/PrimaryButton'
function MobileMenu({ menuLinks }) {
    const [showDropDown, setShowDropDown] = useState(false)
    const [active, setActive] = useState({ index: null })
    const activeStyle = {
        color: "var(--sanger--theme--sys--light--tertiary)"
    }

    const menuVariants = {
        show: {
            scale: 1,
            y: 0,
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

    const links = menuLinks.map((item, index) => {
        if (item.subMenu) {
            return (
                <motion.li key={index} variants={linksVariant} onClick={() => setActive({ index: index })}  >
                    <SubmenuLink title={item.title} subMenuLinks={item.subMenu} onClickChild={() => setShowDropDown(false)} />
                </motion.li>
            )
        }
        return (
            <motion.li style={active.index === index && activeStyle} key={index} variants={linksVariant} onClick={() => setActive({ index: index })}>
                <Link className='title-large' href={item.slug} onClick={() => setShowDropDown(false)}>{item.title}</Link>
            </motion.li>
        )

    })


    return (
        <MenuWrapper>
            <div className='icons-wrapper'>
                {showDropDown ?
                    <CloseIcon sx={{ fontSize: "3rem" }}
                        onClick={() => setShowDropDown(false)}
                    />
                    :
                    <MenuIcon sx={{ fontSize: "3rem" }}
                        onClick={() => setShowDropDown(true)}
                    />
                }
            </div>
            {
                showDropDown &&
                <motion.div className="dropdown-wrapper"
                    initial="hide"
                    animate={showDropDown ? "show" : "hide"}
                    variants={menuVariants}
                >
                    <ul className='main-category-wrapper'>
                        {links}

                        <PrimaryButton
                            onClick={() => setShowDropDown(false)}
                            href="/work-with-us"
                            callToActionText="JOIN OUR TEAM"
                            variant="contained" />

                    </ul>
                </motion.div>
            }

        </MenuWrapper >
    )
}

export default MobileMenu

const MenuWrapper = styled.div`
    .dropdown-wrapper{ 
        position: fixed; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    z-index: 10; 
    background: var(--sanger--theme--sys--light--surface);
    top: 60px; 
    border-top: 1px solid var(--sanger--theme--sys--light--surface-variant);
        @media(max-width: 600px){ 
            top: 56px; 
        }
    .main-category-wrapper{ 
        margin: 40px 40px;
        list-style: none ; 
        @media(max-width: 600px){ 
            margin: 16px;
        }
        @media(max-width: 350px){ 
                    margin: 16px 8px; 
        }
        li{ 
            a{ 
                padding: 16px 0; 
                display: block;
                @media(max-width: 600px){ 
                    padding: 10px 0; 
        }
            }
            div{ 
                padding: 16px 0; 
            }
        }
        button{ 
            margin-top: 16px; 
        }
    }
    }
`
