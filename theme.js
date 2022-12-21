import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#f2c000',
            light: '#755b00',
            dark: '#f2c000',
            contrastText: '#3d2f00',
        },
        secondary: {
            main: '#c00001',
            light: '#c00001',
            dark: '#a60001',
            contrastText: '#ffffff',
        },
        background: {

            surface: '#fdfcf7'
        },
    },
    typography: {
        fontFamily: 'Poppins',
        h1: {
            fontSize: '5rem',
        },
    },
});

export default theme;
