/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoarding from './components/OnBoarding.js';
import Login from './components/Login';
import AppNavigator from './components/AppNavigator';

import appStyles from './assets/styles/AppStyleSheet.js';

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');

      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (err) {
      console.log('Error @checkOnboarding: ', err);
    } finally {
      setIsFirstLaunch(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <View style={ appStyles.container }>
      <AppNavigator /> 
      {viewedOnboarding == true ? <Login /> : <OnBoarding />}
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
