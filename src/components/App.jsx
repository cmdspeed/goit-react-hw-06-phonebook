import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from './redux/contactsSlice';
import { getContacts } from './redux/selectors';
import { getFilter, setFilter } from './redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const handleSubmit = (name, number) => {
    const id = nanoid();

    if (contacts.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ id, name, number }));
    }
  };

  const handleChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const fitered = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
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
