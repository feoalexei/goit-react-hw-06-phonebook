import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { NoContacts, StyledList } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/filter/filter-selector';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return contacts.length > 0 ? (
    <StyledList>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </StyledList>
  ) : (
    <NoContacts>There are no contacts yet</NoContacts>
  );
};

export default ContactList;
