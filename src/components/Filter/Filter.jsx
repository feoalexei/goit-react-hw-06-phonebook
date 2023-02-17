import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filter-selector';
import { filterAction } from 'redux/filter/filter-slice';
import { StyledFilter } from './Filter.styled';

const Filter = () => {
  const filteredName = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <StyledFilter>
      Find contacts by name
      <input
        type="text"
        value={filteredName}
        onChange={e => dispatch(filterAction(e.target.value))}
      />
    </StyledFilter>
  );
};

export default Filter;
