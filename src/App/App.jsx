import { useEffect, useState } from "react";

import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import contactsData from "./contacts.json";

const LS_CONTACTS_KEY = "initial-contacts";

const initialContacts = () => {
  const localStorageContacts = localStorage.getItem(LS_CONTACTS_KEY);
  return localStorageContacts ? JSON.parse(localStorageContacts) : contactsData;
};

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");
}
export default App;
