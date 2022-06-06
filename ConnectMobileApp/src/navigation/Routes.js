import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationString from '../constent/navigationString';
import Login from '../containers/login/Login';
import GetOtpScreen from '../containers/Otp/GetOtpScreen';

const Stack = createNativeStackNavigator();

/**
 * Routes matain the navigation stacks
 */
 const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name={navigationString.LOGIN} component = {Login} options={{headerShown: false}} />
        <Stack.Screen name={navigationString.GetOtpScreen} component = {GetOtpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;