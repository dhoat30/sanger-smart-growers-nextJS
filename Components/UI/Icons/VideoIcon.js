import React from 'react'
import styled from 'styled-components'
function VideoIcon({className, onClick}) {
  return (
    <SVG className={className}  viewBox="0 0 133 133" fill="none" onClick={onClick}>
    <circle cx="66.0371" cy="66.6914" r="66" fill="#FF9734"/>
    <path d="M90.5371 63.5933C92.5371 64.748 92.5371 67.6348 90.5371 68.7895L55.2871 89.1411C53.2871 90.2958 50.7871 88.8524 50.7871 86.543V45.8398C50.7871 43.5304 53.2871 42.087 55.2871 43.2417L90.5371 63.5933Z" fill="white"/>
    </SVG>
    

  )
}

export default VideoIcon
const SVG = styled.svg`
width: 133px ; 
height: 133px ;
cursor: pointer;  
`