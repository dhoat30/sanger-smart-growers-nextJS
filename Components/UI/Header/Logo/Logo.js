import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link'
function Logo({ sx, logoData, className, width, height }) {
    return (
        <>
            <div className={className}>
                <Link href="/">
                    <Image priority={true} sx={sx} src={logoData.url} width={width} height={height} alt="Sanger Smart Growers Logo" placeholder='empty' />
                </Link>

            </div>
        </>
    )
}

export default Logo