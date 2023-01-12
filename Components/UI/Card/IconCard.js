import * as React from 'react';
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Image from 'next/image';
import styled from 'styled-components';
import PrimaryButton from '../Buttons/PrimaryButton'
function IconCard({ title, content, image, callToActionText, callToActionLink }) {
    return (
        <CardMUI sx={{
            height: "100%",
            backgroundColor: "rgba(0,0,0,0)",
            boxShadow: 0,

        }} >
            <div>
                <ImageContainer>
                    <Image src={image.url} width="70" height="70" alt={title} sizes="(max-width: 600px) 100vw,
              (max-width: 900px) 50vw,
              33vw" />
                </ImageContainer>
                <CardContent sx={{ padding: 0, marginTop: "16px" }}>
                    <Typography gutterBottom variant="h5" component="h3" sx={{ color: "var(--sanger--theme--sys--dark--on-secondary)" }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
            </div>


        </CardMUI>
    )
}

export default IconCard
const ImageContainer = styled.div`
position: relative ;
width: 100%; 
height: auto; 
img{ 
    object-fit: cover; 
}
`