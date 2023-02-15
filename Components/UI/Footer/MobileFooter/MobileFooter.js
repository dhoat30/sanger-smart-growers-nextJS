import React from 'react'

import AccordionComp from './Accordion/AccordionComp';

function MobileFooter({ footerData, footerLinks }) {
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

    return (
        <div>
            <AccordionComp title="FOR GROWERS"
                linksArr={footerLinks.growers}
                ID="for-growers"
                ariaControls="panel1d-content1"
            />
            <AccordionComp title="OUR COMPANY"
                linksArr={footerLinks.ourCompany}
                ID="our-company"
                ariaControls="panel1d-content2"
            />
            <AccordionComp title="CONTACT"
                linksArr={contactArr}
                icons={true}
                ID="contact"
                ariaControls="panel1d-content3"
            />
        </div>
    );
}

export default MobileFooter