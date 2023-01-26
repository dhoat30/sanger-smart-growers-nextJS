import React from 'react'
import styled from 'styled-components'
export const Bar = ({ animationDuration, progress }) => (
    <Container
        style={{
            marginLeft: `${(-1 + progress) * 100}%`,
            transition: `margin-left ${animationDuration}ms linear`,
        }}
    >

    </Container>
)



const Container = styled.div`
    background: var( --sanger--theme--sys--light--tertiary); 
    height: 3px; 
    width: 100%; 
    left: 0; 
    top: 0; 
    position: fixed;
    z-index: 10001; 
`