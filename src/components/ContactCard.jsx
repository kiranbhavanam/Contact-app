import React from "react";
import contactImage from './contact.png'
const ContactCard = ({ contact, removeHandler }) => {
  const removeContact = () => {
    removeHandler(contact.contact);
  };
  return (
    <div className="item w-3/5 m-auto flex justify-between items-center p-4 border-b border-gray-300" key={contact.contact}>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12">
        <img src={contactImage} alt="Contact" className="rounded-full object-cover w-full h-full" />
      </div>
      <div>
        <div className="font-semibold text-lg">{contact.name}</div>
        <div className="text-gray-500">{contact.contact}</div>
      </div>
    </div>
    <div onClick={removeContact} className="text-red-600 hover:text-red-800 cursor-pointer">
      <i className="fa-solid fa-trash"></i>
    </div>
  </div>
  
  );
};

export default ContactCard;
