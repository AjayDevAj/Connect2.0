import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import UpperviewBG from '../../../assets/svg/Group2491.svg';
import styles from './StorleLocationStylesheet';
import {SwipeablePanel} from 'rn-swipeable-panel';
import fontFamily from '../../utility/Font-Declarations';
import NavigationString from '../../utility/NavigationString';
import {loadStoreLocationData} from '../../actions/StoreLocationAction';
import {useIsFocused} from '@react-navigation/native';
import {saveObject} from '../../utility/StorageClass';
import {location_Data_Key} from '../../utility/Constant';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default Storelocation = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const route = useRoute();
  const SLResponce = useSelector(store => store.StoreLocationDataResponse);
  const [responceData, setData] = useState([]);
  const [username, SetuserName] = useState('');
  const [isPanelActive, setIsPanelActive] = useState(true);
  const userName = route.params.userName;

  useEffect(() => {
    SetuserName(userName);
    if (SLResponce.data != undefined) {
      setData(SLResponce.data.locations);
    }
  }, [SLResponce]);

  useEffect(() => {
    if (isFocused) {
      dispatch(loadStoreLocationData());
    }
  }, [isFocused]);

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
  });

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(true);
  };

  const continueOnpress = () => {
    saveObject(SLResponce.data, location_Data_Key);
    navigation.navigate(NavigationString.RouteTabBar);
  };

  return (
    <>
      {/* // Uper View */}
      <View
        style={{
          flex: 2,
        }}>
        {/* <Icon name="arrow-back" size={30} color="black"  marginTop={30} onPress={()=>Alert.alert('yes')}/> */}

        <Icon.Button
          name="arrow-back"
          size={30}
          color="Black"
          marginTop={30}
          padding={30}
          //onPress={() => {navigation.goBack()}}
          backgroundColor="transparent">
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
              fontFamily: fontFamily.Alte_DIN,
              opacity:100,
              fontWeight: 'bold',
            }}>
            Store Locations
          </Text>
        </Icon.Button>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}></View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            padding: 30,
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 18,
                fontFamily: fontFamily.Alte_DIN,
                fontWeight: 'bold',
              }}>
              Welcome to connect{' '}
              <Text
                style={{
                  color: '#0070FC',
                  opacity: 100,
                  fontFamily: fontFamily.Alte_DIN,
                }}>
                {username}
                <Text style={{color: 'black'}}>!</Text>
              </Text>
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fontFamily.Poppins,
            }}>
            You have access to the following locations. You can manage your
            locations in the “locations” option given in the navigation.
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginEnd: 20,

            // backgroundColor: 'black',
          }}>
          <UpperviewBG width={'70%'} height={'75%'} />
        </View>
      </View>

      {/* BottomView */}

      <View
        style={{
          flex: 0.8,
        }}>
        <SwipeablePanel
          barStyle={{backgroundColor: '#2F6EF329'}}
          style={{
            shadowRadius: 5,
            shadowOpacity: 2,
            shadowOffset: {
              width: 50,
              height: 5,
            },
            elevation: 10,
            // paddingVertical: 20,
            shadowColor: 'rgba(47, 110, 243, 0.16)',
            padding: 20,
            bottom: -70,
            shadowColor: 'red',
          }}
          // smallPanelHeight={200}
          disableSwipeIcon={false}
          noBackgroundOpacity={true}
          //scrollViewProps={{backgroundColor:'red'}}
          {...panelProps}
          isActive={isPanelActive}>
          <ScrollView>
            {responceData.length > 0 &&
              responceData.map(item => {
                return (
                  <View style={{}}>
                    <Text
                      style={{
                        color: '#000000',
                        opacity: 100,
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginTop: 15,
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: 'gray',
                        opacity: 70,
                        fontSize: 15,
                        marginTop: 10,
                      }}>
                      {item.address1 +
                        ', ' +
                        item.address2 +
                        ' ' +
                        item.locality +
                        ' ' +
                        item.city +
                        ' ' +
                        item.pincode +
                        ' '}
                    </Text>
                    <View
                      style={{
                        width: '99%',
                        height: 1,
                        backgroundColor: '#2F6EF329',
                        marginTop: 15,
                      }}></View>
                  </View>
                );
              })}
          </ScrollView>
        </SwipeablePanel>
      </View>

      <View
        style={{
          height: 80,
          // bottom: 20,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          onPress={() => continueOnpress()}
          style={styles.ContinueButton}>
          <Text style={styles.ContinueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
