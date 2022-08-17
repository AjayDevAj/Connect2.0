import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
// import { AppState } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/Store';
import Routes from './src/navigation/Routes';
import InternetConnectionAlert from "react-native-internet-connection-alert";
import navigationString from './src/utility/NavigationString';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UpdateLocationHome_Screen from './src/containers/UpdateLocation/UpdateLocationHome_Screen';
import UpdateLocation from './src/containers/UpdateLocation/UpdateLocation'
import CustomerFilter from './src/containers/Customer_Filter/CustomerFilter';
import Profile from './src/containers/Profile/Profile';

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
