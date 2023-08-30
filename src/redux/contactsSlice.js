import { createSlice } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: initialContacts,
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.list.push(action.payload);
    },
    removeContact: (state, action) => {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    // Добавленные действия
    updateContact: (state, action) => {
      const updatedContact = action.payload;
      const index = state.list.findIndex(contact => contact.id === updatedContact.id);
      if (index !== -1) {
        state.list[index] = updatedContact;
      }
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, removeContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;

