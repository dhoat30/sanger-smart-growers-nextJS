import React, { useState } from 'react'
import { Box, TextField } from '@mui/material';

function TextfieldCustom() {
    const [enteredFirstName, setEnteredFirstName] = useState('')
    const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false)

    const [enteredLastName, setEnteredLastName] = useState('')
    const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false)


    // validate 
    let enteredFirstNameIsValid = enteredFirstName.trim().length > 2
    let firstNameInputIsInvalid = !enteredFirstNameIsValid && enteredFirstNameTouched

    //  change handlers
    const firstNameChangeHandler = (event) => {
        setEnteredFirstName(event.target.value)
    }
    const lastNameChangeHandler = (event) => {
        setEnteredLastName(event.target.value)
    }
    // blur handler 
    const firstNameBlurHandler = (event) => {
        setEnteredFirstNameTouched(true)
    }
    const lastNameBlurHandler = (event) => {
        setEnteredLastNameTouched(true)
    }
    return (

        <TextField id="filled-basic"
            label="First name"
            variant="filled"
            color="tertiary"
            required
            helperText={firstNameInputIsInvalid && "Please enter first name"}
            error={firstNameInputIsInvalid}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
        />



    )
}

export default TextfieldCustom