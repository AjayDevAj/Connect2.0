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

import React, { useState, useEffect, useMemo, useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navigationString from '../utility/NavigationString';
import {navigationRef} from '../navigation/RootNavigation';
import * as RootNavigation from '../navigation/RootNavigation';

import OnBoardingStack from './OnBoardingStack';
import AuthenticationStack from './AuthenticationStack';
import DashboardDrawer from './DashboardDrawer';

import Loader from '../utility/Loader';
import AuthContext from './AuthContext';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { viewed_Onboarding, appToken } from '../utility/Constant';

import authReducer, { initialLoginState } from '../reducers/authReducer';

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
      if (mobileNo !== '' && otp == '1469') {
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
        console.log('@Routes::signIn Exception ', err);
      }
      console.log(isOnboardingAlreadyViewed);
      isAppInstalledFirstTime ? dispatch({ type: 'onboarding', token: userToken }) 
      : dispatch({ type: 'login', token: userToken });
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
      <NavigationContainer ref={navigationRef}>
        {loginState.isAppInstalledFirstTime == true ? 
        <OnBoardingStack />
        : (loginState.userToken !== null ? 
        (
          <DashboardDrawer />
        ): 
        (
          <AuthenticationStack />
        ))}
      </NavigationContainer>
    </AuthContext.Provider>
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
  RootNavigation.navigate(navigationString.LOGIN);
  RootNavigation.reset({
    index: 0,
    routes: [{ name: navigationString.LOGIN }],
  });
  deleteAll()
};
