import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Label, Input } from './Filter.styled';
export default function Filter({ onChange, value }) {
  const filterid = nanoid();
  return (
    <>
      <Label htmlFor={filterid}>
        Find contacts by name
        <Input
          id={filterid}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </Label>
    </>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
