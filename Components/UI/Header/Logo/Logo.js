import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
function Logo({ sx, logoData, className, width, height }) {
    console.log(logoData)
    return (
        <>
            <div className={className}>
                <Image priority={true} sx={sx} src={logoData.url} width={width} height={height} alt="Sanger Smart Growers Logo" placeholder='empty' />

            </div>
        </>
    )
}

export default Logo