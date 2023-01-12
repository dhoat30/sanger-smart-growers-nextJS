import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';
import TitleIcon from '../Icons/TitleIcon';
function ColumnTitle({ title, align, className, children, variant }) {
    const matches = useMediaQuery('(min-width:700px)');
    let sizeClass
    if (variant === "small") {
        sizeClass = "headline-small"
    }
    else if (variant === "medium") {
        sizeClass = "headline-medium"
    }
    else {
        sizeClass = "headline-large"
    }
    return (
        <>
            <TitleIcon align={align} />
            <Title align={align} className={`${className} ${sizeClass}`}>{children}</Title>
        </>
    )
}

export default ColumnTitle
const Title = styled.h3`
text-align: ${props => props.align && props.align};
margin-top: 8px;
color: var(--sanger--theme--sys--dark--on-secondary); 
`
