import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

export default function ContactsList({ items, removeContact }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <ListItemAvatar
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          textAlign: 'center',
        }}
        key={id}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{ fontWeight: 400 }}
        >{`${name} : ${number}`}</Typography>
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
      </ListItemAvatar>
    );
  });
  return <List>{elements}</List>;
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
