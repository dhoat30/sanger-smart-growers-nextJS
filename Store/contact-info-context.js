import { createContext, useState, useEffect } from 'react'

const ContactInfoContext = createContext({
    contactData: null,
    getContactData: function (contactData) { },
})

export function ContactInfoContextProvider(props) {
    const [contactData, setContactData] = useState()

    // get contact data
    function getContactDataHandler(contactData) {
        setContactData(contactData)
    }


    const context = {
        contactData: contactData,
        getContactData: getContactDataHandler,
    }

    return (<ContactInfoContext.Provider value={context}>
        {props.children}
    </ContactInfoContext.Provider>)
}

export default ContactInfoContext