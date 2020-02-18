import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import EditTask from '../screens/EditTask';
import AddTask from '../screens/AddTask';
import Splash from '../screens/Splash';

const Stack = createStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'Splash'} headerMode={'none'}>
      <Stack.Screen name={'Splash'} component={Splash} />
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'AddTask'} component={AddTask} />
      <Stack.Screen name={'EditTask'} component={EditTask} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
