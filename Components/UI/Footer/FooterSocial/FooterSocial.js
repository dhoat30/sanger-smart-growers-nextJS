import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '../../Icons/SocialMedia/FacebookIcon'

function FooterSocial() {
    return (
        <FooterSocialWrapper>
            <h6 className='body-large'>Get Social</h6>
            <UnorderedList>
                <li>
                    <a target="_blank" href="https://www.facebook.com/SangerSmartGrowers/" className='body-medium'>
                        <FacebookIcon />
                    </a>
                </li>
            </UnorderedList>
        </FooterSocialWrapper>
    )
}

export default FooterSocial
const FooterSocialWrapper = styled.div`
margin-top: 16px;
    h6{ 
        font-weight: 700; 
        color: var(--sanger--theme--sys--dark--secondary); 
    }

`

const UnorderedList = styled.ul`
margin-top: 8px; 
li{ 
    display: inline-block ;
  a{ 
    color: var(--sanger--theme--white);
        display: flex ;
        align-items: center;
        svg{ 
            fill: rgb(242, 192, 0); 
            path{ 
                &:hover{ 
            fill: var(--sanger--theme--source--secondary);
        }
            }
        }
span{ 
    margin-right: 8px; 
}
  }
}
@media(max-width: 700px){ 
    display: none ;
}
`