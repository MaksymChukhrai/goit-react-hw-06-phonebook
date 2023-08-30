import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'; // Імпортуйте useDispatch

import { addContact } from '../redux/contactsSlice'; // Імпортуйте екшен addContact

const ContactForm = () => {
  const dispatch = useDispatch(); // Отримайте функцію dispatch

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') return;

    // Відправка екшена addContact за допомогою dispatch
    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h2>Name:</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        <h2>Number:</h2>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <button className="number-btn" type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
