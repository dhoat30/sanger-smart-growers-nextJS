import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';
import TitleIcon from '../Icons/TitleIcon';
function ColumnTitle({ title, align, className, children }) {
    const matches = useMediaQuery('(min-width:700px)');

    return (
        <>
            <TitleIcon align={align} />
            <Title align={align} className={`${className} display-small`}>{children}</Title>
        </>
    )
}

export default ColumnTitle
const Title = styled.h3`
text-align: ${props => props.align && props.align};
margin-top: 8px;
color: var(--sanger--theme--sys--dark--on-secondary); 
font-weight: 600; 
`
