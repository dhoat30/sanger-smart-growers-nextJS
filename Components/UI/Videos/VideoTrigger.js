import React, {useContext} from 'react'
import YouTube from 'react-youtube';
import styled from 'styled-components'
import Image from 'next/image'
import VideoIcon from '../Icons/VideoIcon';
import VideoContext from '../../../Store/video-context';
function VideoTrigger({thumbnail, videoID}) {
  const videoCtx = useContext(VideoContext)
  
     

      const clickHandler = ()=> {
        videoCtx.getVideoModal(true)
      }
  return (
    <>
    <VideoThumbnailContainer>
        <Image
          src={thumbnail.url}
          layout="responsive"
          width="100%"
          height="60%"
          objectFit="cover"
          alt="video thumbnail"
        /> 
        <VideoIconStyle onClick={clickHandler}/> 
  </VideoThumbnailContainer>
</>
    
  
  );
  
}
export default VideoTrigger
const VideoThumbnailContainer = styled.div`
  display: block; 
  width: 100%; 
  position: relative; 
`
const YoutubeStyle = styled(YouTube)`
    display: flex; 
    @media(max-width: 1150px){ 
        justify-content: center;     }
    
`
const VideoIconStyle = styled(VideoIcon)`
position: absolute; 
top: 50%;
left: 50%; 
transform: translate(-50%, -50%);
width: 70px; 
height: 70px; 

`