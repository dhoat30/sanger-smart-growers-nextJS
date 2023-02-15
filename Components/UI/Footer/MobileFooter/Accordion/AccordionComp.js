import React from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import styledComp from "styled-components";
import Button from '@mui/material/Button';

import Contact from './Contact/Contact';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid var(--sanger--theme--sys--dark--secondary)`,
    borderLeft: "none",
    borderRight: "none",
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'var(--sanger--theme--sys--dark--secondary)' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0,
    borderTop: '1px solid rgba(255, 255, 255, .125)'
}));

function AccordionComp({ title, linksArr, icons, ID, ariaControls }) {

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const links = linksArr.map((data, index) => {
        // check if the links need icons

        return (
            <li key={index}>
                <Link legacyBehavior href={data.slug} passHref>
                    <a className='body-large'>
                        {data.title}
                    </a>
                </Link>
            </li>
        )


    })
    return (
        <>
            <Accordion className='max-width'
                sx={{
                    bgcolor: "var(--sanger--theme--black)",
                }}
                onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls={ariaControls} id={ID}>
                    <Typography className='body-large'
                        sx={{
                            color: "var(--sanger--theme--sys--dark--secondary)",
                        }}
                    >{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <UnorderedList>
                        {icons ? <Contact linksArr={linksArr} /> : links}
                    </UnorderedList>
                </AccordionDetails>
            </Accordion>


        </>
    );
}

export default AccordionComp

const UnorderedList = styledComp.ul`
list-style: none; 

a{ 
    color: var(--sanger--theme--white); 
    padding: 8px 0 8px 48px;
    display: flex;
    align-items: center; 
    &:hover{ 
        text-decoration: underline; 
    }
    span{ 
        margin-right: 8px; 
    }
}

`