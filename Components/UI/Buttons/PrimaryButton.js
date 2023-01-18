import * as React from 'react';
import { Button } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import Link from 'next/link';
const ButtonStyle = styled(Button)(({ theme }) => ({
  // color: theme.palette.success.main,
  borderRadius: "100px",

}));

export default function StyledCustomization({ callToActionText, href, variant, onClick }) {
  return (
    <>
      {
        href ?
          <Link href={href} passHref>
            <ButtonStyle variant={variant} size="large" color="secondary">
              {callToActionText}
            </ButtonStyle>
          </Link>
          :

          <ButtonStyle
            onClick={onClick}
            variant={variant} size="large" color="secondary">
            {callToActionText}
          </ButtonStyle>

      }
    </>

  )
}
