import {RootState} from '../store';

export const selectIsAuthenticated = (state: RootState): boolean =>
  state.auth.isAuthenticated;

export const selectIsSignUpSucceed = (state: RootState): boolean =>
  state.signUp.isSignUpSucceed;

export const selectIsSignInSucceed = (state: RootState): boolean =>
  state.signIn.isSignInSucceed;
