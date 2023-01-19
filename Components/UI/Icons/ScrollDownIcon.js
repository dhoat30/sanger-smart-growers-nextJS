import React from 'react'
import styled from 'styled-components'
function ScrollDownIcon({ className }) {
    return (
        <Container className={className}>
            <span></span>
            <span></span>
            <span></span>
        </Container>
    )
}

export default ScrollDownIcon

const Container = styled.div`
	position: absolute;

	transform: translate(-50%, -50%);
    z-index: 11; 
    cursor: pointer; 
    span{
	display: block;
	width: 20px;
	height: 20px;
	border-bottom: 2px solid white;
	border-right: 2px solid white;
	transform: rotate(45deg);
	margin: -10px;
	animation: animate 2s infinite;
    @media(max-width: 600px){ 
        width: 15px;
	height: 15px;
    }
}

 span:nth-child(2)
{
	animation-delay: -0.2s;
}

 span:nth-child(3)
{
	animation-delay: -0.4s;
}

@keyframes animate{
	
	0%{
		opacity: 0;
		transform: rotate(45deg) translate(-20px, -20px);
	}
	50%{
		opacity: 1;
	}
	100%{
		opacity: 0;
		transform: rotate(45deg) translate(20px, 20px);
	}
}

@media(max-width: 600px){ 
    @keyframes animate{
	
	0%{
		opacity: 0;
		transform: rotate(45deg) translate(-15px, -15px);
	}
	50%{
		opacity: 1;
	}
	100%{
		opacity: 0;
		transform: rotate(45deg) translate(15px, 15px);
	}
}
    }
`
