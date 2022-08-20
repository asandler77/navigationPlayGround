import {configureStore} from '@reduxjs/toolkit';
import {userAuthenticationSlice} from './reducer/UserSlice';
import {signUpUserSlice} from './reducer/SignUpSlice';

export const store = configureStore({
  reducer: {
    auth: userAuthenticationSlice.reducer,
    signUp: signUpUserSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
