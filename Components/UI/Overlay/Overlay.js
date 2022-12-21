import React from 'react'
import styled from 'styled-components'

function Overlay({onClick}) {
  return (
    <OverlayStyle onClick={onClick}>
</OverlayStyle> 
  )
}

export default Overlay
const OverlayStyle = styled.div`
position: fixed;
width: 100%; 
height: 100%; 
background: rgba(5,49,82,0.8);

left: 0; 
top: 0; 
z-index: 10;
display: flex;
justify-content: center;
align-items: center;
`
