import * as React from 'react';
import HomeScreen from './HomeScreen';
import NotesEntry from './notes/NotesEntry';
import ProfileSettings from './ProfileSettings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const EntryPoint = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NoteApplication"
        component={NotesEntry}
        options={{
          tabBarLabel: 'Notes',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-edit"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default EntryPoint;
