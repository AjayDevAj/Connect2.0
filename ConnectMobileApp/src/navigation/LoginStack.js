import React from 'react'
import NavigationString from '../utility/NavigationString';

import Login from '../containers/login/Login';
import GetOtpScreen from '../containers/Otp/GetOtpScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function LoginStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Login} name={NavigationString.LOGIN} />
        <Stack.Screen component={GetOtpScreen} name={NavigationString.GetOtpScreen} />
      </Stack.Navigator>
    );
}
