import React from 'react';
import { useSelector, useDispatch  } from 'react-redux'; // Импортируем useSelector для доступа к состоянию из Redux
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { setFilter } from '../redux/filtersSlice'; // Импортируем экшен setFilter

const App = () => {
  const filter = useSelector(state => state.contacts.filter); // Получаем значение фильтра из Redux
  const dispatch = useDispatch(); // Получаем функцию dispatch
  return (

    <div className="book_section">
      <h1>Phonebook</h1>
      <ContactForm />
      <div className="contact_form">
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <Filter value={filter} onChange={value => dispatch(setFilter(value))} />
        <ContactList />
      </div>
    </div>
  );
};

export default App;

