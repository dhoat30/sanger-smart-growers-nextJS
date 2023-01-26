import React from 'react'
import styled from 'styled-components'
export const Container = ({ animationDuration, children, isFinished }) => (
    <Box
        style={{
            opacity: isFinished ? 0 : 1,
            transition: `opacity ${animationDuration}ms linear`,
        }}
    >{children}</Box>
)




const Box = styled.div`

`