import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
function DesktopMenu({ menuData, services }) {
    const [open, setOpen] = React.useState(true);

    const handleClick = (e) => {
        e.preventDefault()
        setOpen(!open);
    };
    // services submenu 
    const subMenu = services.map((data, index) => {
        return (
            <li key={index}>
                <ListItemButton alignItems="center">
                    <ImageContainer>
                        <Image src={data.image.url} layout="fill" />

                    </ImageContainer>
                    <Link href={`/${data.slug}`} passHref>
                        <a>
                            <p class="body-large">{data.title} </p>
                            <p class="body-small"> {data.excerpt} </p>
                        </a>

                    </Link>
                </ListItemButton>
            </li>
        )
    })
    const menu = menuData.map(data => {
        if (data.url === "/our-services") {
            return (
                <li key={data.ID}>
                    <ListItemButton alignItems="center" >
                        <Link href={data.url} passHref >
                            <a className='body-large' onClick={handleClick} >{data.title}

                            </a>
                        </Link>
                        {!open ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}


                    </ListItemButton>
                    {!open && <SubmenuUL>
                        {subMenu}
                    </SubmenuUL>}

                </li>

            )
        }
        if (data.menu_item_parent === "0") {
            return <li key={data.ID}>
                <ListItemButton alignItems="center">
                    <Link href="/" passHref>
                        <a className='body-large'>{data.title}</a>
                    </Link>
                </ListItemButton>
            </li>
        }




    })

    return (

        <UnorderedList>
            {menu}

        </UnorderedList>
    );
}

export default DesktopMenu

const UnorderedList = styled.ul`
display: flex; 
list-style: none; 
position: relative; 

`
const SubmenuUL = styled.ul`
    list-style: none; 
    position: absolute;
    border-radius: 8px; 
    background: var(  --sanger--theme--sys--light--surface);
    box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3);
    max-width: 600px; 
    padding: 16px; 
    a{ 
        width: 300px; 
        margin-left: 16px
    }
`

const ImageContainer = styled.div`
width: 120px; 
height: 120px; 
position: relative ;
img{ 
    object-fit: cover; 
}
`