import React from 'react'
import ContactCard from './ContactCard';

const ContactList = ({contacts}) => {
    console.log(contacts);
    const renderList=contacts.map((contact)=>{
        return (
            <ContactCard contact={contact}></ContactCard>
        )
    })
    console.log("renderList",renderList)
    return(
        <div>
            {renderList}
        </div>
    )
}

export default ContactList