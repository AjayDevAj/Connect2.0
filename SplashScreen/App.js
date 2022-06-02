/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoarding from './components/OnBoarding.js';
import Login from './components/Login';
import AppNavigator from './components/AppNavigator';

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
    <View style={ styles.Container }>
      <AppNavigator /> 
      {viewedOnboarding == true ? <Login /> : <OnBoarding />}
      <StatusBar style="auto" />
    </View>
  );

  // if (viewedOnboarding == true) {
  //   return (
  //     <View style={ styles.Container }>
  //       <AppNavigator /> 
  //       <Login />
  //       <StatusBar style="auto" />
  //     </View>
  //   );
  // } else {
  //   return (
  //     <View style={ styles.Container }>
  //       {/* Add Navigator */}
  //       <AppNavigator /> 
  //       <OnBoarding />
  //       <StatusBar style="auto" />
  //     </View>
  //   );
  // }
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F7FCFF',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0
  }
});

export default App;
