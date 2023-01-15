import React, { useState } from 'react'
import TextfieldCustom from './TextfieldCustom';
import { Box, TextField } from '@mui/material';

function ContactForm() {

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate

        >
            <input placeholder='first name' autocomplete="name"></input>
            <TextfieldCustom
                fieldType="text"
                label="First name"
                helperText={"Please enter your first name"}
                required={true}
                autocomplete="given-name"
            />
            <TextfieldCustom
                fieldType="text"
                label="Last name"
                helperText={"Please enter your last name"}
                required={true}
            />
            <TextfieldCustom
                fieldType="email"
                label="Email address"
                helperText={"Please enter your email address"}
                required={true}
            />
            <TextfieldCustom
                fieldType="phone"
                label="Phone Number"
                helperText={"Please enter your phone number"}
                required={true}
            />
            <TextfieldCustom
                fieldType="number"
                label="Orchard Size"
            />
            <TextfieldCustom
                fieldType="text"
                label="Company name"
            />
            <TextfieldCustom
                fieldType="text"
                label="Message"
                helperText={"Please enter your message"}
                required={true}
                multiline={true}
                rows={4}
                fullWidth={true}
            />
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