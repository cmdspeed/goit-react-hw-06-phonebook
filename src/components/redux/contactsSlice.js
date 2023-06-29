import { createSlice, nanoid } from '@reduxjs/toolkit';

const appState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: appState,

  reducers: {
    addContact(state, action) {
      const contact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };

      state.contacts.push(contact);
    },
    deleteContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
