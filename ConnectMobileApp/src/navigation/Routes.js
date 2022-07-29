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

import React, { useEffect, useMemo, useReducer } from 'react';
import { NavigationContainer, NavigationActions, StackActions, useNavigation } from '@react-navigation/native';

import navigationString from '../utility/NavigationString';
import {navigationRef} from '../navigation/RootNavigation';
import * as RootNavigation from '../navigation/RootNavigation';

import Loader from '../utility/Loader';
import AuthContext from './AuthContext';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { viewed_Onboarding, appToken } from '../utility/Constant';

import authReducer, { initialLoginState } from '../reducers/authReducer';

import OnBoarding from '../Splash/OnBoarding';
import Login from '../containers/login/Login';
import GetOtpScreen from '../containers/Otp/GetOtpScreen';
import Storelocation from '../containers/Location/Storelocation';

import Message from '../containers/Message/Message';
import CustomerFilter from '../containers/Customer_Filter/CustomerFilter';
import Chat_Filter from '../containers/FilterChat/Chat_Filter'

import PurchaseLeadComponent from '../PurchaseLead/PurchaseLeadComponent';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerStack from './DrawerStack';

const Stack = createNativeStackNavigator();

/**
 * Routes matain the navigation stacks
 */
const Routes = () => {
  const [loginState, dispatch] = useReducer(authReducer, initialLoginState);

  const authContext = useMemo(() => ({
    onBoarding: async() => {
      let userToken;
      userToken = null;
      try {
        await AsyncStorage.setItem('userToken', userToken)
      } catch(err) {
        console.log('@Routes::onBoarding Exception ', err);
      }
      dispatch({ type: 'onboarding', token: userToken })
    },
    signIn: async(mobileNo, otp) => {
      let userToken;
      userToken = null;
      if ((mobileNo !== '') && (otp == '1469')) {
        try {
          userToken = await AsyncStorage.getItem(appToken);
          await AsyncStorage.setItem('userToken', userToken)
        } catch(err) {
          console.log('@Routes::signIn Exception ', err);
        }
      }
      dispatch({ type: 'login', token: userToken })
    },
    logOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem(appToken);
      } catch(err) {
        console.log('@Routes::logOut Exception ', err);
      }
      dispatch({ type: 'logout' });
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      <Loader loading={true} />
      let userToken, isAppInstalledFirstTime;
      userToken = null;
      isAppInstalledFirstTime = false;
      try {
        isOnboardingAlreadyViewed = await AsyncStorage.getItem(viewed_Onboarding);
        if (!isOnboardingAlreadyViewed) {
          isAppInstalledFirstTime = true;
        }
        userToken = await AsyncStorage.getItem('userToken');
      } catch(err) {
        console.log('@Routes::firstTimeLoader Exception ', err);
      }
      
      isAppInstalledFirstTime ? dispatch({ type: 'onboarding', token: userToken }) 
      : dispatch({ type: 'login', token: userToken });

      <Loader loading={false} />
    }, 1000)
    
  }, []);

  if (loginState.isLoading) {
    return (
      <Loader loading={loginState.isLoading} />
    );
  }
  
  // Drawer, form
//  Login, otp, onboarding
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {loginState.userToken != null ? (
            <>
              <Stack.Screen component={DrawerStack} name={navigationString.Dashboard} 
              // initialParams={{signOut}}
              />
            </>
          ) : (
            <>
              {loginState.isAppInstalledFirstTime == true  && (
                <Stack.Screen component={OnBoarding} name={navigationString.OnBoarding}  />
              )}
              <Stack.Screen component={Login} name={navigationString.LOGIN} />
              <Stack.Screen component={GetOtpScreen} name={navigationString.GetOtpScreen} />
            </>
          )}
          <Stack.Screen component={Storelocation} name={navigationString.Location} />
          <Stack.Screen component={Message} name={navigationString.Message} />
          <Stack.Screen component={CustomerFilter} name={navigationString.Filter} />
          <Stack.Screen component={Chat_Filter} name={navigationString.Chat_Filter} />
          <Stack.Screen component={PurchaseLeadComponent} name={navigationString.Purchase_Lead_Component} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Routes;

export const resetNavigation = navigation => {
  navigation.reset({
    index: 0,
    // routes: [{ name: navigationString.RouteTabBar }],
    routes: [{ name: navigationString.Dashboard }],
  });
};

export const signOut = () => {
  // alert('ok')
  RootNavigation.navigate(navigationString.LOGIN);
  RootNavigation.reset({
    index: 0,
    key: null,
    routes: [{ name: navigationString.LOGIN }],
  });
  // deleteAll()
};
