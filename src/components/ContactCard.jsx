import React from "react";
import contactImage from './contact.png'
const ContactCard = ({ contact, removeHandler }) => {
  const removeContact = () => {
    removeHandler(contact.name);
  };
  return (
    <div className="item  w-3/5 m-auto flex  justify-between items-center">
      <div>
      <div className=" content flex justify-center items-center gap-2 p-4 align-middle">
      <div className="w-8 align-middle">
        <img src={contactImage} alt="" />
        </div>
        <div className="header">{contact.name}</div>
        <div>{contact.contact}</div>
      </div>
      </div>
      <div onClick={removeContact}>
        <i className="text-red-600 fa-solid fa-trash cursor-pointer"></i>
      </div>
    </div>
  );
};

export default ContactCard;
