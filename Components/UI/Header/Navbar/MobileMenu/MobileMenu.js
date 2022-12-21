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
import useMediaQuery from '@mui/material/useMediaQuery';
const pages = ['Products', 'Pricing', 'Blog'];

function MobileMenu({ menuData, services }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const menu = menuData.map(data => {
        if (data.url === "/our-services") {
            return (
                <li key={data.ID}>
                    <MenuItem divider={true} sx={{ width: "100%" }} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{data.title}</Typography>
                    </MenuItem>
                </li>

            )
        }
        if (data.menu_item_parent === "0") {
            return <li key={data.ID}>
                <MenuItem divider={true} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{data.title}</Typography>
                </MenuItem>
            </li>
        }




    })


    return (
        <Box sx={{

            flexGrow: 1, display: { xs: 'flex', md: 'none' }
        }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                    padding: "8px"

                }}
            >
                <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {menu}
            </Menu>
        </Box>
    )
}

export default MobileMenu
