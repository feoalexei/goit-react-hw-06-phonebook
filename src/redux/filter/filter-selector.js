import { selectContacts } from 'redux/contacts/contacts-selector';

export const selectFilter = state => state.filter;

export const selectFilteredContacts = state => {
  const filter = selectFilter(state);
  const contacts = selectContacts(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
