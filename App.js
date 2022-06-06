import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text } from 'react-native';

// SplashScreen imports
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoarding from './src/Splash/OnBoarding';
import appStyles from './src/Splash/styles/AppStyleSheet';

// Login imports
import { Provider } from 'react-redux';
import configureStore  from './src/store/Store';
import Routes from './src/navigation/Routes';

const App = () => {
  // Set state & check if the app is launched for first time
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);

  // Set state for onboarding is already viewed or not
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  // Check if the onboadring is already viewed or not & set states accordingly
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

  const store = configureStore();

  // If app is already installed & onboarding is either viewed or skipped 
  if (viewedOnboarding == true) {
    return (
      <View>
        <Provider store ={store}>
          <Routes/>
          {/* <Login/> */}
        </Provider> 
      </View>
    );
  } else {
    // If app is installed for the first time, show onboarding screen
    return (
      <View style={ appStyles.container }>
        <OnBoarding />
        <StatusBar style="auto" />
      </View>
    );
  }
};

export default App;