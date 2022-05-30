import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import NotesEntry from './notes/NotesEntry';
import ProfileSettings from './ProfileSettings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const EntryPoint = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'HomeScreen title'}}
        />
        <Tab.Screen name="ProfileSettings" component={ProfileSettings} />
        <Tab.Screen name="NoteApplication" component={NotesEntry} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default EntryPoint;
