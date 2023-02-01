import React from 'react'
import styled from 'styled-components'
import ColumnTitle from '../../../UI/Typography/ColumnTitle'
import Paragraph from '../../../UI/Typography/Paragraph'
import RowTitle from '../../../UI/Typography/RowTitle'
function CircleSection({ data }) {
    return (
        <CircleSectionStyle className='max-width'>
            <div className='content-wrapper'>
                <RowTitle title={data.title} align="center" animation="true" />
                <Paragraph className="paragraph" align="center">{data.content}</Paragraph>
            </div>
            <div className='circle-wrapper'>
                <div className='circle'><span>Sports Sponsor</span></div>
                <div className='circle'><span>Donations</span></div>
                <div className='circle'><span>Visa Assistance</span></div>
            </div>
        </CircleSectionStyle >
    )
}

export default CircleSection
const CircleSectionStyle = styled.section`
    padding-top: 120px; 
    padding-bottom: 120px; 
    background: var(--sanger--theme--white);
    .content-wrapper{ 
        max-width: 900px; 
        margin: 0 auto; 
        .paragraph{ 
            margin-top: 24px; 
        }
    }
    .circle-wrapper{ 
        position: relative;
        width: 100%; 
        height: 50vh; 
        .circle{ 
            position: absolute;
            background: rgba(242, 192, 0, 1); 
            border-radius: 50%;  
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%);
            display: flex ;
            align-items: flex-start; 
            justify-content: center; 
            span{ 
                position: relative ;
                top: 24px; 
            }
        }
        & .circle:nth-child(1){ 
           z-index: 3; 
           width: 200px; 
            height: 200px;
           
        }
        & .circle:nth-child(2){ 
            background: green ;
            width: 300px; 
            height: 300px; 
            z-index: 2; 
            background: #FFD63D; 
            span{ 
                top: 16px; 
            }
        }
        & .circle:nth-child(3){ 
            background: blue ;
            width: 400px; 
            height: 400px; 
            z-index: 1; 
            background: #FFE584; 
            span{ 
                top: 16px; 
            }
        }
    }
`