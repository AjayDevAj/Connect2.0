import React from 'react';
import { Text } from 'react-native';
import Login from './src/containers/login/Login'
import { Provider } from 'react-redux';
import configureStore  from './src/store/Store';
import GetOtpScreen from './src/containers/Otp/GetOtpScreen';
import Storelocation from './src/containers/Locations/Storelocation';

const store = configureStore();

const App = () => {
  return (
    <Provider store ={store}>
      <Storelocation/>

    </Provider>

  );
}

export default App;

