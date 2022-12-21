import React, {useContext} from 'react'
import YoutubeVideo from './YoutubeVideo'
import styled from 'styled-components'
import PrimaryAnchor from '../Anchor/PrimaryAnchor'
import VideoTrigger from './VideoTrigger'
import VideoContext from '../../../Store/video-context'
import Overlay from '../Overlay/Overlay'
function Still({thumbnail, videoID, stillThinkingData}) {
  const videoCtx = useContext(VideoContext);

  return (
    <>
 <Section className="still-thinking">
      <FlexBox className="max-width">
        <VideoContainer className="still-thinking-img">
          <VideoTrigger thumbnail={thumbnail}/> 
        </VideoContainer>
        <ContentContainer className="still-thinking-text">
        <h3>{stillThinkingData.title.rendered}</h3>
            <div
                  dangerouslySetInnerHTML={{
                    __html: stillThinkingData.content.rendered,
                  }}
                />            <div className="still-thinking-btn">
                <PrimaryAnchor 
                link="/book-a-demo"
                text="BOOK A DEMO"
                /> 
            </div>
        </ContentContainer>
      </FlexBox>
   </Section>
{videoCtx.videoModal && (
        <>
          <YoutubeVideo
            videoID={videoID}
          />
          <Overlay
            onClick={() => {
              videoCtx.getVideoModal(false);
            }}
          />
        </>
      )}
    </>
   
  
  )
}

export default Still
const Section = styled.section`
padding: 140px 0;
display: flex; 
justify-content: center; 
text-align:center; 
background: var(--lightBlue); 
display: flex; 
flex-direction: column; 
justify-content: center; 
@media(max-width: 800px){ 
  padding: 70px 0;

}
`
const FlexBox = styled.div`
max-width: 700px;

`
const VideoContainer = styled.div`

`
const ContentContainer = styled.div`
    margin: 20px auto 0 auto;
    max-width: 800px;
.still-thinking-btn{ 
    margin-top: 20px; 
}
`

