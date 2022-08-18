import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPass from "./ForgotPass";
import {AuthNavHeader} from "./AuthNavHeader";

export const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Group
        screenOptions={{
          header: () => <AuthNavHeader prevScreenName="כניסה לחשבון" />,
        }}>
        <AuthStack.Group screenOptions={{headerShown: false}}>
          <AuthStack.Screen name={'SignIn'} component={SignIn} />
        </AuthStack.Group>
        <AuthStack.Screen name={'SignUp'} component={SignUp} />
        <AuthStack.Screen name={'ForgotPass'} component={ForgotPass} />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
};
