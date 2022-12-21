import React from 'react'
import styled from 'styled-components'
function TextArea(props) {
    return (
        <Container
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            isInvalid={props.isInvalid}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            className={props.className}
        >
        </Container>
    )
}

export default TextArea

const Container = styled.textarea`
    display: block;
    width: calc(100% - 2px);
    height: 170px;
    border: none;
    outline: none;
    margin: 10px 0 0 0;
    padding: 10px 5px 0 5px;
    border-radius: 5px;
    border: ${props => props.isInvalid ? "2px solid red" : null}; 
`