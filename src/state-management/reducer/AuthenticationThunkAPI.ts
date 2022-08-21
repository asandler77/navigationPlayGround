import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthData, LoginData} from '../../login/types';
import {uuid} from '../../utils/helpers';

export const isUserAuthenticated = createAsyncThunk(
  'auth/fetchAll',
  async ({email, password}) => {
    const queryParams = {
      params: {
        email: email,
        password: password,
      },
    };
    try {
      const response = await axios.get(
        `http://localhost:3000/users`,
        queryParams,
      );
      console.log('response', response.data);
      return response?.data.length > 0;
    } catch (e) {}
  },
);

export const signUpUser = createAsyncThunk(
  'signUp/fetchAll',
  async ({email, password}) => {
    try {
      const response = await axios.post<LoginData>(
        'http://localhost:3000/users',
        {
          id: uuid,
          email: email,
          password: password,
        },
      );
      console.log('idd', uuid);
      return response.status;
    } catch (e) {}
  },
);

export const signInUser = createAsyncThunk(
  'signIn/fetchAll',
  async ({email, password}) => {
    const queryParams = {
      params: {
        email: email,
        password: password,
      },
    };
    try {
      const response = await axios.get(
        `http://localhost:3000/users`,
        queryParams,
      );
      console.log('response', response.data['email']);
      return !!response?.data;
    } catch (e) {}
  },
);
