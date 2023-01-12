import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import PhoneIcon from '../../Icons/PhoneIcon'
import EmailIcon from '../../Icons/EmailIcon'
import AddressIcon from '../../Icons/AddressIcon'

function FooterContact({ title, email, address, phoneNumber, socialMediaLinks }) {
    return (
        <>
            <Container>
                <Heading className='body-large'>{title}</Heading>
                <UnorderedList>
                    <li>
                        <AnchorStyle href={`tel:${phoneNumber}`} className='body-medium'>
                            <span>
                                <PhoneIcon />
                            </span>
                            {phoneNumber}
                        </AnchorStyle>
                    </li>
                    <li>
                        <AnchorStyle href={`mailto:${email}`} className='body-medium'>
                            <span>
                                <EmailIcon />
                            </span>
                            {email}
                        </AnchorStyle>
                    </li>
                    <li>
                        <AnchorStyle className='body-medium'>
                            <span>
                                <AddressIcon />
                            </span>
                            {address}
                        </AnchorStyle>
                    </li>
                </UnorderedList>
            </Container>
        </>

    )
}

export default FooterContact

const Container = styled.div`
width: 100%;
`
const Heading = styled.h6`
  font-weight: 700; 
  color: var(--sanger--theme--sys--dark--secondary); 
`
const AnchorStyle = styled.a`
color: var(--sanger--theme--white);
display: flex ;
align-items: center;
span{ 
    margin-right: 8px; 
}

`
const UnorderedList = styled.ul`
margin-top: 16px; 
li{ 
  margin-top: 8px; 
}
@media(max-width: 700px){ 
    display: none ;
}
`