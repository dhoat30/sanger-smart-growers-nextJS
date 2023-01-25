import * as React from 'react';

import ListItemButton from '@mui/material/ListItemButton';


import Link from 'next/link';
import styled from 'styled-components';
import DesktopSubmenu from './DesktopSubmenu';
function DesktopMenu({ menuLinks }) {
    const listStyle = {
        padding: 0,
        position: "relative"
    }


    const menu = menuLinks.map((data, index) => {
        if (data.subMenu) {
            return (
                <DesktopSubmenu data={data} key={index} />
            )
        }
        else {
            return (
                <li key={index} >
                    <ListItemButton alignItems="center" sx={listStyle}>
                        <Link legacyBehavior href={`${data.slug}`} passHref>
                            <a className='body-large main-nav-link'>{data.title}</a>
                        </Link>
                    </ListItemButton>
                </li>
            )
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
>li{ 
    .main-nav-link{ 
        padding: 8px 16px; 
        display: block;
       
    }
}
`
