import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const getLocalStorage = key => {
    return JSON.parse(localStorage.getItem(key));
  };
  const [contacts, setContacts] = useState(() => getLocalStorage('contacts'));
  const [filter, setFilter] = useState('');

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    setLocalStorage('contacts', contacts);
  }, [contacts]);

  const handleSubmit = (name, number) => {
    const id = nanoid();
    const contactsLists = [...contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    setContacts(contactsLists);
  };

  const handleChange = event => {
    setFilter(event.currentTarget.value);
  };

  const fitered = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Phonebook handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <PhoneBookList
        contacts={fitered()}
        number={contacts.number}
        handleDelete={handleDelete}
      />
    </div>
  );
};
