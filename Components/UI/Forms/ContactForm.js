import React, { useState } from 'react'
import TextfieldCustom from './TextfieldCustom';
import { Box, TextField } from '@mui/material';

function ContactForm() {

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextfieldCustom />
            {/* <TextField id="filled-basic"
                label="First name"
                variant="filled"
                color="tertiary"
                required
                helperText={firstNameInputIsInvalid && "Please enter first name"}
                error={firstNameInputIsInvalid}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                value={enteredFirstName}
            />

            <TextField id="filled-basic"
                label="Last name"
                variant="filled"
                color="tertiary"
                required
                helperText={firstNameInputIsInvalid && "Please enter first name"}
                error={firstNameInputIsInvalid}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                value={enteredFirstName}
            />

            <TextField id="filled-basic" label="Email address" variant="filled" color="tertiary" type="email" />
            <TextField id="filled-basic" label="Phone number" variant="filled" color="tertiary" />
            <TextField id="filled-basic" label="Size of your orchard" variant="filled" color="tertiary" />
            <TextField id="filled-basic" label="Company name" variant="filled" color="tertiary" />
            <TextField id="filled-basic" label="Message" variant="filled" color="tertiary" multiline rows={4} fullWidth /> */}

        </Box>


    )
}

export default ContactForm