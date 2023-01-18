import React, { useState } from 'react'
import TextfieldCustom from './TextfieldCustom';
import styled from 'styled-components';
import RowTitle from '../Typography/RowTitle';
import PrimaryButton from '../Buttons/PrimaryButton'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Paper, Box, TextField, InputAdornment, FilledInput, FormControl, FormHelperText } from '@mui/material';
import axios from 'axios';


function ContactForm({ title, content }) {
    // create state variables 
    const [firstName, setFirstName] = useState("")
    const [firstNameTouched, setFirstNameTouched] = useState(false)

    const [lastName, setLastName] = useState("")
    const [lastNameTouched, setLastNameTouched] = useState(false)

    const [emailAddress, setEmailAddress] = useState("")
    const [emailAddressTouched, setEmailAddressTouched] = useState(false)

    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneNumberTouched, setPhoneNumberTouched] = useState(false)

    const [orchardSize, setOrchardSize] = useState("")
    const [orchardSizeTouched, setOrchardSizeTouched] = useState(false)

    const [companyName, setCompanyName] = useState("")
    const [companyNameTouched, setCompanyNameTouched] = useState(false)

    const [message, setMessage] = useState("")
    const [messageTouched, setMessageTouched] = useState(false)

    // validation 
    // first name validation 
    let firstNameIsValid = firstName.trim().length > 2
    const firstNameIsInvalid = !firstNameIsValid && firstNameTouched
    // last name validation
    let lastNameIsValid = lastName.trim().length > 2
    const lastNameIsInvalid = !lastNameIsValid && lastNameTouched
    // email address validation 
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    let emailAddressIsValid = pattern.test(emailAddress)
    const emailAddressIsInvalid = !emailAddressIsValid && emailAddressTouched
    // first name validation 
    let messageIsValid = message.trim().length > 2
    const messageIsInvalid = !messageIsValid && messageTouched
    // change handler 
    const firstNameChangeHandler = (e) => {
        setFirstName(e.target.value)
    }
    const lastNameChangeHandler = (e) => {
        setLastName(e.target.value)
    }
    const emailAddressChangeHandler = (e) => {
        setEmailAddress(e.target.value)
    }
    const phoneNumberChangeHandler = (e) => {
        setPhoneNumber(e.target.value)
    }
    const orchardSizeChangeHandler = (e) => {
        setOrchardSize(e.target.value)
    }
    const companyNameChangeHandler = (e) => {
        setCompanyName(e.target.value)
    }
    const messageChangeHandler = (e) => {
        setMessage(e.target.value)
    }
    // blur handler 
    const firstNameBlurHandler = (e) => {
        setFirstNameTouched(true)
    }
    const lastNameBlurHandler = (e) => {
        setLastNameTouched(true)
    }
    const emailAddressBlurHandler = (e) => {
        setEmailAddressTouched(true)
    }
    const messageBlurHandler = (e) => {
        setMessageTouched(true)
    }
    // submit handler 
    const submitHandler = () => {
        setFirstNameTouched(true)
        setLastNameTouched(true)
        setEmailAddressTouched(true)
        setMessageTouched(true)

        if (!firstName || !lastName || !emailAddress || !message) {
            return
        }
        const formData = {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            orchardSize: orchardSize,
            companyName: companyName,
            message: message,
            leadtype: "opportunity"
        }
        console.log(formData)
        var config = {
            method: 'post',
            url: '/api/createContact',
            headers: {
                'Content-Type': 'application/json'
            },
            data: formData
        };

        axios(config)
            .then(function (response) {
                console.log(response);
                console.log('success')
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    // use media query for responsiveness 
    const matches = useMediaQuery('(min- width:900px)');
    const paperStyle = {
        backgroundColor: "var(--sanger--theme--white)",
        padding: matches ? "56px" : "56px 16px",
        maxWidth: "900px",
        width: "calc(100% - 16px) ",
        margin: "0 auto"
    }

    return (
        <Container>
            <Paper elevation={2} sx={paperStyle}>
                <RowTitle align="center" title={title}></RowTitle>
                <div className="heading-small">{content} </div>
                {/* <input placeholder='first name' autoComplete="name"></input> */}
                <form >
                    <InputDiv>

                        <TextField id="filled-basic"
                            label="First Name"
                            variant="filled"
                            color="tertiary"
                            helperText={firstNameIsInvalid && "Please enter your first name"}
                            error={firstNameIsInvalid}
                            onChange={firstNameChangeHandler}
                            onBlur={firstNameBlurHandler}
                            value={firstName}
                            required
                            autoComplete
                        />

                        <TextField id="filled-basic"
                            label="Last Name"
                            variant="filled"
                            color="tertiary"
                            helperText={lastNameIsInvalid && "Please enter your last name"}
                            error={lastNameIsInvalid}
                            onChange={lastNameChangeHandler}
                            onBlur={lastNameBlurHandler}
                            value={lastName}
                            required
                            autoComplete
                        />
                    </InputDiv>

                    <InputDiv>
                        <TextField id="filled-basic"
                            label="Email address"
                            variant="filled"
                            color="tertiary"
                            helperText={emailAddressIsInvalid && "Please enter your email address"}
                            error={emailAddressIsInvalid}
                            onChange={emailAddressChangeHandler}
                            onBlur={emailAddressBlurHandler}
                            value={emailAddress}
                            required
                            autoComplete
                        />
                        <TextField id="filled-basic"
                            label="Phone number"
                            variant="filled"
                            color="tertiary"
                            onChange={phoneNumberChangeHandler}
                            value={phoneNumber}
                            autoComplete
                        />

                    </InputDiv>

                    <InputDiv>
                        <TextField id="filled-basic"
                            label="Orchard size"
                            variant="filled"
                            color="tertiary"
                            onChange={orchardSizeChangeHandler}
                            value={orchardSize}
                            autoComplete
                        />
                        <TextField id="filled-basic"
                            label="Company name"
                            variant="filled"
                            color="tertiary"
                            onChange={companyNameChangeHandler}
                            value={companyName}
                            autoComplete
                        />

                    </InputDiv>
                    <div className="text-area">
                        <TextField id="filled-basic"
                            label="Message"
                            variant="filled"
                            color="tertiary"
                            helperText={messageIsInvalid && "Please enter your last name"}
                            error={messageIsInvalid}
                            onChange={messageChangeHandler}
                            onBlur={messageBlurHandler}
                            value={message}
                            required
                            autoComplete
                            fullWidth
                            multiline
                            rows={4}
                        />

                    </div>
                    <PrimaryButton callToActionText="Enquire Now" variant="contained" onClick={submitHandler} />
                </form>
            </Paper>
        </Container >


    )
}

export default ContactForm
const Container = styled.section`
.heading-small{ 
    color: var(--sanger--theme--sys--light--on-surface-variant); 
    text-align: center; 
    margin-top: 8px; 
}
button{ 
    display: block ;
    margin: 16px 0 16px auto; 
}
.text-area{ 
    margin-top: 24px; 
}
form{ 
    margin-top: 32px; 
}
`
const InputDiv = styled.div`
display: flex; 
gap: 24px; 
@media(max-width: 600px){ 
    flex-wrap: wrap ;
    gap: 0; 
    }
>div{ 
    width: 50%; 
    margin-top: 24px; 
    @media(max-width: 600px){ 
        width: 100%; 
    }
}

`