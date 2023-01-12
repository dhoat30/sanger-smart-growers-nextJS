import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';
import TitleIcon from '../Icons/TitleIcon';
function RowTitle({ title, align, className, children, hideIcon }) {
    const matches = useMediaQuery('(min-width:700px)');

    return (
        <>
            {!hideIcon &&
                <TitleIcon align={align} />

            }
            <Title align={align} className={`${className} display-large`}>{title}</Title>

        </>
    )
}

export default RowTitle
const Title = styled.h2`
text-align: ${props => props.align && props.align};
color: var(--sanger--theme--sys--dark--on-secondary); 
`
