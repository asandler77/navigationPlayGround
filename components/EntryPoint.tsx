import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import NoteEntry from './notes/NoteEntry';
import ProfileSettings from './ProfileSettings';

const Stack = createNativeStackNavigator();

const EntryPoint = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'HomeScreen title'}}
        />
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
        <Stack.Screen name="NoteApplication" component={NoteEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default EntryPoint;
