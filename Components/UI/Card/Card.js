import * as React from 'react';
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Image from 'next/image';
import styled from 'styled-components';
import PrimaryButton from '../Buttons/PrimaryButton'
function Card({ title, content, image, callToActionText, callToActionLink }) {
    return (
        <CardMUI sx={{ height: "100%" }}>
            <CardActionArea>
                <ImageContainer>
                    <Image src={image} fill={true} alt={title} sizes="(max-width: 600px) 100vw,
              (max-width: 900px) 50vw,
              33vw" />
                </ImageContainer>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h3" sx={{ color: "var(--sanger--theme--sys--dark--on-secondary)" }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions sx={{ display: "flex", alignItems: "flex-end" }}>
                <PrimaryButton
                    callToActionText={callToActionText}
                    href={callToActionLink}
                />
            </CardActions>
        </CardMUI>
    )
}

export default Card
const ImageContainer = styled.div`
position: relative ;
width: 100%; 
height: 240px; 
img{ 
    object-fit: cover; 
}
`