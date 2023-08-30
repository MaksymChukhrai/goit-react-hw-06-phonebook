import React from 'react';
import { useSelector } from 'react-redux'; // Импортируем useSelector для доступа к состоянию из Redux
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const filter = useSelector(state => state.contacts.filter); // Получаем значение фильтра из Redux

  return (
    <div className="book_section">
      <h1>Phonebook</h1>
      <ContactForm />
      <div className="contact_form">
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <Filter value={filter} />
        <ContactList />
      </div>
    </div>
  );
};

export default App;

