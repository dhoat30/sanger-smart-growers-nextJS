import React from 'react'
import styled from 'styled-components'

function Input(props) {
    return (
        <React.Fragment >
            <InputStyle
                isInvalid={props.isInvalid}
                type={props.type}
                placeholder={props.placeholder}
                id={props.id}
                name={props.name}
                onChange={props.inputChange}
                onBlur={props.blurChange}
                onFocus={props.onFocus}
                value={props.value}
                className={props.className}
                defaultChecked={props.defaultChecked}
            />
        </React.Fragment>
    )
}

export default Input
const InputStyle = styled.input`
  display: block;
  width: calc(100% - 2px);
  height: 45px;
  border: none;
  outline: none;
  margin: 10px 0 0 0;
  padding: 0 5px 0 5px;
  border-radius: 5px;
border: ${props => props.isInvalid ? "2px solid red" : null}; 
`


