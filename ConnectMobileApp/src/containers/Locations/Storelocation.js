import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadStoreLocationData} from '../../actions/StoreLocationAction';

import {FlatList} from 'react-native-gesture-handler';
//import UpperviewBG from './assets/images/Group2491.svg';
import UpperviewBG from '../../assets/images/Group2491';
import styles from './StorleLocationStylesheet';

import {SwipeablePanel} from 'rn-swipeable-panel';

export default Storelocation = () => {
  const dispatch = useDispatch();
  const LocationResonce = useSelector(store => store.StoreLocationDataResponse);
  console.log('My data responce', LocationResonce);

  useEffect(() => {
    //loadStoreLocationData()
    //console.log()
    dispatch(loadStoreLocationData());
  }, [LocationResonce]);

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,

    // openLarge: true,
    // showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });

  const [username, SetuserName] = useState('Priyanka11');
  const [isPanelActive, setIsPanelActive] = useState(true);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F7FCFF', opacity: 100}}>
      {/* // Uper View */}

      <View style={{flex: 2}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            // margin: 15,
            // marginTop: '40%',
            padding: 30,
            // backgroundColor: 'red',
          }}></View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            // margin: 15,
            //marginTop: 50,
            padding: 30,
            // marginBottom:60,
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              marginBottom: 30,
            }}>
            <Text style={{color: '#000000', fontSize: 18}}>
              Welcome to connect{' '}
              <Text style={{color: '#0070FC', opacity: 100}}>{username}!</Text>
            </Text>
          </View>
          <Text
            style={{
              //flex:2,
              //justifyContent: 'space-between',
              // margin: 15,
              //marginTop: -5,
              fontSize: 12,
              fontFamily: 'Poppins-Regular',
            }}>
            You have access to the following locations. You can manage your
            locations in the “locations” option given in the navigation.
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            // flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginEnd: 15,
          }}>
          <UpperviewBG width={227} height={120} />
        </View>
      </View>

      {/* BottomView */}

      <View
        style={{
          flex: 1.3,
          //justifyContent: 'center',
          //alignItems: 'flex-end',
          backgroundColor: 'red',
        }}>
        <SwipeablePanel
          barStyle={{backgroundColor: '#2F6EF329'}}
          style={{
            shadowOffset: {width: 0, height: 2},
            shadowColor: 'red',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.9,
            shadowRadius: 2,
            padding: 20,

            //width:50,
            //justifyContent:'flex-end'
            //alignItems:'center',
            //justifyContent: 'flex-end',
            //flexDirection:'row'
            //marginBottom:100
          }}
          //scrollViewProps={{backgroundColor:'red'}}

          {...panelProps}
          isActive={isPanelActive}>
          <ScrollView>
            <Text>{LocationResonce}</Text>
            <TouchableOpacity>
              <Text>CONTINUE</Text>
            </TouchableOpacity>
            <Text>hi</Text>

            <TouchableOpacity>
              <Text>CONTINUE</Text>
            </TouchableOpacity>
          </ScrollView>
        </SwipeablePanel>
      </View>
      <View
        style={{
          height: 40,
          bottom: 20,
        }}>
        <TouchableOpacity style={styles.ContinueButton}>
          <Text style={styles.ContinueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
