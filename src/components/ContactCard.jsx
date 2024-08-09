import React from 'react'

const ContactCard = ({contact}) => {
  return (
    <div className='item  w-3/5 m-auto flex  justify-between items-center'> 
          <div className=' content flex justify-center items-center gap-2 p-4'>
            <div className='header'>{contact.name}</div>
            <div>{contact.contact}</div>
            </div>
            <div><i className='text-red-600 fa-solid fa-trash'></i></div>
            </div>
  )
}

export default ContactCard