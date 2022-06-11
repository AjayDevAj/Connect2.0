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

import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationString from '../utility/NavigationString';
import Login from '../containers/login/Login';
import GetOtpScreen from '../containers/Otp/GetOtpScreen';
import OnBoarding from '../Splash/OnBoarding';
import Storelocation from '../containers/Location/Storelocation';
import RouteTabBar from '../navigation/RouteTabBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Incoming_Chat from '../containers/Incoming_Chat/Incoming_Chat';
import fontFamily from '../utility/Font-Declarations';

import AsyncStorage from '@react-native-async-storage/async-storage';

/*
**
*
** Create custom function for store location to define its name
*
** 
*/

const StoreLocation = () => {
  return (
    <Text style={ locationStyle.locationText }>Store Location</Text>
  );
}

const locationStyle = StyleSheet.create({
  locationText: {
    color: '#000', 
    fontFamily: fontFamily.Alte_DIN,
    fontSize: 18,
    textAlign: 'left',
    opacity: 1,
    letterSpacing: 0,
  }
  
});

/*
**
*
** Create custom function for otp screen to show only back button
*
** 
*/

const OtpScreen = () => {
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
      <Stack.Navigator initialRouteName="Login">
      {/* <Stack.Navigator initialRouteName="OnBoarding"> */}
        <Stack.Screen name={navigationString.OnBoarding} component = {OnBoarding} options={{headerShown: false}} />
        <Stack.Screen name={navigationString.LOGIN} component = {Login} options={{headerShown: false}} />
         <Stack.Screen name={navigationString.GetOtpScreen} component = {GetOtpScreen}  
            options={{ 
              headerTintColor: '#000',
              headerStyle: {
                backgroundColor: '#F7FCFF',
                height: 60,
                shadowColor: '#F7FCFF', // this covers iOS
                elevation: 0, // this covers Android
              },
              headerShadowVisible: false,
              headerTitle: () => <OtpScreen onPress={() => navigationString.goBack()} />
            }}
        />
        {/* <Stack.Screen name={navigationString.Location} component = {Storelocation} options={{headerShown: false}}/> */}
        <Stack.Screen name={navigationString.Location} component = {Storelocation} 
            options={{ 
              headerShown: false

              // headerTintColor: '#000',
              // headerStyle: {
              //   padding: 10,
              //   backgroundColor: '#F7FCFF',
              //   shadowColor: 'transparent', // this covers iOS
              //   elevation: 0, // this covers Android
              // },
              // headerShadowVisible: false,
              // headerTitle: (props) => <StoreLocation {...props} />
            }}
        />
        <Stack.Screen name={navigationString.RouteTabBar} component = {RouteTabBar} options={{headerShown: false}}/>
      </Stack.Navigator>
      <Incoming_Chat />

    </NavigationContainer>
  )
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');

      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (err) {
      console.log('Error @checkOnboarding: ', err);
    } finally {
      setIsFirstLaunch(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  if (viewedOnboarding == true) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="RouteTabBar">        
          <Stack.Screen name={navigationString.LOGIN} component = {Login} options={{headerShown: false}} />
           <Stack.Screen name={navigationString.GetOtpScreen} component = {GetOtpScreen}  
              options={{ 
                headerTintColor: '#000',
                headerStyle: {
                  backgroundColor: '#F7FCFF',
                  height: 60,
                  shadowColor: '#F7FCFF', // this covers iOS
                  elevation: 0, // this covers Android
                },
                headerShadowVisible: false,
                headerTitle: () => <OtpScreen onPress={() => navigationString.goBack()} />
              }}
          />
          {/* <Stack.Screen name={navigationString.Location} component = {Storelocation} options={{headerShown: false}}/> */}
          <Stack.Screen name={navigationString.Location} component = {Storelocation} 
              options={{ 
                headerTintColor: '#000',
                headerStyle: {
                  padding: 10,
                  backgroundColor: '#F7FCFF',
                  shadowColor: 'transparent', // this covers iOS
                  elevation: 0, // this covers Android
                },
                headerShadowVisible: false,
                headerTitle: (props) => <StoreLocation {...props} />
              }}
          />
          <Stack.Screen name={navigationString.RouteTabBar} component = {RouteTabBar} options={{headerShown: false}}/>
        </Stack.Navigator>
        <Incoming_Chat />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OnBoarding">
          <Stack.Screen name={navigationString.OnBoarding} component = {OnBoarding} options={{headerShown: false}} />
          <Stack.Screen name={navigationString.LOGIN} component = {Login} options={{headerShown: false}} />
           <Stack.Screen name={navigationString.GetOtpScreen} component = {GetOtpScreen}  
              options={{ 
                headerTintColor: '#000',
                headerStyle: {
                  backgroundColor: '#F7FCFF',
                  height: 60,
                  shadowColor: '#F7FCFF', // this covers iOS
                  elevation: 0, // this covers Android
                },
                headerShadowVisible: false,
                headerTitle: () => <OtpScreen onPress={() => navigationString.goBack()} />
              }}
          />
          {/* <Stack.Screen name={navigationString.Location} component = {Storelocation} options={{headerShown: false}}/> */}
          <Stack.Screen name={navigationString.Location} component = {Storelocation} 
              options={{ 
                headerTintColor: '#000',
                headerStyle: {
                  padding: 10,
                  backgroundColor: '#F7FCFF',
                  shadowColor: 'transparent', // this covers iOS
                  elevation: 0, // this covers Android
                },
                headerShadowVisible: false,
                headerTitle: (props) => <StoreLocation {...props} />
              }}
          />
          <Stack.Screen name={navigationString.RouteTabBar} component = {RouteTabBar} options={{headerShown: false}}/>
        </Stack.Navigator>
        <Incoming_Chat />
      </NavigationContainer>
    );
  }
  }

export default Routes;