import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
function Logo({ sx, logoData, className, width, height }) {
    return (
        <>
            <div className={className}>
                <Image sx={sx} src={logoData.url} layout="fixed" width={width} height={height} alt="Sanger Smart Growers Logo" placeholder='empty' />

            </div>
            {/* <AdbIcon sx={sx} /> */}
        </>
    )
}

export default Logo