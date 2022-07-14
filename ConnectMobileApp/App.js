import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/Store';
import Routes from './src/navigation/Routes';
import InternetConnectionAlert from "react-native-internet-connection-alert";
import navigationString from './src/utility/NavigationString';
import CustomerFilter from './src/containers/Customer_Filter/CustomerFilter';

const store = configureStore();

const App = ({navigation}) => {
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
