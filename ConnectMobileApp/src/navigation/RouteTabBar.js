/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: RouteTabBar.js
** UsedFor: Navigation route tabs at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
** Navigation route tabs component
** ==========================================================
*
**
*/




// import React from 'react';
// import {NavigationContainer, StackActions} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Dashboard from '../containers/login/Login';

// const Stack = createNativeStackNavigator();

// /**
//  * TabBar maintain the tab controllers
//  */
//  const Routes = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name={navigationString.Dashboard} component = {Dashboard} options={{headerShown: false}} />
//         <Stack.Screen name={navigationString.Chat} component = {Dashboard} options={{headerShown: false}}/>
//         <Stack.Screen name={navigationString.Customers} component = {Dashboard} options={{headerShown: false}}/>
//         <Stack.Screen name={navigationString.Reviews} component = {Dashboard} options={{headerShown: false}}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default Routes;





/*
**
*
** Common react packages import
*
** 
*/

import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationString from '../utility/NavigationString';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Customer from '../Customer/Customer';
import Incoming_Chat from '../containers/Incoming_Chat/Incoming_Chat';
import Review from '../containers/Review/Review'
import ChatStack from '../navigation/ChatStack';
import fontFamily from '../utility/Font-Declarations';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dashboard</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function RouteTabBar() {
  return (
    <>
    <Tab.Navigator>
      <Tab.Screen name={navigationString.Dashboard} component={HomeScreen} options={{
        tabBarIcon: (tabInfo) => {
          return (
            <Icon
              name="dashboard"
              size={24}
              color={tabInfo.focused ? "#00C158" : "#5F6368"}
            />
          );
        },
        tabBarLabelStyle: { 
          opacity: 1,
          fontSize: 10,
          fontFamily: fontFamily.Alte_DIN
        },
        tabBarInactiveTintColor: '#5F6368',
        tabBarActiveTintColor: '#000',
      }} />
      <Tab.Screen name={navigationString.Chat} component={ChatStack} options={{
        headerShown: false, 
        tabBarBadge: 5,
        tabBarBadgeStyle: { backgroundColor: '#EDEDED', color: '#657180'},
        tabBarIcon: (tabInfo) => {
          return (
            <Icon
              name="chat"
              size={24}
              color={tabInfo.focused ? "#00C158" : "#5F6368"}
            />
          );
        },
        tabBarLabelStyle: { 
          opacity: 1,
          fontSize: 10,
          fontFamily: fontFamily.Alte_DIN
        },
        tabBarInactiveTintColor: '#5F6368',
        tabBarActiveTintColor: '#000',
      }} />
      <Tab.Screen name={navigationString.Customers} component={Customer} options={{
        headerShown: false, 
        tabBarIcon: (tabInfo) => {
          return (
            <Icon
              name="group"
              size={24}
              color={tabInfo.focused ? "#00C158" : "#5F6368"}
            />
          );
        },
        tabBarLabelStyle: { 
          opacity: 1,
          fontSize: 10,
          fontFamily: fontFamily.Alte_DIN
        },
        tabBarInactiveTintColor: '#5F6368',
        tabBarActiveTintColor: '#000',
      }} />
      <Tab.Screen name={navigationString.Reviews} component={Review} options={{
        headerShown: false,
        tabBarBadge: 7,
        tabBarBadgeStyle: { backgroundColor: '#EDEDED', color: '#657180'},
        tabBarIcon: (tabInfo) => {
          return (
            <Icon
              name="grade"
              size={24}
              color={tabInfo.focused ? "#00C158" : "#5F6368"}
            />
          );
        },
        tabBarLabelStyle: { 
          opacity: 1,
          fontSize: 10,
          fontFamily: fontFamily.Alte_DIN
        },
        tabBarInactiveTintColor: '#5F6368',
        tabBarActiveTintColor: '#000',
      }} />
    </Tab.Navigator>
    <Incoming_Chat />
    </>
  );
}