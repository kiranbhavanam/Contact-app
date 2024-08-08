import "./App.css";
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList'
function App() {
  const contacts=[{name:"kiran",contact:999},{name:"achyuth", contact:1234}]
  return (
    <div className="App">
      {/* <h1 className="font-serif font-bold text-orange-500"> hey kiran~!!</h1> */}
      <Header></Header>
      <AddContact></AddContact>
      <ContactList contacts={contacts}></ContactList>
    </div>
  );
}

export default App;
