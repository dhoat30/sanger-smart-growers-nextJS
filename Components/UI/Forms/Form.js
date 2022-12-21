import React, {useState} from 'react'
import styled from "styled-components";
import PrimaryButton from '../Buttons/PrimaryButton'

function Form({emailTo, emailRouteUrl, formName, cta}) {
  
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
        firstName: e.target[0].value, 
        lastName: e.target[1].value, 
        email: e.target[2].value, 
        phoneNumber: e.target[3].value, 
        companyName: e.target[4].value, 
        dateTime: e.target[5].value, 
        message: e.target[6].value, 
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
            console.log(res)
              if (res === 200) {
                setShowLoader(false) 
                setResponse("Sent!")
                setFormSubmitted(true)
              }
              else if (res === 400) {
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
    <FormStyle action="" className="box-shadow" onSubmit={submitHandler}>
    <TwoColumn>
      <div>
        <label htmlFor="given-name">First name* </label>
        <input type="text" id="given-name" name="given-name"  />
      </div>

      <div>
        <label htmlFor="">Last name* </label>
        <input type="text" name="family-name" id="family-name" required />
      </div>
    </TwoColumn>
    <TwoColumn>
      <div>
        <label htmlFor="email">Email* </label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="tel">Phone Number* </label>
        <input type="tel" name="tel" id="tel" required />
      </div>
    </TwoColumn>
    <TwoColumn>
      <div>
        <label htmlFor="organization">Company Name </label>
        <input type="text" name="organization" id="organization" />
      </div>
      <div>
        <label htmlFor="">Best contact time? </label>
        <input
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
          min="2018-06-07T00:00" 
        />
      </div>
    </TwoColumn>

    <div>
      <label htmlFor="message">Message </label>
      <textarea name="message"></textarea>
    </div>

    <div className="book-demo-btn">
      <PrimaryButton cta={response ? response : cta} showLoader={showLoader}/> 
      
    </div>
    
  </FormStyle>
  )
}

export default Form
const FormStyle = styled.form`
  background: white;
  width: 100%;
  max-width: 600px;
  label {
    font-size: 0.8rem;
    color: var(--blue);
    text-align: left;
  }
  textarea{ 
    font-size: 0.8rem;
    color: var(--blue);
    margin-top: 5px;
    width: 100%;
    padding: 5px 5px;
    border-radius: 0 !important;
    border: 1px solid rgba(224, 224, 224, 1);
    height: 100px; 
    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px var(--blue);
    }
  }
  .book-demo-btn{ 
    margin: 20px 0;
    display: flex; 
    justify-content: center;  
  }
`;
const TwoColumn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 10px;
  @media(max-width: 500px){ 
    flex-direction: column; 
  }
  div {
    width: 100%;
  }

  input {
    font-size: 0.8rem;
    color: var(--blue);
    margin-top: 5px;
    width: 100%;
    padding: 7px 5px;
    border-radius: 0 !important;
    border: 1px solid rgba(224, 224, 224, 1);
    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px var(--blue);
    }
 
  }
  #meeting-time{ 
    padding-bottom: 5px !important; 
}
`;
