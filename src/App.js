import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { useState } from "react";
function App() {
  // const contacts=[{name:"kiran",contact:999},{name:"achyuth", contact:1234}]
  const [contacts, setContacts] = useState([]);
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
      <Header></Header>
      <AddContact addContactHandler={addContactHandler}></AddContact>
      <ContactList
        contacts={contacts}
        removeHandler={removeHandler}
      ></ContactList>
    </div>
  );
}

export default App;
