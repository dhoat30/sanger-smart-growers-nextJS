import React, { useState } from 'react'
import styled from 'styled-components';
import RowTitle from '../Typography/RowTitle';
import PrimaryButton from '../Buttons/PrimaryButton'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Paper, TextField, Select, InputLabel, MenuItem, FormControl } from '@mui/material';
import axios from 'axios';
import Alert from '@mui/material/Alert';

function JobForm({ title, content, formName, emailTo, leadType, emailRoute, formType, className }) {
    // create state variables 
    const [firstName, setFirstName] = useState("")
    const [firstNameTouched, setFirstNameTouched] = useState(false)

    const [lastName, setLastName] = useState("")
    const [lastNameTouched, setLastNameTouched] = useState(false)

    const [emailAddress, setEmailAddress] = useState("")
    const [emailAddressTouched, setEmailAddressTouched] = useState(false)

    const [phoneNumber, setPhoneNumber] = useState("")

    const [legalStatus, setLegalStatus] = useState("")

    const [transport, setTransport] = useState("")

    const [accommodation, setAccommodation] = useState('')

    const [found, setFound] = useState('')

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

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
    const legalChangeHandler = (e) => {
        setLegalStatus(e.target.value)
    }
    const transportChangeHandler = (e) => {
        setTransport(e.target.value)
    }
    const accommodationChangeHandler = (e) => {
        setAccommodation(e.target.value)
    }
    const foundChangeHandler = (e) => {
        setFound(e.target.value)
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

    // submit handler 
    const submitHandler = () => {
        setFirstNameTouched(true)
        setLastNameTouched(true)
        setEmailAddressTouched(true)

        if (!firstName || !lastName || !emailAddress) {
            return
        }
        const formData = {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            legalStatus: legalStatus,
            transport: transport,
            accommodation: accommodation,
            found: found,
            emailTo: emailTo,
            leadType: leadType,
            formName: formName,
            formType: formType
        }
        var config = {
            method: 'post',
            url: '/api/createContact',
            headers: {
                'Content-Type': 'application/json'
            },
            data: formData
        };
        setLoading(true)

        axios(config)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });

        // send email 
        var config = {
            method: 'post',
            url: `${emailRoute}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: formData
        };
        axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    setLoading(false)
                    setSuccess(true)
                    // set initial state to empty string 
                    setFirstName('')
                    setEmailAddress('')
                    setPhoneNumber('')
                    setOrchardSize('')
                    setCompanyName('')
                    setMessage('')
                    setFirstNameTouched(false)
                    setLastNameTouched(false)
                    setEmailAddressTouched(false)
                    console.log(response)
                }
                else {
                    setLoading(false)
                    setSuccess(false)
                    setError(true)
                }
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false)
                setSuccess(false)
            });
    }


    // use media query for responsiveness 
    const matches = useMediaQuery('(min-width:900px)');
    const paperStyle = {
        backgroundColor: "var(--sanger--theme--white)",
        padding: matches ? "56px 32px" : "56px 8px",
        maxWidth: "900px",
        width: "calc(100% - 16px) ",
        margin: "0 auto"
    }

    return (
        <Container className={className}>
            <Paper elevation={2} sx={paperStyle}>
                <RowTitle align="center" title={title} ></RowTitle>
                <div className="heading-small" dangerouslySetInnerHTML={{ __html: content }} />
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
                            autoComplete="given-name"

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
                            autoComplete="family-name"

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
                            autoComplete="email"
                        />
                        <TextField id="filled-basic"
                            label="Phone number"
                            variant="filled"
                            color="tertiary"
                            onChange={phoneNumberChangeHandler}
                            value={phoneNumber}
                            autoComplete="phone"

                        />
                    </InputDiv>

                    {/* legal status & transport */}
                    <InputDiv>
                        <FormControl variant="filled" color="tertiary">
                            <InputLabel id="demo-simple-select-filled-label">Legal Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={legalStatus}
                                onChange={legalChangeHandler}
                            >
                                <MenuItem value="NZ Citizen">NZ Citizen</MenuItem>
                                <MenuItem value="NZ Resident">NZ Resident</MenuItem>
                                <MenuItem value="Work Vis">Work Visa</MenuItem>
                                <MenuItem value="Working Holiday">Working Holiday</MenuItem>
                                <MenuItem value="Partnership Visa">Partnership Visa</MenuItem>
                                <MenuItem value="Essential Skills">Essential Skills Visa</MenuItem>
                                <MenuItem value="Open Work Visa">Open Work Visa</MenuItem>
                                <MenuItem value="Student Visa">Student Visa</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="filled" color="tertiary">
                            <InputLabel id="demo-simple-select-filled-label">Do you have your own transport?</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={transport}
                                onChange={transportChangeHandler}
                            >
                                <MenuItem value="Yes">Yes</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                            </Select>
                        </FormControl>
                    </InputDiv>

                    {/* accommodation and roll type  */}
                    <InputDiv>
                        <FormControl variant="filled" color="tertiary">
                            <InputLabel id="demo-simple-select-filled-label">Do you have accommodation?</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={accommodation}
                                onChange={accommodationChangeHandler}
                            >
                                <MenuItem value="Yes">Yes</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="filled" color="tertiary">
                            <InputLabel id="demo-simple-select-filled-label">How did you find out about us?</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={found}
                                onChange={foundChangeHandler}
                            >
                                <MenuItem value="Facebook">Facebook</MenuItem>
                                <MenuItem value="Instagram">Instagram</MenuItem>
                                <MenuItem value="Google">Google</MenuItem>
                                <MenuItem value="Friends">Friends</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </InputDiv>


                    <PrimaryButton success={success} loading={loading} callToActionText="Enquire Now" variant="contained" onClick={submitHandler} />
                    {error && <Alert severity="error">Something went wrong, Please try again. </Alert>}

                </form>
            </Paper>
        </Container >


    )
}

export default JobForm
const Container = styled.section`
margin: 120px 0; 
@media(max-width: 900px){ 
    margin: 40px 0; 
}
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
    padding: 0 56px; 
       @media(max-width: 900px){ 
       padding: 0 8px; 
    }
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