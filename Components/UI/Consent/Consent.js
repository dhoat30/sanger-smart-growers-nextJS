import React, { useEffect, useState } from 'react';

import { setCookie, hasCookie } from 'cookies-next';
import styled from 'styled-components';
import Paragraph from '../Typography/Paragraph';
import PrimaryButton from '../../UI/Buttons/PrimaryButton'
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion'

function Consent() {
    const [consent, setConsent] = useState(true);
    useEffect(() => {
        setConsent(hasCookie('localConsent'));
    }, []);

    const acceptCookie = () => {
        setConsent(true);
        setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
        console.log('accepring cookies');
        window.gtag = function () {
            window.dataLayer.push('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
            })
        }
    };
    const closeP = () => {
        setConsent(true);
        console.log('closing');
    };
    const denyCookie = () => {
        setConsent(true);
        setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
        console.log('denying cookie');
    };
    if (consent === true) {
        return null;
    }
    const containerVariants = {
        offScreen: {
            opacity: 0,
            y: 200,
            scale: 0.4
        },
        onScreen: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: 3,
                ease: "easeInOut",
                duration: 0.3
            }
        }
    }
    return (
        <ConsentSection
            as={motion.section}
            className="elevation-light5"
            variants={containerVariants}
            initial="offScreen"
            animate="onScreen"
        >
            <div className='content-wrapper max-width ' >
                <div className='headline-small'>Do you allow us to use cookies?</div>
                <Paragraph color="white">This website uses cookies that help the website to function and also to track how you interact with it. We will only use the cookies if you consent to it by clicking on Accept. You can also manage individual cookie preferences from Settings.</Paragraph>
                <div className='btn-wrapper'>
                    <PrimaryButton
                        callToActionText="Decline"
                        variant="outlined"
                        onClick={(e) => denyCookie()}
                    />
                    <PrimaryButton
                        callToActionText="Accept"
                        variant="contained"
                        onClick={() => {
                            acceptCookie();
                        }}
                    />
                </div>
                <CloseIcon
                    onClick={(e) => {
                        closeP();
                    }}
                    sx={{
                        position: "absolute",
                        top: "8px",
                        right: "8px",
                        fontSize: "32px",
                        cursor: "pointer"
                    }}
                />
            </div>

        </ConsentSection>
    );
}

export default Consent;

const ConsentSection = styled.section`
    background: white; 
    position: fixed ;
    width: 100%; 
    height: auto; 
    bottom: 0; 
    left: 0;
    border-radius: 20px 20px 0 0 ; 
    
    background: var(  --sanger--theme--sys--dark--on-secondary-container);
    .content-wrapper{ 
        padding: 24px 0; 
        .btn-wrapper{ 
            margin-top: 16px;
            display: flex ;
            gap: 16px;
        }
    }
`