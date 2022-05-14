import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import NoteApplication from './notes/NoteApplication';

const Stack = createNativeStackNavigator();

const EntryPoint = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'HomeScreen title'}}
        />
        <Stack.Screen name="NoteApplication" component={NoteApplication} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default EntryPoint;
