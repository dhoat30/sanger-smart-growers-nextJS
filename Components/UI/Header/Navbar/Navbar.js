import * as React from 'react';
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