import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginData} from '../../login/types';
import {signInUser} from './AuthenticationThunkAPI';

interface SignInUser {
  isSignInSucceed: boolean;
}

const initialState: SignInUser = {
  isSignInSucceed: false,
};

export const signInUserSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {},
  extraReducers: {
    [signInUser.fulfilled]: (state, action: PayloadAction<boolean>) => {
      console.log('pay',action.payload)
      state.isSignInSucceed = action.payload;
      state.isAuthenticated = action.payload;
    },
  },
});
