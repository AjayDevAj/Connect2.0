import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import configureStore  from './src/store/Store';
import Routes from './src/navigation/Routes';
import New_Post from './src/containers/Post/New_Post';

const store = configureStore();

const App = () => {
  return (
    <Provider store ={store}>
      <Routes/>
      
    </Provider>
    
  );
}

export default App;
