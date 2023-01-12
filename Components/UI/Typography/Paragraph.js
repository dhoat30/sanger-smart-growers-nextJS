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
`