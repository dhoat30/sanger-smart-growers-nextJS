import React from 'react'
import Card from '../../../UI/Card/Card'
import RowTitle from '../../../UI/Typography/RowTitle'
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
function Services({ servicesArr }) {

    const serviceCards = servicesArr.service_content.map((data, index) => {
        return (
            <Grid md={4} sm={6} >
                <Card
                    key={index}
                    title={data.service_name}
                    content={data.service_excerpt}
                    image={data.thumbnail.url}
                    callToActionText={data.call_to_action_text}
                    callToActionLink={data.call_to_action_link}
                />
            </Grid >

        )
    })
    return (
        <div className='max-width section-gutter'>

            <RowTitle title="Our Services" align="center" />
            <Grid container justifyContent="center" rowSpacing={3} columnSpacing={{ xs: 1, sm: 3, md: 1, lg: 3 }} sx={{ maxWidth: "1366px", margin: "40px auto 0 auto" }}>
                {serviceCards}

            </Grid>
        </div >
    )
}

export default Services