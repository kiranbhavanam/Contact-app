import React from 'react'
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom'

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
            <Link to="/add">
            <button className='bg-blue-500 text-white rounded-md p-2  m-2 w-1/4 hover:bg-blue-600'>Go Back</button>
            </Link>
            {renderList}
        </div>
    )
}
export default ContactList