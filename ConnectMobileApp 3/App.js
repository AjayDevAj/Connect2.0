
import React from 'react';
import { Text } from 'react-native';
import Login from './src/containers/login/Login'
import { Provider } from 'react-redux';
import configureStore  from './src/store/Store';
const store = configureStore();

const App = () => {
  return (
    <Provider store ={store}>
      <Login/>
    </Provider>
    
  );
}

export default App;
