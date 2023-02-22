import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2';
import Toolbar from "@mui/material/Toolbar";



function Header({ logo, mainNav, services }) {
  const theme = useTheme();
  return (
    <AppBar position="fixed" sx={{ background: theme.palette.background.surface }}>
      <div className="max-width" >

        <Container disableGutters={true} maxWidth="false">

          <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <DesktopLogo logoData={logo} width={102} height={56} />
            <Navbar
              menuData={mainNav}
              services={services}
            />

            {/* mobile menu  */}

            <MobileLogo width={68} height={37.33} logoData={logo} />

          </Toolbar>

        </Container>

      </div>
    </AppBar>
  );
}
export default Header;
const DesktopLogo = styled(Logo)`
display: flex ;
align-items: center; 

@media(max-width: 1000px){ 
  display: none;
}
`
const MobileLogo = styled(Logo)`
display: none;
@media(max-width: 1000px){ 
  display: block;
}
`

