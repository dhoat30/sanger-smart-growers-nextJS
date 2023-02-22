import React, { useEffect } from 'react'
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import ScrollToTop from "react-scroll-to-top";

function BackToTop() {

    const styles = {
        position: "fixed",
        bottom: "16px",
        right: "16px",
        zIndex: 1000
    }

    return (


        <ScrollToTop
            style={{ background: "var(--sanger--theme--sys--dark--on-tertiary)", borderRadius: "50%", zIndex: 1000, bottom: "70px", right: "16px" }}
            smooth component={<NavigationIcon sx={{ color: "white", top: "2px", position: "relative" }} />} />

    )
}

export default BackToTop