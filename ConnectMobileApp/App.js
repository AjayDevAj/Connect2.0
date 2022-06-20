
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import configureStore  from './src/store/Store';
import Routes from './src/navigation/Routes';
import Drawer from './src/navigation/Drawer';

const store = configureStore();

const App = () => {
  return (
    <Provider store ={store}>
      <Routes/>
    </Provider>
    
  );
}

export default App;
