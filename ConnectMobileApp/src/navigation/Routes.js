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
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationString from '../utility/NavigationString';
import Login from '../containers/login/Login';
import GetOtpScreen from '../containers/Otp/GetOtpScreen';
import OnBoarding from '../Splash/OnBoarding';
// import RouteTabBar from '../navigation/RouteTabBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import fontFamily from '../utility/Font-Declarations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllChat from '../AllChat/AllChat';
import { viewed_Onboarding, location_Data_Key } from '../utility/Constant';
import Message from '../containers/Message/Message';
//import Filter from '../containers/dashboard/Filter';
import CustomerFilter from '../containers/Customer_Filter/CustomerFilter';
import Chat_Filter from '../containers/FilterChat/Chat_Filter'
import { CommonActions } from '@react-navigation/native';
// import Drawer from './Drawer';
import CustomDrawer from '../component/CustomDrawer';
// import RouteTabBar from './RouteTabBar';
import RouteTabBar from "../navigation/RouteTabBar";
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationString from '../utility/NavigationString';
import Chat from '../Chat/Chat';
import Incoming_Chat from '../containers/Incoming_Chat/Incoming_Chat';
import New_Post from '../containers/Post/New_Post';
import My_Offers_Home from '../containers/Offers/My_Offers_Home';
import MyPostHome from '../containers/Post/MyPostHome'
import Add_new_offer from '../containers/Offers/Add_new_offers'
import {navigationRef} from '../navigation/RootNavigation';
import * as RootNavigation from '../navigation/RootNavigation';
import Storelocation from '../containers/Location/Storelocation'
import InterNetScreen from '../containers/InterNetScreen/InterNetScreen';
import My_Offers from '../containers/Offers/My_Offers';
import ManageTeam from '../containers/ManageTeam/ManageTeam';
import AddNewMember from '../containers/ManageTeam/AddNewMember';
import EditMember from '../containers/ManageTeam/EditMember';




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

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

/**
 * Routes matain the navigation stacks
 */
const Routes = () => {

  const [statusKeyLoaded, setStatusKeyLoaded] = useState(false);
  const [initialState, setinitialState] = useState('OnBoarding');

  useEffect(() => {
    getUserState();
  });

  const getUserState = async () => {
    var className = 'navigationString.OnBoarding';
    try {
      const keys = await AsyncStorage.getAllKeys();
      if (keys.includes(viewed_Onboarding)) {
        className = navigationString.OnBoarding;
      } else {
        className = navigationString.LOGIN;
      }
      if (keys.includes(location_Data_Key)) {
        className = navigationString.RouteTabBar;
      }
      setinitialState(className);
      setStatusKeyLoaded(true);
    } catch (error) {
      console.error(error);
    }
    console.log('Get all keys :- return', keys);
  };


  return (
    <>
      {statusKeyLoaded && (

        <NavigationContainer ref={navigationRef}>

          <Drawer.Navigator initialRouteName={initialState}
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{ headerShown: false }}>

            <Drawer.Screen component={RouteTabBar} name={navigationString.RouteTabBar} />

            <Drawer.Screen component={AllChat} name={navigationString.AllChat} />
            <Drawer.Screen component={Login} name={navigationString.LOGIN} />
            <Drawer.Screen component={GetOtpScreen} name={navigationString.GetOtpScreen} />
            <Drawer.Screen component={Storelocation} name={navigationString.Location} />

            <Drawer.Screen component={OnBoarding} name={navigationString.OnBoarding} />
            <Drawer.Screen component={Message} name={navigationString.Message} />
            {/* <Drawer.Screen component={Filter} name={navigationString.Filter} /> */}
            <Drawer.Screen component={CustomerFilter} name={navigationString.Filter} />
            <Drawer.Screen component={Chat_Filter} name={navigationString.Chat_Filter} />
            <Drawer.Screen component={My_Offers_Home} name={navigationString.My_Offers_home} />
            <Drawer.Screen component={MyPostHome} name={navigationString.MyPostHome} />
            <Drawer.Screen component={Add_new_offer} name={navigationString.Add_new_offer} />


            <Drawer.Screen component={My_Offers} name={navigationString.My_Offers} />
            <Drawer.Screen component={ManageTeam} name={navigationString.ManageTeam}/>
            <Drawer.Screen component={AddNewMember} name={navigationString.AddNewMember}/>
            <Drawer.Screen component={EditMember} name={navigationString.EditMember}/>

            {/* <Drawer.Screen component={InterNetScreen} name={navigationString.InterNetScreen} /> */}
            {/* <Drawer.Screen component={RouteTabBar} name={navigationString.RouteTabBar} /> */}

          </Drawer.Navigator>


          {/* <Stack.Navigator initialRouteName={initialState}>
           <Stack.Screen
              name={navigationString.OnBoarding}
              component={OnBoarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={navigationString.LOGIN}
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={navigationString.GetOtpScreen}
              component={GetOtpScreen}
              options={{
                headerTintColor: '#000',
                headerStyle: {
                  backgroundColor: '#F7FCFF',
                  height: 60,
                  shadowColor: '#F7FCFF', // this covers iOS
                  elevation: 0, // this covers Android
                },
                headerShadowVisible: false,
                headerTitle: () => (
                  <OtpScreen onPress={() => navigationString.goBack()} />
                ),
              }}
            />
            <Stack.Screen
              name={navigationString.Location}
              component={Storelocation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={navigationString.RouteTabBar}
              component={RouteTabBar}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={navigationString.AllChat}
              component={AllChat}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={navigationString.Message}
              component={Message}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name={navigationString.Filter}
              component={Filter}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name={navigationString.Drawer}
              component={Drawer}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name={navigationString.Chat_Filter}
              component={Chat_Filter}
              options={{ headerShown: false }}
            />
          </Stack.Navigator> */}
          {/* <Incoming_Chat /> */}
        </NavigationContainer>
      )}
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
  
  //  deleteAll()
};
