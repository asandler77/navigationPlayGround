import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './SignIn';
import ForgotPass from './ForgotPass';
import {SignUp} from './SignUp';

export const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        screenOptions={{headerShown: false}}
        name={'SignUp'}
        component={SignUp}
      />
      <AuthStack.Screen
        name={'SignIn'}
        screenOptions={{headerShown: false}}
        component={SignIn}
      />
      <AuthStack.Screen
        name={'ForgotPass'}
        screenOptions={{headerShown: false}}
        component={ForgotPass}
      />
    </AuthStack.Navigator>
  );
};
