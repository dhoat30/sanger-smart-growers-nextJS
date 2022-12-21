import React from 'react'
import Image from 'next/image'
import styled from "styled-components"
function Feature({title, content, icon, className}) {
//    let iconWidth = icon.sizes.thumbnail-width; 
//    let iconHeight = icon.sizes.thumbnail-height; 

  return (
        <Container>
            <ImageContainer className="fifth-section-card-img">
                <Image src={icon.sizes.thumbnail} layout="fill" alt={title}/> 
            </ImageContainer>
            <div className="fifth-section-card-text">
                <h4>{title}</h4>
                <div dangerouslySetInnerHTML={{__html: content}}/>
            </div>
        </Container>
  
  )
}

export default Feature
const Container = styled.div`
    width: 90%; 
    margin: 0  0 30px 0; 

`
const ImageContainer = styled.div`
position: relative; 
width: 70px; 
height: 70px; 
margin-bottom: 10px; 
@media(max-width: 850px){ 
    width: 50px; 
    height: 50px; 
}
`