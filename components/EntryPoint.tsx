import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./HomeScreen";
import DetailsScreen from './DetailsScreen'

const Stack = createNativeStackNavigator();

const EntryPoint = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HomeScreen title' }}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen}  options={{ title: 'DetailsScreen title' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default EntryPoint;
