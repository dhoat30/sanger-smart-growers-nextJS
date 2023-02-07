import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
function FooterLinkColumn({ title, linkData }) {

  const links = linkData.map((data, index) => {
    return (
      <li key={index}>
        <Link legacyBehavior href={data.slug} passHref>
          <AnchorStyle className='body-medium' dangerouslySetInnerHTML={{ __html: data.title }} />
        </Link>
      </li>
    )
  })
  return (
    <>
      <Container>
        <Heading className='body-large'>{title}</Heading>
        <UnorderedList>
          {links}
        </UnorderedList>
      </Container>

    </>
  )
}

export default FooterLinkColumn

const Container = styled.div`
width: 100%; 

`

const Heading = styled.h6`
  font-weight: 700; 
  color: var(--sanger--theme--sys--dark--secondary); 
`
const AnchorStyle = styled.a`
color: var(--sanger--theme--white);

`
const UnorderedList = styled.ul`
margin-top: 16px; 
li{ 
  margin-top: 8px; 
  cursor: pointer; 
}
@media(max-width: 700px){ 
    display: none ;
}
`