import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import UpperviewBG from './assets/images/Group2491.svg';

//import { SwipeablePanel } from 'rn-swipeable-panel';
import {SwipeablePanel} from 'react-native-swipe-up-panel';

export default App = () => {

  const[username, SetuserName]=useState('Priyanka11')
  // const [panelProps, setPanelProps] = useState({
  //   fullWidth: true,
  //   openLarge: true,
  //   showCloseButton: true,
  //   onClose: () => closePanel(),
  //   onPressCloseButton: () => closePanel(),
  //   // ...or any prop you want
  // });
  // const [isPanelActive, setIsPanelActive] = useState(false);

  // const openPanel = () => {
  //   setIsPanelActive(true);
  // };

  // const closePanel = () => {
  //   setIsPanelActive(false);
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F7FCFF', opacity: 100}}>
      {/* // Uper View */}

      <View style={{flex: 2}}>
        <View>
          <Text style={{color:'#000000'}}>
          Welcome to connect {username}!
          </Text>
        </View>
        <View>
          <Text>
            You have access to the following locations. You can manage your
            locations in the “locations” option given in the navigation.
          </Text>
        </View>
        <View>
          <UpperviewBG width={120} height={40} />
        </View>
      </View>

      {/* BottomView */}
      <View style={{flex: 1.6, backgroundColor: 'green'}}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
