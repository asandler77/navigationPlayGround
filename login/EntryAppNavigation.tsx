import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigator} from './AuthNavigator';
import EntryPoint from '../components/EntryPoint';
import {NavigationContainer} from '@react-navigation/native';

export const RootStack = createStackNavigator();

const EntryAppNavigation = () => {
  const isAuthenticated = false;
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isAuthenticated ? (
          <>
            <RootStack.Group screenOptions={{headerShown: false}}>
              <RootStack.Screen name={'EntryPoint'} component={EntryPoint} />
            </RootStack.Group>
          </>
        ) : (
          <RootStack.Group
            screenOptions={{
              headerShown: false,
            }}>
            <RootStack.Screen
              name={'AuthNavigator'}
              component={AuthNavigator}
            />
          </RootStack.Group>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default EntryAppNavigation;
