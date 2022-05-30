
import React from 'react';
import { Text } from 'react-native';
import Login from './src/containers/login/Login'
import { Provider } from 'react-redux';
import configureStore  from './src/store/Store';
import GetOtpScreen from './src/containers/Otp/GetOtpScreen';
const store = configureStore();

const App = () => {
  return (
    <Provider store ={store}>
      <GetOtpScreen/>
     
    </Provider>
    
  );
}

export default App;
