import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
function BottomNav() {
    const [value, setValue] = React.useState(0);
    const router = useRouter()

    return (
        <Container className="elevation-light5">
            <Box sx={{
                width: "100%"
            }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction className='bottom-nav-item' label="Home" icon={<HomeOutlinedIcon />} onClick={() => router.push("/")} />
                    <BottomNavigationAction className='bottom-nav-item' label="Jobs" icon={<AgricultureOutlinedIcon />} onClick={() => router.push("/work-with-us/")} />
                    <BottomNavigationAction className='bottom-nav-item' onClick={() => router.push("/#our-services")} label="Our Services" icon={<FormatListNumberedOutlinedIcon />} />
                </BottomNavigation>
            </Box>
        </Container >

    );
}

export default BottomNav

const Container = styled.div`
@media(min-width: 500px){ 
    display: none; 
}
position: fixed;
bottom: 0; 
left: 0;
right: 0;
z-index: 1000; 
span{ 
    opacity: 1; 
    font-size: 0.875rem;
}
`