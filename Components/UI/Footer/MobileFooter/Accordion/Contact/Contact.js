import React from 'react'
import Link from 'next/link';
import PhoneIcon from '../../../../Icons/PhoneIcon';
import EmailIcon from '../../../../Icons/EmailIcon';
import AddressIcon from '../../../../Icons/AddressIcon';
import FacebookIcon from '../../../../Icons/SocialMedia/FacebookIcon';
function Contact({ linksArr }) {
    const links = linksArr.map(data => {
        // check if the links need icons
        if (data.type === "phone") {
            return (
                <li key={data.ID}>
                    <Link href={data.url} passHref>
                        <a className='body-large'>
                            <span> <PhoneIcon />  </span>
                            {data.title}
                        </a>
                    </Link>
                </li>
            )
        }
        else if (data.type === "email") {
            return (
                <li key={data.ID}>
                    <Link href={data.url} passHref>
                        <a className='body-large'>
                            <span> <EmailIcon />  </span>
                            {data.title}
                        </a>
                    </Link>
                </li>
            )
        }
        else if (data.type === "address") {
            return (
                <li key={data.ID}>
                    <Link href={data.url} passHref>
                        <a className='body-large'>
                            <span> <AddressIcon />  </span>
                            {data.title}
                        </a>
                    </Link>
                </li>
            )
        }
        else if (data.type === "facebook") {
            return (
                <li key={data.ID}>
                    <Link href={data.url} passHref>
                        <a className='body-large'>
                            <span> <FacebookIcon /> </span>
                            {data.title}
                        </a>
                    </Link>
                </li>
            )
        }


    })
    return (
        <>
            {links}
        </>

    )
}

export default Contact