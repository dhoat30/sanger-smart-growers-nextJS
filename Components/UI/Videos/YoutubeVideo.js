import React, {useContext} from 'react'
import YouTube from 'react-youtube';
import styled from 'styled-components'
function YoutubeVideo({ videoID}) {

    const opts = {
        height: '350',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const onPlayerReady = (event) => {
        // access to player in all event handlers via event.target
       
      }

  
  return (
  
   
    <YoutubeStyle videoId={videoID} opts={opts}  onReady={onPlayerReady}/>

    
  
  );
  
}
export default YoutubeVideo

const YoutubeStyle = styled(YouTube)`
  position: fixed; 
  top: 50%; 
  left: 50%; 
  z-index: 30;
    width: 95%; 
    max-width: 700px; 
    transform: translate(-50%, -50%);
`
