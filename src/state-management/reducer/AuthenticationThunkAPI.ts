import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthData, LoginData} from '../../login/types';

export const isUserAuthenticated = createAsyncThunk(
  'auth/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<AuthData>(
        'http://localhost:3000/authData',
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        `Request been failed with error: ${e.message}`,
      );
    }
  },
);

export const signUpUser = createAsyncThunk(
  'signUp/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post<LoginData>(
        'http://localhost:3000/users',
        {
          id: '123',
          name: 'Alexey',
          sureName: 'Rock',
        },
      );
      console.log('response', response);
      return response.status;
    } catch (e) {}
  },
);
