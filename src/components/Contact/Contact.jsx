import PropTypes from 'prop-types';
import { deleteContactAction } from '../../redux/contacts/contacts-slice';
import { useDispatch } from 'react-redux';
import { StyledContact, ContactIcon, DeleteBtn } from './Contact.styled';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteContact = () => dispatch(deleteContactAction(contact.id));

  return (
    <StyledContact>
      <p className="contactName">
        <ContactIcon />
        {contact.name}: {contact.number}
      </p>
      <DeleteBtn className="deleteContactBtn" onClick={deleteContact}>
        Delete
      </DeleteBtn>
    </StyledContact>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
