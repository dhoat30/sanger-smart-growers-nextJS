import React from 'react'

import AccordionComp from './Accordion/AccordionComp';

function MobileFooter({ footerData }) {
    console.log(footerData)
    const contactArr = [
        {
            ID: 1,
            url: footerData.phone_number,
            type: "phone",
            title: footerData.phone_number
        },
        {
            ID: 2,
            url: footerData.email,
            type: "email",
            title: footerData.email
        },
        {
            ID: 3,
            url: footerData.address,
            type: "address",
            title: footerData.address
        },
        {
            ID: 4,
            url: footerData.social_media_links[0].profile_link,
            type: "facebook",
            title: "Get Social"
        }
    ]

    console.log(contactArr)
    return (
        <div>
            <AccordionComp title="FOR GROWERS"
                linksArr={footerData.growers}
            />
            <AccordionComp title="OUR COMPANY"
                linksArr={footerData.our_company}
            />
            <AccordionComp title="CONTACT"
                linksArr={contactArr}
                icons={true}
            />
        </div>
    );
}

export default MobileFooter