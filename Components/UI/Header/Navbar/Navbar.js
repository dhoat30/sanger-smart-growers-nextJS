import * as React from 'react';
import DesktopMenu from './DesktopMenu/DesktopMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileMenu from './MobileMenu/MobileMenu';

const menuLinks = [
    {
        slug: "/",
        title: "Home"
    },
    {
        slug: "/our-services",
        title: "Our Services",
        subMenu: [
            {
                slug: "/kiwifruit-orchard-management",
                title: "Kiwifruit Orchard Management",
                image: "https://data.sangergrowers.co.nz/wp-content/uploads/2022/12/143A60961.jpg",
                excerpt: "We work on a wide range of orchard management projects, so whether you're a landowner or a commercial grower, our expert staff will collaborate with you to suit your individual needs."
            },
            {
                slug: "/kiwifruit-orchard-contracting",
                title: "Kiwifruit Orchard Contracting",
                image: "https://data.sangergrowers.co.nz/wp-content/uploads/2022/12/DJI_0003.jpg",
                excerpt: "We employ manpower for all of your orchard management needs, such as maintenance, picking, pruning, string pole installation, planting, and so on."
            },
            {
                slug: "/kiwifruit-nursery",
                title: "Kiwifruit Nursery",
                image: "https://data.sangergrowers.co.nz/wp-content/uploads/2022/12/143A61151.jpg",
                excerpt: "We exclusively provide Bruno rootstock plants and red-19 grafted plants planted on Bruno root stock as part of our nursery services."
            }
        ]
    },
    {
        slug: "/work-with-us",
        title: "Work With Us",
    },
    {
        slug: "/about-us",
        title: "About Us",
    },
    {
        slug: "/community-work",
        title: "Community Work",
    },
    {
        slug: "/contact-us",
        title: "Contact Us",
    }
]


function Navbar({ menuData, services }) {

    const matches = useMediaQuery('(min-width:900px)');


    return (
        <>
            {matches &&
                <DesktopMenu menuLinks={menuLinks} />
            }
            {/* mobile menu  */}
            <MobileMenu menuData={menuData} services={services} />
        </>
    )
}

export default Navbar