import 'react-native-gesture-handler';
import React from 'react';
import Notes from './Notes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CreateNote from './CreateNote';

const Stack = createStackNavigator();
const NotesEntry = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Notes" component={Notes} />
                <Stack.Screen name="CreateNote" component={CreateNote} />
            </Stack.Navigator>
    );
};


export default NotesEntry;
