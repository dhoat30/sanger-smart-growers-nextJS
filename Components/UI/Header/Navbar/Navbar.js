import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import DesktopMenu from './DesktopMenu/DesktopMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileMenu from './MobileMenu/MobileMenu';





function Navbar({ menuData, services }) {


    const matches = useMediaQuery('(min-width:900px)');


    return (
        <>
            {matches &&
                <DesktopMenu menuData={menuData} services={services} />
            }
            {/* mobile menu  */}
            <MobileMenu menuData={menuData} services={services} />
        </>
    )
}

export default Navbar