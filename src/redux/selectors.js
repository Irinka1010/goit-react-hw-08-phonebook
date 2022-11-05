export const getFilter = state => state.filter;
export const getState = ({ contacts }) => ({
  loading: contacts.loading,
  error: contacts.error,
});

export const getFilteredContacts = ({ filter, contacts }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedFilter = filter.toLocaleLowerCase();

  const filteredContacts = contacts.items.filter(({ name, number }) => {
    const normalizedName = name.toLocaleLowerCase();
    const normalizedNumber = number.toLocaleLowerCase();
    const result =
      normalizedName.includes(normalizedFilter) ||
      normalizedNumber.includes(normalizedFilter);

    return result;
  });
  return filteredContacts;
};
