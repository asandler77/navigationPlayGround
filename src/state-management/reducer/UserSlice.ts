import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authenticateUser} from './AuthenticationThunkAPI';
import {AuthData} from "../../login/types";

interface UserAuthentication {
  isAuthenticated: boolean;
}

const initialState: UserAuthentication = {
  isAuthenticated: false,
};

export const userAuthenticationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userFetchingSuccess(state, action: PayloadAction<AuthData>) {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
  extraReducers: {
    [authenticateUser.fulfilled]: (state, action: PayloadAction<AuthData>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const {userFetchingSuccess} = userAuthenticationSlice.actions;
