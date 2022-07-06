import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import configureStore  from './src/store/Store';
import Routes from './src/navigation/Routes';
import New_Post from './src/containers/Post/New_Post';
import My_Offers_Home from './src/containers/Offers/My_Offers_Home';
import CustomerFilter from './src/containers/Customer_Filter/CustomerFilter';

const store = configureStore();

const App = () => {
  return (
    <Provider store ={store}>
      <CustomerFilter/>
      
    </Provider>
    
  );
}

export default App;
