import React, {useState} from 'react'
import styled from 'styled-components'
import PrimaryButton from '../Buttons/PrimaryButton'
function SubscriberForm({emailTo, emailRouteUrl, formName, cta} ) {
    const [showLoader, setShowLoader] = useState(false)
    const [response, setResponse] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)
    // submit handler 
    const submitHandler = (e) => {
        e.preventDefault()
        if(formSubmitted){ 
            return
        }
         const body = { 
          email: e.target[0].value, 
          formName: formName, 
          emailTo: emailTo
         }
        setShowLoader(true) 
        fetch(emailRouteUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                if (res === 200) {
                    
                  setShowLoader(false) 
                  setResponse("Submitted!")
                  setFormSubmitted(true)
                }
                else {
                    setResponse("Try again!")
                    setShowLoader(false) 
  
                }
            })
            .catch(err => { 
                console.log(err)
                setShowLoader(false) 
                setResponse("Try again!") 
            })
        }
  return (
    <Form id="subscription-form" className="subscription-area" onSubmit={submitHandler}>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              id="email"
              required
            />
            <PrimaryButton cta={response ? response : cta} showLoader={showLoader} />
          </Form>
  )
}

export default SubscriberForm
const Form  = styled.form`
position: relative; 
margin-top: 10px; 
 button { 
    position: absolute; 
    right: 6px; 
    top: 50%; 
    transform: translate(0, -50%);
 
 }
`
const Input = styled.input`
border: 0 ;
width: 350px; 
padding: 18px 5px; 
border-radius:50px;
@media(max-width: 500px){ 
    width: 100% !important; 
}
&:focus {
    outline: none;
    box-shadow: 0px 0px 2px var(--blue);
  }
`