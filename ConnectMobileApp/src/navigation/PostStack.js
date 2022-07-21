import React from 'react'
import NavigationString from '../utility/NavigationString';

import Chat from '../Chat/Chat';
import AllChat from '../AllChat/AllChat';
import MyPostHome from '../containers/Post/MyPostHome';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function PostStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={NavigationString.MyPostHome} component={MyPostHome} />
        {/* <Stack.Screen name={NavigationString.AllChat} component={AllChat} /> */}
        

      </Stack.Navigator>
    );
  }
