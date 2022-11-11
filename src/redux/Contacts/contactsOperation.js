import * as api from '../../shared/api/contact';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
const isDuplicate = ({ name, number }, contacts) => {
  const normalizedName = name.toLowerCase();
  const normalizedPhone = number.toLowerCase();

  const result = contacts.find(item => {
    return (
      normalizedName === item.name.toLowerCase() &&
      normalizedPhone === item.number.toLowerCase()
    );
  });

  return Boolean(result);
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();

      if (isDuplicate(data, contacts.items)) {
        const massege = Notiflix.Notify
          .info`${data.name}: ${data.number} is already exist`;
        return massege;
      }
    },
  }
);
export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
