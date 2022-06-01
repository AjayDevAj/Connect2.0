import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import navigationString from '../constent/navigationString';
import { Login } from '../containers/login/Login';
import { Otp } from '../containers/otp/Otp';

const Stack = createNativeStackNavigator();

 function Routes() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
         <Stack.Screen name={navigationString.LOGIN} component={Login}/>
         <Stack.Screen name={navigationString.OTP} component={Otp}/>

         </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default Routes;