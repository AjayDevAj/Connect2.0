
import React from 'react';
import { Text } from 'react-native';

import {Login} from './src/containers/login/Login'

import { Provider } from 'react-redux';
import configureStore from './src/store/Store';
// import { Routes }  from './src/Navigation/Routes';
import { Otp } from './src/containers';
import { Route } from '@react-navigation/native';
import { Router, Scene, Actions, Stack } from 'react-native-router-flux';


const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Stack key="stackOfScreen">

          <Scene
            key="login"
            component={Login}
            type="reset"
            animation="fade"
            initial={true}
            hideNavBar={true}
          />
          <Scene
              key="otp"
              component={Otp}
              type="reset"
              animation="fade"
              hideNavBar={true}
            />   
        </Stack>
      </Router>

       {/* <Login /> */}

    </Provider>

  );
}

export default App;
