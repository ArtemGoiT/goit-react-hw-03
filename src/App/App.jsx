import { useState } from "react";
import "./App.css";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm"; // Fixed import path
import contactsData from "../contacts.json"; // Fixed import path

const LS_CONTACTS_KEY = "initial-contacts";

const initialContacts = () => {
  const localStorageContacts = localStorage.getItem(LS_CONTACTS_KEY);
  return localStorageContacts ? JSON.parse(localStorageContacts) : contactsData;
};

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  // Функция для обновления состояния контактов
  const updateContacts = (newContacts) => {
    setContacts(newContacts);
    localStorage.setItem(LS_CONTACTS_KEY, JSON.stringify(newContacts));
  };

  // Обработчик изменения в поле поиска
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Фильтрация контактов по введенному значению
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Contacts App</h1>
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} />
      <ContactForm contacts={contacts} onUpdateContacts={updateContacts} />
    </div>
  );
}

export default App;
