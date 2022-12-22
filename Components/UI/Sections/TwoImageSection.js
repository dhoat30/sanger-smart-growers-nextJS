import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

function TwoImageSection({ title, content, backgroundImage, frontImage, imageText }) {
    return (
        <div style={{ background: "var( --sanger--theme--white) " }}>
            <ImageColumn className='grid max-width'>
                <div className='first-image-container'>
                    <Image layout="fill" src={backgroundImage.url} />
                </div>
                <div class="second-image-container">
                    <Image src={frontImage.url} layout="fill" />
                </div>
            </ImageColumn>

        </div>
    )
}

export default TwoImageSection
const ImageColumn = styled.div`
position: relative ;
.first-image-container{ 
    grid-column: 1/6;
    grid-row: 1/8;
    left: -80px; 
}
.second-image-container{ 
    grid-column: 4/8;
    grid-row: 5/12;
}
 >div{ 
    position: absolute;

    width: 100%; 
    height: 100%;
    img{ 
        object-fit: cover; 
    }
    
}

`