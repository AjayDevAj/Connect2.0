/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: Routes.js
** UsedFor: Navigation routes for all the pages at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
** Navigation route component
** ==========================================================
*
**
*/



/*
**
*
** Common react packages import
*
** 
*/

import React from 'react';
import { Text } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationString from '../utility/NavigationString';
import Login from '../containers/login/Login';
import GetOtpScreen from '../containers/Otp/GetOtpScreen';
import OnBoarding from '../Splash/OnBoarding';
import Storelocation from '../containers/Location/Storelocation';
import RouteTabBar from '../navigation/RouteTabBar';

import Icon from 'react-native-vector-icons/FontAwesome';
import fontFamily from '../utility/Font-Declarations';


/*
**
*
** Create custom function for store location to define its name
*
** 
*/

function StoreLocation() {
  return (
    <Text style={{ color: '#000', fontFamily: fontFamily.Alte_DIN }}>Store Location</Text>
  );
}


/*
**
*
** Create custom function for otp screen to show only back button
*
** 
*/

function OtpScreen() {
  return (
    <Icon name="backward" size={24} color='#fff' />
  );
}

const Stack = createNativeStackNavigator();

/**
 * Routes matain the navigation stacks
 */
 const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen name={navigationString.OnBoarding} component = {OnBoarding} options={{headerShown: false}} />
        <Stack.Screen name={navigationString.LOGIN} component = {Login} options={{headerShown: false}} />
        <Stack.Screen name={navigationString.GetOtpScreen} component = {GetOtpScreen} 
            options={{ 
              headerTitle: (props) => <OtpScreen {...props} onPress={() => navigationString.goBack()} />
            }}
        />
        {/* <Stack.Screen name={navigationString.Location} component = {Storelocation} options={{headerShown: false}}/> */}
        <Stack.Screen name={navigationString.Location} component = {Storelocation} 
            options={{ 
              headerTitle: (props) => <StoreLocation {...props} />
            }}
        />
        <Stack.Screen name={navigationString.RouteTabBar} component = {RouteTabBar} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;