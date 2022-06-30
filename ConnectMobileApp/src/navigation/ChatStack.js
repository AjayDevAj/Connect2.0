import React from 'react'
import NavigationString from '../utility/NavigationString';

import Chat from '../Chat/Chat';
import AllChat from '../AllChat/AllChat';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function ChatStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={NavigationString.Chat} component={Chat} />
        <Stack.Screen name={NavigationString.AllChat} component={AllChat} />

      </Stack.Navigator>
    );
  }
