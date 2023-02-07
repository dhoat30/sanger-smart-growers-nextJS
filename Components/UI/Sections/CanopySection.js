import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Paragraph from '../Typography/Paragraph'
import RowTitle from '../Typography/RowTitle'
import { motion } from 'framer-motion'

function CanopySection({ title, content, canopyData, totalAnnualTray }) {
    const canopy = canopyData.map((data, index) => {
        return (
            <Card key={index}>
                <div className="box">
                    <div className="image-container">
                        <Image src={data.image.url} width={data.image.width / 6} height={data.image.height / 6} alt={data.image.alt} />
                    </div>
                    <div className='content'>
                        <h4 className='display-medium'>
                            {data.number_of_hectares}
                        </h4>
                        <h5 className="headline-small"> {data.kiwifruit_type}</h5>
                    </div>
                </div>
            </Card >
        )
    })
    const annualTrays = (<Card>
        <div className="box">
            <div className="image-container">
                <Image src={totalAnnualTray.image.url} width={totalAnnualTray.image.width / 6} height={totalAnnualTray.image.height / 6} alt={totalAnnualTray.image.url} />
            </div>
            <div className='content'>
                <h4 className='display-medium'>
                    {totalAnnualTray.number_of_trays}
                </h4>
                <h5 className="headline-small">Trays Annually</h5>
            </div>
        </div>
    </Card >)


    return (
        <Container>
            <div>
                <div className='title-container'>
                    <RowTitle title={title} animation />
                    <motion.p className='headline-small'
                        initial={{
                            opacity: 0,
                            y: 50
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.3,
                                delay: 0.3
                            }
                        }}
                        viewport={{ amount: 0.4, once: true }}
                    >{content} </motion.p>
                </div>

                <div className='canopy-data'>
                    {canopy}
                    {annualTrays}
                </div>
            </div>
        </Container >
    )
}

export default CanopySection
const Container = styled.section`
    >div{ 
        display: flex;
        justify-content: space-between;
        align-items: center; 
        flex-wrap: wrap; 
      
    }
    .title-container{ 
        width: 40%; 
        margin-left: 80px; 
        @media(max-width: 900px){ 
            width: 100%; 
            margin: 40px 8px; 
            }
  
        p{ 
        color: var(--sanger--theme--sys--light--on-surface-variant); 
        margin-top: 16px; 
    }
    }
    .canopy-data{ 
        width: 50%; 
        background: var( --sanger--theme--sys--dark--secondary) ;
        display: flex;
        align-items: center; 
        flex-wrap: wrap; 
        @media(max-width: 900px){ 
            width: 100%; 
            }
      
     
    }
`

const Card = styled.div`
width: 50%; 
border: 1px solid var( --sanger--theme--source--secondary);
padding: 0 8px; 

@media(max-width: 400px){ 
    width: 100%; 
    padding: 0 8px; 
}
.box{ 
    width: 200px; 
  margin: 40px auto; 
  @media(max-width: 400px){ 
   margin: 16px auto; 

}
}
    .image-container{ 
        background:var( --sanger--theme--source--secondary);
        display: flex;
        width: 100px; 
        height: 100px; 
        align-items: center; 
        justify-content: center; 
        border-radius: 50%; 
        margin: 0 auto ;
        @media(max-width: 400px){ 
   margin: 0 auto; 

}
    }
    .content{ 
        margin-left: 8px; 
        text-align: center; 
        @media(max-width: 400px){ 
        text-align: center; 
        margin-left: 0; 
        }
        h4{ 
            font-weight: 600; 
            margin-top: 16px; 
            
        }
        p{ 
            margin-top: 0; 
        }
    }
`