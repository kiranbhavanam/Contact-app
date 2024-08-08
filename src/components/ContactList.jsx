import React from 'react'

const ContactList = ({contacts}) => {
    console.log(contacts);
    const renderList=contacts.map((contact)=>{
        return (
          <div className='flex justify-center items-center gap-2 p-4'>
            <div>{contact.name}</div>
            <div>{contact.contact}</div>
            </div>
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