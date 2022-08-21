import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {isUserAuthenticated} from './AuthenticationThunkAPI';
import {AuthData} from '../../login/types';

interface UserAuthentication {
  isAuthenticated: boolean;
}

const initialState: UserAuthentication = {
  isAuthenticated: false,
};

export const userAuthenticationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [isUserAuthenticated.fulfilled]: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      console.log('payload',action.payload)
      state.isAuthenticated = action.payload;
    },
  },
});
