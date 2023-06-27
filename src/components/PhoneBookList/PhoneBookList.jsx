import propTypes from 'prop-types';

export const PhoneBookList = ({ contacts, handleDelete }) => (
  <ul>
    {contacts.map((contact, id) => (
      <>
        <li key={id}>
          {contact.name}: {contact.number}
        </li>
        <button onClick={() => handleDelete(contact.id)}>Delete</button>
      </>
    ))}
  </ul>
);

PhoneBookList.propTypes = {
  contacts: propTypes.array,
  handleDelete: propTypes.func,
};
