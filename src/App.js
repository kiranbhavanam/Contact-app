import "./App.css";
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList'
function App() {
  return (
    <div className="App">
      <h1 className="font-serif font-bold text-orange-500"> hey kiran~!!</h1>
      <Header></Header>
      {/* <AddContact></AddContact>
      <ContactList></ContactList> */}
    </div>
  );
}

export default App;
