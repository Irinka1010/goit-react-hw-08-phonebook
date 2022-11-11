import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Label, Blok, Input } from './Filter.styled';
export default function Filter({ onChange, value }) {
  const filterid = nanoid();
  return (
    <Blok>
      <Label htmlFor={filterid}>Find contacts by name</Label>
      <Input
        id={filterid}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </Blok>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
