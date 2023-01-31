import React, { useState } from 'react'
import styled from 'styled-components';
import RowTitle from '../Typography/RowTitle';
import PrimaryButton from '../Buttons/PrimaryButton'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Paper, TextField } from '@mui/material';
import axios from 'axios';
import Alert from '@mui/material/Alert';

function SubscribeForm({ title, content, formName, emailTo, leadType, emailRoute, formType, className }) {
    // create state variables 
    const [emailAddress, setEmailAddress] = useState("")
    const [emailAddressTouched, setEmailAddressTouched] = useState(false)

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    // email address validation 
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    let emailAddressIsValid = pattern.test(emailAddress)
    const emailAddressIsInvalid = !emailAddressIsValid && emailAddressTouched

    const emailAddressChangeHandler = (e) => {
        setEmailAddress(e.target.value)
    }

    // blur handler 

    const emailAddressBlurHandler = (e) => {
        setEmailAddressTouched(true)
    }

    // submit handler 
    const submitHandler = () => {
        setEmailAddressTouched(true)

        if (!emailAddress) {
            return
        }
        setLoading(true)

        const formData = {
            emailAddress: emailAddress,
            leadType: leadType,
        }
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
                console.log(response)
                setLoading(false)
                setSuccess(true)
                // set initial state to empty string 
                setEmailAddress('')
                setEmailAddressTouched(false)
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false)
                setSuccess(false)
                setError(true)
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
            <form >
                <div className='input-wrapper'>
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
                            size="small"
                            sx={{ borderRadius: "50px" }}
                        />
                    </InputDiv>
                    <PrimaryButton success={success} loading={loading} callToActionText="Subscribe" variant="contained" onClick={submitHandler} />

                    {error && <Alert severity="error">Something went wrong, Please try again. </Alert>}
                </div>
            </form>
        </Container >


    )
}

export default SubscribeForm
const Container = styled.section`

.input-wrapper{
    position:relative ;
}

button{ 
    display: block ;
    padding: 11px 22px; 
    position: absolute ;
    top: 0;
   right: 0; 
}

form{ 

       @media(max-width: 900px){ 
       padding: 0 8px; 
    }
}
`
const InputDiv = styled.div`
display: flex; 

@media(max-width: 600px){ 
    flex-wrap: wrap ;
    gap: 0; 
    }
>div{ 
    width: calc(100% - 30px); 
div{
    border-radius: 50px;  
}
div::before{ 
    border: none !important; 
}
div::after{ 
    border: none !important; 
}
    input{ 
        border-radius: 50px;  
    }   
    @media(max-width: 600px){ 
        width: 100%; 
    }
}

`