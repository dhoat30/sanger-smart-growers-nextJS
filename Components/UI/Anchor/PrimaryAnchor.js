import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
function PrimaryAnchor({text, link}) {
  return (
    <LinkStyle href={link} passHref>
<a href={link} className="primary-btn">
              {text}
            </a>
    </LinkStyle>

  )
}

export default PrimaryAnchor
const LinkStyle = styled(Link)`
`