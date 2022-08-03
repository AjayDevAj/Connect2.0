import React from 'react'
import navigationString from '../utility/NavigationString';

import MyPostHome from '../containers/Post/MyPostHome';
import New_Post from '../containers/Post/New_Post';
import My_Post from '../containers/Post/My_Post';

import RouteTabBar from './RouteTabBar';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function PostStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={MyPostHome} name={navigationString.MyPostHome} />
        <Stack.Screen component={New_Post} name={navigationString.New_Post} />
        <Stack.Screen component={My_Post} name={navigationString.My_Post} />

      </Stack.Navigator>
    );
  }
