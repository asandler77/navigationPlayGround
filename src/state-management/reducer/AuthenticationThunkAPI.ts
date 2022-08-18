import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthData} from "../../login/types";

export const authenticateUser = createAsyncThunk(
  'auth/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<AuthData>('http://localhost:3000/authData');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        `Request been failed with error: ${e.message}`,
      );
    }
  },
);
