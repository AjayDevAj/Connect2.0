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

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationString from '../utility/NavigationString';
import Count_Badge from '../component/Count_Badge';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Chat from '../Chat/Chat';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dashboard</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Chat />
    </View>
  );
}

function CustomersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Customers</Text>
    </View>
  );
}

function ReviewsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Reviews</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function RouteTabBar() {
  return (
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
        }} />
        <Tab.Screen name={navigationString.Chat} component={Chat} options={{headerShown: false, 
          tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="chat"
                size={24}
                color={tabInfo.focused ? "#00C158" : "#5F6368"}
              >
                   {/* <Count_Badge topRight={20} top={10} /> */}
                </Icon>
            );
          }}} />
        <Tab.Screen name={navigationString.Customers} component={CustomersScreen} options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="group"
                size={24}
                color={tabInfo.focused ? "#00C158" : "#5F6368"}
              />
            );
          },
        }} />
        <Tab.Screen name={navigationString.Reviews} component={ReviewsScreen} options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="grade"
                size={24}
                color={tabInfo.focused ? "#00C158" : "#5F6368"}
              />
            );
          },
        }} />
      </Tab.Navigator>
  );
}