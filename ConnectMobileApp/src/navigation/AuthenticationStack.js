import React from 'react'
import NavigationString from '../utility/NavigationString';

import OnBoarding from '../Splash/OnBoarding';
import Login from '../containers/login/Login';
import GetOtpScreen from '../containers/Otp/GetOtpScreen';
import Storelocation from '../containers/Location/Storelocation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AuthenticationStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={OnBoarding} name={NavigationString.OnBoarding} />
        <Stack.Screen component={Login} name={NavigationString.LOGIN} />
        <Stack.Screen component={GetOtpScreen} name={NavigationString.GetOtpScreen} />
        {/* <Stack.Screen component={Storelocation} name={NavigationString.Location} /> */}
      </Stack.Navigator>
    );
}
