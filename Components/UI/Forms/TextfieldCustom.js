import React, { useState } from 'react'
import { Box, TextField, InputAdornment, FilledInput, FormControl, FormHelperText } from '@mui/material';

function TextfieldCustom({ fieldType, label, helperText, required, adornment, adornmentText, multiline, rows, fullWidth, autocomplete, getInputValue, submitBtnClicked }) {

    const [enteredValue, setEnteredValue] = useState('')
    const [fieldTouched, setFieldTouched] = useState(false)

    let enteredValueIsValid
    let enteredValueIsInvalid

    // text validation 
    if (fieldType === "text" && required) {
        enteredValueIsValid = enteredValue.trim().length > 2
        enteredValueIsInvalid = !enteredValueIsValid && fieldTouched
    }

    // email validation 
    if (fieldType === "email" && required) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        enteredValueIsValid = pattern.test(enteredValue)
        enteredValueIsInvalid = !enteredValueIsValid && fieldTouched
    }

    // phone validation 
    if (fieldType === "phone" && required) {
        enteredValueIsValid = enteredValue.trim().length > 5

        enteredValueIsInvalid = !enteredValueIsValid && fieldTouched
    }

    //  change handlers
    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
        getInputValue(event.target.value)
    }

    // blur handler 
    const fieldBlurHandler = (event) => {
        setFieldTouched(true)
    }

    return (
        <>
            {adornment ?
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <FilledInput
                        id="filled-adornment-weight"
                        endAdornment={<InputAdornment position="end">{adornmentText}</InputAdornment>}
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="filled-weight-helper-text">{label}</FormHelperText>
                </FormControl>
                :
                <TextField id="filled-basic"
                    label={label}
                    variant="filled"
                    color="tertiary"
                    helperText={(enteredValueIsInvalid || submitBtnClicked) ? helperText : null}
                    error={enteredValueIsInvalid || submitBtnClicked}
                    onChange={valueChangeHandler}
                    onBlur={fieldBlurHandler}
                    value={enteredValue}
                    required={required}
                    rows={rows}
                    multiline={multiline}
                    fullWidth={fullWidth}
                    autocomplete={autocomplete}
                />
            }
        </>




    )
}

export default TextfieldCustom