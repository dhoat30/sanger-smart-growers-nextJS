import React from 'react'
import styled from 'styled-components'
function FacebookIcon({ fill, hoverColor }) {
    return (
        <FacebookIconStyle hoverColor={hoverColor} width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 3.06006C9.75 3.06006 3 9.79506 3 18.0901C3 25.5901 8.49 31.8151 15.66 32.9401V22.4401H11.85V18.0901H15.66V14.7751C15.66 11.0101 17.895 8.94006 21.33 8.94006C22.965 8.94006 24.675 9.22506 24.675 9.22506V12.9301H22.785C20.925 12.9301 20.34 14.0851 20.34 15.2701V18.0901H24.51L23.835 22.4401H20.34V32.9401C23.8747 32.3818 27.0933 30.5783 29.4149 27.8551C31.7365 25.132 33.008 21.6685 33 18.0901C33 9.79506 26.25 3.06006 18 3.06006V3.06006Z" fill={fill} />
        </FacebookIconStyle>

    )
}

export default FacebookIcon

const FacebookIconStyle = styled.svg`
cursor: pointer; 
    path{ 
        &:hover{ 
            fill: ${props => props.hoverColor ? props.hoverColor : "white"};
        }

    }
`