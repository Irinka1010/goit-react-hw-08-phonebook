import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';

export default function ContactsList({ items, removeContact }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <ListItem
        disableGutters
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            type="button"
            onClick={() => {
              removeContact(id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
        key={id}
      >
        <ListItemText primary={`${name} : ${number}`} />
      </ListItem>
    );
  });
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
      }}
    >
      {elements}
    </List>
  );
}

ContactsList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      createdAt: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
