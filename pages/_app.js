import '../styles/globals.css'

import { VideoContextProvider } from '../Store/video-context'
import Layout from '../Components/Layout'
import { ThemeProvider } from '@mui/material/styles';

import theme from '../theme';
import CssBaseline from '@material-ui/core/CssBaseline';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <VideoContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </VideoContextProvider>
    </ThemeProvider>

  )
}

export default MyApp
