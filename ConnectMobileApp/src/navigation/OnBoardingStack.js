import React from 'react'
import NavigationString from '../utility/NavigationString';

import OnBoarding from '../Splash/OnBoarding';
import Login from '../containers/login/Login';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function LoginStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={OnBoarding} name={NavigationString.OnBoarding} />
        <Stack.Screen component={Login} name={NavigationString.LOGIN} />
      </Stack.Navigator>
    );
}
