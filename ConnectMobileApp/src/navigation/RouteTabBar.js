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

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationString from '../utility/NavigationString';

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
      <Text>Chat</Text>
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
        <Tab.Screen name={navigationString.Dashboard} component={HomeScreen} />
        <Tab.Screen name={navigationString.Chat} component={SettingsScreen} />
        <Tab.Screen name={navigationString.Customers} component={CustomersScreen} />
        <Tab.Screen name={navigationString.Reviews} component={ReviewsScreen} />
      </Tab.Navigator>
  );
}