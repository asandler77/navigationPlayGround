import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigator} from './AuthNavigator';
import EntryPoint from '../components/EntryPoint';
import {NavigationContainer} from '@react-navigation/native';
import {
  useAppDispatch,
  useAppSelector,
} from '../state-management/reducer/storeUtils';
import {selectIsAuthenticated} from '../state-management/reducer/authSelector';
import {authenticateUser} from '../state-management/reducer/AuthenticationThunkAPI';

export const RootStack = createStackNavigator();


/*
When component is mountend there is dispatch to authenticateUser function to get isAuthenticated data from db.
The DB is json server that running on file db.json with command:
json-server --watch db.json
 */

const EntryAppNavigation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authenticateUser());
  }, []);

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
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
