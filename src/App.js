import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
function App() {
  // const contacts=[{name:"kiran",contact:999},{name:"achyuth", contact:1234}]
  const LOCAL_STORAGE_KEY="contacts"
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
 
  useEffect(()=>{
     const retrievedContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
     if(retrievedContacts) setContacts(retrievedContacts)
  },[])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
  const addContactHandler = (contact) => {
    const newContacts = [...contacts, contact];
    setContacts(newContacts);
  };
  const removeHandler = (arg) => {
    // console.log("old contacts:" ,contacts)
    const newContacts = contacts.filter((contact) => contact.name !== arg);
    // console.log("new contacts after removing: ",newContacts)
    setContacts(newContacts);
  };
  return (
    <div className="App">
      {/* <h1 className="font-serif font-bold text-orange-500"> hey kiran~!!</h1> */}
      <Router>
      <Header></Header>

      <Routes>
      <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
      <Route path="/" element={<ContactList contacts={contacts} removeHandler={removeHandler} />} />
      </Routes>
      {/* <AddContact addContactHandler={addContactHandler}></AddContact>
      <ContactList
        contacts={contacts}
        removeHandler={removeHandler}
      ></ContactList> */}
      </Router>
      
    </div>
  );
}

export default App;
