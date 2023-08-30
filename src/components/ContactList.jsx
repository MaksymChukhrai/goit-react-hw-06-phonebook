import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../redux/contactsSlice'; // Импорт экшена removeContact

const ContactsList = () => {
  const dispatch = useDispatch(); // Получаем функцию dispatch

  // Используем useSelector для доступа к списку контактов из Redux-стейта
  const contacts = useSelector(state => state.contacts.list);

  const handleDelete = (contactId) => {
    // Используем dispatch для вызова экшена removeContact с передачей id контакта
    dispatch(removeContact(contactId));
  };
  
  // Ранее рендеринг не работал именно из за этого компонента. useDispatch, useSelector не проходил.
  
  return (
    <ul className="contact_list">
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <button className="delete-btn" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};



export default ContactsList;