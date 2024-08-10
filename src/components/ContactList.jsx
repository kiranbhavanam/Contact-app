import React from 'react'
import ContactCard from './ContactCard';

const ContactList = ({contacts,removeHandler}) => {
    console.log(contacts);
    const renderList=contacts.map((contact)=>{
        return (
            <ContactCard contact={contact} removeHandler={removeHandler}></ContactCard>
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