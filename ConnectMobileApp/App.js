import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/Store';
import Routes from './src/navigation/Routes';
import New_Post from './src/containers/Post/New_Post';
import My_Offers_Home from './src/containers/Offers/My_Offers_Home';
import CustomerFilter from './src/containers/Customer_Filter/CustomerFilter';
import InternetConnectionAlert from "react-native-internet-connection-alert";

const store = configureStore();

const App = () => {
  const [isInternetAvailable, setIsInternetAvailable] = useState(false);

  return (

    <InternetConnectionAlert
      onChange={(connectionState) => {
        console.log("Connection State ======>>> : ", connectionState);
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
