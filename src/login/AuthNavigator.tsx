import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPass from './ForgotPass';

export const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen name={'SignUp'} component={SignUp} />
        <AuthStack.Screen name={'SignIn'} component={SignIn} />
      <AuthStack.Screen name={'ForgotPass'} component={ForgotPass} />
    </AuthStack.Navigator>
  );
};
