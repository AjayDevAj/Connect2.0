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
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationString from '../utility/NavigationString';
import Login from '../containers/login/Login';
import GetOtpScreen from '../containers/Otp/GetOtpScreen';
import OnBoarding from '../Splash/OnBoarding';
import Icon from 'react-native-vector-icons/FontAwesome';
import fontFamily from '../utility/Font-Declarations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllChat from '../AllChat/AllChat';
import { viewed_Onboarding, setIsLoggedIn, location_Data_Key } from '../utility/Constant';
import Message from '../containers/Message/Message';
import CustomerFilter from '../containers/Customer_Filter/CustomerFilter';
import Chat_Filter from '../containers/FilterChat/Chat_Filter'
import { CommonActions } from '@react-navigation/native';
import CustomDrawer from '../component/CustomDrawer';
import RouteTabBar from "../navigation/RouteTabBar";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Incoming_Chat from '../containers/Incoming_Chat/Incoming_Chat';
import My_Offers_Home from '../containers/Offers/My_Offers_Home';
import MyPostHome from '../containers/Post/MyPostHome'
import Add_new_offer from '../containers/Offers/Add_new_offers'
import {navigationRef} from '../navigation/RootNavigation';
import * as RootNavigation from '../navigation/RootNavigation';
import Storelocation from '../containers/Location/Storelocation'
// import InterNetScreen from '../containers/InterNetScreen/InterNetScreen';

import My_Offers from '../containers/Offers/My_Offers';
import PurchaseLeadComponent from '../PurchaseLead/PurchaseLeadComponent';

/*
 **
 *
 ** Create custom function for store location to define its name
 *
 **
 */

const locationStyle = StyleSheet.create({
  locationText: {
    color: '#000',
    fontFamily: fontFamily.Alte_DIN,
    fontSize: 18,
    textAlign: 'left',
    opacity: 1,
    letterSpacing: 0,
  },
});

/*
 **
 *
 ** Create custom function for otp screen to show only back button
 *
 **
 */

const OtpScreen = () => {
  return <Icon name="backward" size={24} color="#fff" />;
};

/**
 * Routes matain the navigation stacks
 */
const Routes = () => {

  const [statusKeyLoaded, setStatusKeyLoaded] = useState(false);
  const [initialState, setinitialState] = useState('OnBoarding');
  const [navigateTo, setNavigateTo] = useState('OnBoardingScreen')
  useEffect(() => {
    getUserState();
  });

  const getUserState = async () => {
    var className = 'navigationString.OnBoarding';
    try {
      const keys = await AsyncStorage.getAllKeys();
alert(!keys.includes(viewed_Onboarding))
      // Check if user is logged in : if not loggin
      if (!keys.includes(viewed_Onboarding) || (await AsyncStorage.getItem(viewed_Onboarding) !== true)) {
        className = navigationString.OnBoarding;
      } else if (!keys.includes(setIsLoggedIn) || (await AsyncStorage.getItem(setIsLoggedIn) !== true)) {
        className = navigationString.LOGIN;
        setNavigateTo('LoginScreen');
      } else {
        // Check if user is logged in : if yes, go to dashboard
        if (!keys.includes(location_Data_Key) && (await AsyncStorage.getItem(location_Data_Key) === null)) {
          className = navigationString.RouteTabBar;
          setNavigateTo('DashboardScreen');
        } else {
          // Check if user is logged in first time
          className = navigationString.OnBoarding;
        }
      }
      
      setinitialState(className);
      setStatusKeyLoaded(true);
    } catch (error) {
      console.error(error);
    }
    console.log('Get all keys :- return', keys);
  };
 console.log('=== Navigate to following screen ===', navigateTo);
 console.log('=== Initial Route name is ===', navigationRef);

 /*=== OnBoarding stack Navigator ===*/

 const StackOnboard = createNativeStackNavigator();

 function OnBoardingScreenStack() {
  return (
    <StackOnboard.Navigator initialRouteName={navigationString.OnBoarding} 
      screenOptions={{headerShown: false}}>
        <StackOnboard.Screen component={OnBoarding} name={navigationString.OnBoarding} />
    </StackOnboard.Navigator>
  );
 };

 /*=== Login stack Navigator ===*/
 
 const StackLogin = createNativeStackNavigator();

 function LoginScreenStack() {
  return (
    <StackLogin.Navigator initialRouteName={navigationString.LOGIN} 
      screenOptions={{headerShown: false}}>
        <StackLogin.Screen component={Login} name={navigationString.LOGIN} />
        <StackLogin.Screen component={GetOtpScreen} name={navigationString.GetOtpScreen} />
        <StackLogin.Screen component={Storelocation} name={navigationString.Location} />
    </StackLogin.Navigator>
  );
 };

 /*=== Dashboard Drawer Navigator ===*/
 
 const Drawer = createDrawerNavigator();

 function DashboardScreenStack() {
  return (
    <Drawer.Navigator initialRouteName={navigationString.RouteTabBar}
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: false }}>
      {/* <Drawer.Screen component={Storelocation} name={navigationString.Location} /> */}
      <Drawer.Screen component={RouteTabBar} name={navigationString.RouteTabBar} />

      <Drawer.Screen component={AllChat} name={navigationString.AllChat} />
      <Drawer.Screen component={Message} name={navigationString.Message} />
      <Drawer.Screen component={CustomerFilter} name={navigationString.Filter} />
      <Drawer.Screen component={Chat_Filter} name={navigationString.Chat_Filter} />
      <Drawer.Screen component={My_Offers_Home} name={navigationString.My_Offers_home} />
      <Drawer.Screen component={MyPostHome} name={navigationString.MyPostHome} />
      <Drawer.Screen component={Add_new_offer} name={navigationString.Add_new_offer} />
      <Drawer.Screen component={PurchaseLeadComponent} name={navigationString.Purchase_Lead_Component} />
      <Drawer.Screen component={My_Offers} name={navigationString.My_Offers} />
    </Drawer.Navigator>
  );
 };


 const StackApp = createNativeStackNavigator();
  return (
    <>
    <NavigationContainer ref={navigationRef}>
      <StackLogin.Navigator initialRouteName={initialState} 
        screenOptions={{headerShown: false}}>
          <StackLogin.Screen component={OnBoardingScreenStack} name={navigationString.OnBoarding} />
          <StackLogin.Screen component={LoginScreenStack} name={navigationString.LOGIN} />

          <StackLogin.Screen component={DashboardScreenStack} name={navigationString.RouteTabBar} />
      </StackLogin.Navigator>
    </NavigationContainer>
    </>
  );
};

export default Routes;

export const resetNavigation = navigation => {
  navigation.reset({
    index: 0,
    routes: [{ name: navigationString.RouteTabBar }],
  });
};

export const signOut = () => {
  console.log('response.status getChatList signOut', CommonActions);
  RootNavigation.navigate(navigationString.LOGIN);
  RootNavigation.reset({
    index: 0,
    routes: [{ name: navigationString.LOGIN }],
  });
  deleteAll()
};
