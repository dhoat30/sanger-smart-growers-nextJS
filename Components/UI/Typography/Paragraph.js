import React from 'react'
import styled from 'styled-components'

function Paragraph({ align, children, variant, className }) {
    let sizeClass

    if (variant === "medium") {
        sizeClass = "body-medium"
    }
    else if (variant === "small") {
        sizeClass = "body-small"
    }
    else {
        sizeClass = "body-large"
    }

    return (

        <ParagraphStyle align={align} className={`${className} ${sizeClass}`} dangerouslySetInnerHTML={{ __html: children }} ></ParagraphStyle>

    )
}

export default Paragraph

const ParagraphStyle = styled.div`
    text-align: ${props => props.align && props.align}; 
    color: var( --sanger--theme--sys--light--on-surface-variant); 
    ul{ 
        list-style:none;
        display: flex; 
        flex-wrap: wrap ;
        margin: 24px 0; 
        align-items: center; 
        justify-content: space-between; 
        list-style-position: inside;
        li{ 
            width: 50%;
            list-style-image: url("/check-icon.png"); 
            @media(max-width: 500px){ 
                width: 100%; 
            }
            span{ 
          position:relative; 
          top: -6px; 
                padding: 0 0 10px 5px; 
                display: inline-block ;
            }
        }
    }
`