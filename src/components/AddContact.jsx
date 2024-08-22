import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify=()=>{
  toast("Added Contact")
}
const contactChecker=(val)=>{
  if(isNaN(val) || val.length!==10)
    return true
  return false
}
const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate(); // useNavigate hook for navigation

  const addDetail = (e) => {
    e.preventDefault();
    if (name === "" || contact === "") {
      alert("All fields are mandatory!");
      return;
    }
    addContactHandler({ name, contact });
    setName("");
    setContact("");
    navigate("/"); // Navigate to the contact list
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Contact</h2>
  <form onSubmit={addDetail} className="space-y-4">
    <div className="flex flex-col">
      <label htmlFor="name" className="text-sm font-medium text-gray-600">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="contact" className="text-sm font-medium text-gray-600">Contact</label>
      <input
        type="text"
        name="contact"
        placeholder="Contact"
        value={contact}
        onChange={(e) =>{setContact(e.target.value)
          contactChecker(e.target.value)}
        }
  
        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <div className={contactChecker(contact)?'text-red-500 text-sm':'hidden'}>contact must be 10 digit number</div>
    </div>
    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={notify}>
      Add
    </button>
    <ToastContainer/>
  </form>
</div>

  );
};

export default AddContact;
