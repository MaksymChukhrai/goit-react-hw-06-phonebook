import React from 'react';
import { useSelector, useDispatch  } from 'react-redux'; // Импортируем useSelector для доступа к состоянию из Redux
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { setFilter } from '../redux/filtersSlice'; // Импортируем экшен setFilter
import useLocalStorage from '../utils/useLocalStorage'; // Импорт хука useLocalStorage

import { addContact, removeContact } from '../redux/contactsSlice';



const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []); // Используем хук useLocalStorage
  
  // const filter = useSelector(state => state.filters.filter); // Получаем значение фильтра из Redux
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch(); // Получаем функцию dispatch
  
  const handleAddContact = (contact) => {
  setContacts([...contacts, contact]); // Обновляем состояние контактов и сохраняем в Local Storage
  dispatch(addContact(contact));
  };
  
  const handleDeleteContact = (contactId) => {
  const updatedContacts = contacts.filter(contact => contact.id !== contactId);
  setContacts(updatedContacts); // Обновляем состояние контактов и сохраняем в Local Storage
  dispatch(removeContact(contactId));
  };
  return (
  
  <div className="book_section">
    <h1>Phonebook</h1>
    <ContactForm onAddContact={handleAddContact}/>
    <div className="contact_form">
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      <Filter  />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  </div>
  );
  };
  
  export default App;