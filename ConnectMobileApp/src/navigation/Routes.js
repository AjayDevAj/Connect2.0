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

import CustomDrawer from '../component/CustomDrawer';
import RouteTabBar from "./RouteTabBar";
import Message from '../containers/Message/Message';
import CustomerFilter from '../containers/Customer_Filter/CustomerFilter';
import Chat_Filter from '../containers/FilterChat/Chat_Filter'
import My_Offers_Home from '../containers/Offers/My_Offers_Home';
import MyPostHome from '../containers/Post/MyPostHome'
import Add_new_offer from '../containers/Offers/Add_new_offers'
import My_Offers from '../containers/Offers/My_Offers';
import PurchaseLeadComponent from '../PurchaseLead/PurchaseLeadComponent';

import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const AuthenticationStack = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Group screenOptions={{headerShown: false}}>
        <AuthStack.Screen component={Login} name={navigationString.LOGIN} />
        <AuthStack.Screen component={GetOtpScreen} name={navigationString.GetOtpScreen} />
      </AuthStack.Group>
    </AuthStack.Navigator>
  )
}

const CommonStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen component={Storelocation} name={navigationString.Location} />
        <Stack.Screen component={Message} name={navigationString.Message} />
        <Stack.Screen component={CustomerFilter} name={navigationString.Filter} />
        <Stack.Screen component={Chat_Filter} name={navigationString.Chat_Filter} />
        <Stack.Screen component={PurchaseLeadComponent} name={navigationString.Purchase_Lead_Component} />
      </Stack.Group> 
    </Stack.Navigator>
  )
}

const DashboardDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen component={My_Offers_Home} name={navigationString.My_Offers_home} />
      <Drawer.Screen component={MyPostHome} name={navigationString.MyPostHome} />
      <Drawer.Screen component={Add_new_offer} name={navigationString.Add_new_offer} />
      <Drawer.Screen component={My_Offers} name={navigationString.My_Offers} />
    </Drawer.Navigator>
  );
}

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
        console.log('@Routes::signIn Exception ', err);
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
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {loginState.userToken != null ? (
            <>
              <Stack.Screen component={RouteTabBar} name={navigationString.RouteTabBar} />
              {/* <Stack.Screen component={AuthenticationStack} name={navigationString.AUTH} /> */}
            </>
          ) : (
            <>
              {loginState.isAppInstalledFirstTime == true  && (
                <Stack.Screen component={OnBoarding} name={navigationString.OnBoarding}  />
              )}
              <Stack.Screen component={AuthenticationStack} name={navigationString.AUTH}  />
              {/* <Stack.Screen component={RouteTabBar} name={navigationString.RouteTabBar} /> */}
            </>
          )}
          <Stack.Screen component={Storelocation} name={navigationString.Location} />
          <Stack.Screen component={Message} name={navigationString.Message} />
          <Stack.Screen component={CustomerFilter} name={navigationString.Filter} />
          <Stack.Screen component={Chat_Filter} name={navigationString.Chat_Filter} />
          <Stack.Screen component={PurchaseLeadComponent} name={navigationString.Purchase_Lead_Component} />
          <Stack.Screen component={DashboardDrawer} name='DrawerNav' />     
        </Stack.Navigator>
        
        {/* <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}
          screenOptions={{ headerShown: false }}>
          {loginState.userToken != null ? (
            <>
              <Drawer.Screen component={RouteTabBar} name={navigationString.RouteTabBar} />
              <Drawer.Screen component={AuthenticationStack} name={navigationString.AUTH} options={{ swipeEnabled: false }} />
            </>
          ) : (
            <>
              {loginState.isAppInstalledFirstTime == true  && (
                <Drawer.Screen component={OnBoarding} name={navigationString.OnBoarding} options={{ swipeEnabled: false }} />
              )}
              <Drawer.Screen component={AuthenticationStack} name={navigationString.AUTH} options={{ swipeEnabled: false }} />
              <Drawer.Screen component={RouteTabBar} name={navigationString.RouteTabBar} />
            </>
          )}
          <Drawer.Screen component={CommonStack} name="CommonStack" options={{ swipeEnabled: false }} />
        </Drawer.Navigator> */}
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
    key: null,
    routes: [{ name: navigationString.LOGIN }],
  });
  // deleteAll()
};
