import * as React from 'react';
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Image from 'next/image';
import styled from 'styled-components';
import PrimaryButton from '../Buttons/PrimaryButton'
import useMediaQuery from '@mui/material/useMediaQuery';

function Card({ title, content, image, callToActionText, callToActionLink, className, align, buttonVariant }) {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <CardMUI sx={{ height: "100%" }} className={className}>
            <CardActionArea>
                <ImageContainer>
                    <Image src={image} fill={true} alt={title} sizes="(max-width: 600px) 100vw,
              (max-width: 900px) 50vw,
              33vw" />
                </ImageContainer>
                <CardContent>
                    <Typography align={align} gutterBottom variant={`${matches ? "h5" : "h6"}`} component="h3" sx={{ color: "var(--sanger--theme--sys--dark--on-secondary)" }}>
                        {title}
                    </Typography>
                    <Typography align={align} variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions sx={{ display: "flex", alignItems: "flex-end" }}>
                <PrimaryButtonStyle
                    align={align}
                    variant={buttonVariant}
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

const PrimaryButtonStyle = styled(PrimaryButton)`
    margin: ${props => props.align === "center" && " 0 auto"};
`