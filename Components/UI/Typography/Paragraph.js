import React from 'react'
import styled from 'styled-components'

function Paragraph({ align, children, variant, className, singleListRow }) {
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
        <ParagraphStyle singleListRow={singleListRow} align={align} className={`${className} ${sizeClass}`} dangerouslySetInnerHTML={{ __html: children }} ></ParagraphStyle>
    )
}

export default Paragraph

const ParagraphStyle = styled.div`
    text-align: ${props => props.align && props.align}; 
    color: var( --sanger--theme--sys--light--on-surface-variant); 
    p{ 
        margin: 8px 0; 
    }
    ul{ 
        list-style:none;
        display: flex; 
        flex-wrap: wrap ;
        margin: 24px 0; 
        align-items: center; 
        justify-content: space-between; 
        list-style-position: inside;
        li{ 
            width: ${props => props.singleListRow ? "100%" : "50%"};
            display: flex ;
            align-items: center; 
            gap: 10px; 
            margin-bottom: 16px; 
            strong{ 
            font-weight: 400; 
            }
            @media(max-width: 400px){ 
                width: 100%; 
            }
        }
    }
`