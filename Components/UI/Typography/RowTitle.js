import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';
function RowTitle({ title, align, className }) {
    const matches = useMediaQuery('(min-width:700px)');

    return (
        <Title align={align} className={`${className} display-large`}>{title}</Title>
    )
}

export default RowTitle
const Title = styled.h2`
text-align: ${props => props.align && props.align};
`
