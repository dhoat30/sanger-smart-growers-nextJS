import * as React from 'react';
import { Button, CircularProgress } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';
import styledCSS from 'styled-components';

export default function StyledCustomization({ callToActionText, href, variant, onClick, loading, success, className }) {
  const ButtonStyle = styled(Button)(({ theme }) => ({
    // color: theme.palette.success.main,
    color: (loading || success) && theme.palette.tertiary.main,
    borderRadius: "100px"
  }));


  return (
    <>
      {
        href ?
          <Link href={href} passHref className={className}>
            <ButtonStyle variant={variant} size="large" color="secondary">
              {callToActionText}
            </ButtonStyle>
          </Link>
          :
          <ButtonStyle
            className={className}
            onClick={onClick}
            variant={variant} size="large" color={(loading || success) ? "tertiary" : "secondary"}

          >
            {callToActionText}
            {loading &&
              <CircularProgress
                size={24}
                sx={{
                  color: "white",
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            }
            {success &&
              <CheckCircleOutlineIcon
                sx={{
                  color: "white",
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            }

          </ButtonStyle>


      }
    </>

  )
}

