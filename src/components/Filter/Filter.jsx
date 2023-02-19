import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selector';
import { selectFilter } from 'redux/filter/filter-selector';
import { filterAction } from 'redux/filter/filter-slice';
import { StyledFilter } from './Filter.styled';

const Filter = () => {
  const filteredName = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  console.log(filteredName);
  console.log(contacts);

  const applyFilter = e => dispatch(filterAction(e.target.value));

  return (
    contacts.length > 0 && (
      <StyledFilter>
        Find contact by name
        <input type="text" value={filteredName} onChange={applyFilter} />
      </StyledFilter>
    )
  );
};

export default Filter;
