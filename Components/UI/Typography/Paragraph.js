import React from 'react'
import styled from 'styled-components'

function Paragraph({ align, children, variant, className }) {
    let sizeClass
    if (variant === 'large') {
        sizeClass = "body-large"
    }
    else if (variant === "medium") {
        sizeClass = "body-medium"
    }
    else if (variant === "small") {
        sizeClass = "body-small"
    }

    return (
        <ParagraphStyle align={align} className={`${className} ${sizeClass}`}>{children}</ParagraphStyle>
    )
}

export default Paragraph

const ParagraphStyle = styled.p`
    text-align: ${props => props.align && props.align}; 
    color: var( --sanger--theme--sys--light--on-surface-variant); 
`