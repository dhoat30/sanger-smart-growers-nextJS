import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';
import TitleIcon from '../Icons/TitleIcon';
import { motion } from 'framer-motion'

function RowTitle({ title, align, className, children, hideIcon, animation }) {
    const matches = useMediaQuery('(min-width:700px)');
    const titleVariant = {
        offscreen: {
            opacity: 0,
            y: "50%",
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: { ease: "easeIn", duration: 0.3 }
        }
    };

    return (
        <>
            {!hideIcon &&
                <TitleIcon align={align} animation={animation} />
            }
            <Title
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 1, once: true }}
                variants={titleVariant}
                as={!animation ? null : motion.h2}
                color="white"
                align={align}
                className={`${className} display-large`}>
                {title}
            </Title>

        </>
    )
}

export default RowTitle
const Title = styled.h2`
text-align: ${props => props.align && props.align};
color: var(--sanger--theme--sys--dark--on-secondary); 
margin-top: 8px; 
`
