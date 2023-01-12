import React from 'react'
import styled from 'styled-components'
import useMediaQuery from '@mui/material/useMediaQuery';

function ParallaxImage({ image, className }) {
    const matches = useMediaQuery('(min-width:900px)');

    return (
        <>
            {matches &&
                <Container className={className} image={image} style={{ backgroundImage: `url(${image})` }} />
            }
        </>
    )
}

export default ParallaxImage
const Container = styled.div`
    padding-bottom:50vh; 
    background-repeat: no-repeat; 
    width: 100%; 
    background-attachment: fixed; 
    background-size: cover; 
    
`