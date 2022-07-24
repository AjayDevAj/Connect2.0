import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
// import { AppState } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/Store';
import Routes from './src/navigation/Routes';
import InternetConnectionAlert from "react-native-internet-connection-alert";
import navigationString from './src/utility/NavigationString';
import AsyncStorage from '@react-native-async-storage/async-storage';
<<<<<<< HEAD
import GetOtpScreen from './src/containers/Location/Storelocation';
import MyPostHome from './src/containers/Post/MyPostHome';
=======
>>>>>>> d1d6fad8cd16a967b751a2d3ac5b5c033270a609

const store = configureStore();

const App =  ({navigation}) => {
  const [isInternetAvailable, setIsInternetAvailable] = useState(false);
  return (

    <InternetConnectionAlert
      onChange={(connectionState) => {
        // console.log("Connection State ======>>> : ", connectionState);
        setIsInternetAvailable(connectionState.isConnected);

      }}
    >
     
      <Provider store={store}>
        <Routes />
      </Provider>
    </InternetConnectionAlert>

  );
}

export default App;
