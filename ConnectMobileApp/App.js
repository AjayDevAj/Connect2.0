
// import React from 'react';
// import { Text } from 'react-native';
// import Login from './src/containers/login/Login'
// import { Provider } from 'react-redux';
// import configureStore  from './src/store/Store';
// import GetOtpScreen from './src/containers/Otp/GetOtpScreen';
// const store = configureStore();

// const App = () => {
//   return (
//     <Provider store ={store}>
//       <GetOtpScreen/>
     
//     </Provider>
    
//   );
// }

// export default App;

import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { SwipeablePanel } from 'rn-swipeable-panel';

export default App = () => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(true);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Welcome to React Native!</Text>
      <Text>To get started, edit App.js</Text>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        {/* <PanelContent /> */}
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}></View>
        <View style={{flex:2,justifyContent:'center',alignItems:'center'}}></View>
        <View style={{flex:3,justifyContent:'center',alignItems:'center'}}></View>

      </SwipeablePanel>
    </View>
  );
};
