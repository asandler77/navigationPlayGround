import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginData} from '../../login/types';
import {signUpUser} from './AuthenticationThunkAPI';

interface SignUpUser {
  isSignUpSucceed: boolean;
  userData: LoginData;
}

const initialState: SignUpUser = {
  userData: {email: '', password: ''},
  isSignUpSucceed: false,
};
export const signUpUserSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    signUpSuccess(state, action: PayloadAction<LoginData>) {
      state.userData = action.payload;
    },
  },
  extraReducers: {
    [signUpUser.fulfilled]: (state, action: PayloadAction<LoginData>) => {
      state.isSignUpSucceed = action.payload;
    },
  },
});
