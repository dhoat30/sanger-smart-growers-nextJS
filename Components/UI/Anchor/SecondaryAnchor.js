import React from "react";
import VideoIcon from '../Icons/VideoIcon'
import styled from "styled-components";
import Link from 'next/link'
function SecondaryAnchor({ text, link, icon, onClick }) {
  return (
    <>
    {icon === "videoIcon" ? 
    <button onClick={onClick} className="secondary-btn"><VideoIconStyle/>{text} </button>
    : 
    <Link href={link} passHref>
        <a  className="secondary-btn">
          
         {text}
       </a>
       </Link>
}
   
    </>
   
   
  );
}

export default SecondaryAnchor;

const VideoIconStyle = styled(VideoIcon) `
width: 15px !important; 
height: 15px !important; 
margin-right: 5px;
@media(max-width: 500px){ 
  width: 10px !important; 
height: 10px !important; 
}
`