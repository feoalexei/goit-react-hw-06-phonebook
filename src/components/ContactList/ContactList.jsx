import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import { StyledList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selector';
import { deleteContactAction } from 'redux/contacts/contacts-slice';

const ContactList = ({ contacts, deleteContact }) => {
  const contactList = useSelector(selectContacts);
  const dispatch = useDispatch();
  const deleteContact = id => dispatch(deleteContactAction(id));

  return (
    <StyledList>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} deleteContact={deleteContact} />
          </li>
        );
      })}
    </StyledList>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func,
};
