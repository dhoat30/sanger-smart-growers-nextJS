import React, {useContext} from 'react'
import VideoIcon from '../Icons/VideoIcon'
import styled from 'styled-components'
import Image from 'next/image'
import VideoContext from '../../../Store/video-context'

function Cloud({title, content, link, image, linkText}) {
  const videoCtx = useContext(VideoContext)

  return (
    <section className="third-section">
      <div className="container max-width">
         <div className="third-section-text">
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{__html: content}}/>
            <AnchorStyle   onClick={()=>  videoCtx.getVideoModal(true)}>
                <VideoIconStyle/> 
                <span>{linkText}</span>
            </AnchorStyle>
         </div>
         <ImageContainer className="third-section-img">
           <Image src={image.url} alt={title ? title : content}   layout="responsive"
              width="100%"
              quality="30%"
              height={(image.height / image.width) * 100}/>
         </ImageContainer>
      </div>
   </section>
  )
}

export default Cloud
const VideoIconStyle = styled(VideoIcon)`
width: 20px !important; 
height: 20px !important; 
fill: var(--blue) !important; 
circle{ 
    fill: var(--blue) !important; 
}
path{ 
    fill: var(--lightYellow);
}
`
const AnchorStyle = styled.div`
cursor:pointer; 
margin-top: 10px;
display: flex; 
align-items:center; 
color: var(--blue);
text-decoration: underline; 
gap: 5px;
`
// style="display: flex; gap: 7px; align-items: center;"
// style="font-weight: 600; font-size: 1.5rem; line-height: 36px; letter-spacing: 0.035em; color: #053152;"

const ImageContainer= styled.div`
display: block; 
width: 40%; 
@media(max-width: 700px){ 
  width: 80%; 
}
`