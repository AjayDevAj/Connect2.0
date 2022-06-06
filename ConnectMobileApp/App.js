
import React, { useState, useEffect } from 'react';
import { StatusBar, View,Text } from 'react-native';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoarding from './src/Splash/OnBoarding';

import { Provider } from 'react-redux';
import configureStore  from './src/store/Store';
import Routes from './src/navigation/Routes';
import Splash from './src/Splash/OnBoarding'

// const App = () => {
//   const [isFirstLaunch, setIsFirstLaunch] = useState(true);
//   const [viewedOnboarding, setViewedOnboarding] = useState(false);

//   const checkOnboarding = async () => {
//     try {
//       const value = await AsyncStorage.getItem('@viewedOnboarding');

//       if (value !== null) {
//         setViewedOnboarding(true);
//       }
//     } catch (err) {
//       console.log('Error @checkOnboarding: ', err);
//     } finally {
//       setIsFirstLaunch(false);
//     }
//   };

//   useEffect(() => {
//     checkOnboarding();
//   }, []);

//   return (
//     <View>
//       <StatusBar style="auto" />
//       <OnBoarding />
//     </View>
//   );
// };

// export default App;


// import React from 'react';
// import { Text } from 'react-native';
// import { Provider } from 'react-redux';
// import configureStore  from './src/store/Store';
// import Routes from './src/navigation/Routes';
// import Splash from './src/Splash/OnBoarding'


const store = configureStore();

const App = () => {
  return (
    <Provider store ={store}>
      <Routes/>
    </Provider>
    
  );
}

export default App;
