import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
} from 'react-native';
import Chat_Filter_FlatList from './Chat_Filter_FlatList';
import {
  Filter_DATA,
  Date_Filter_Data,
  Chat_Filter_Data,
} from '../../utility/Constant';
import {getOtpResponse} from '../../utility/StorageClass';
import {location_Data_Key} from '../../utility/Constant';
import {useIsFocused} from '@react-navigation/native';

const Chat_Filter = () => {
  const [selectionData, setSelectionData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const isFocused = useIsFocused();

  const get_data_accroding_to_selection = async () => {
    const getLocationData = await getOtpResponse(location_Data_Key, 'location');
    setLocationData(getLocationData.locations);
    setSelectionData(getLocationData.locations);
  };

  const changeData = value => {
    // console.log('onPressonPress', value);
    switch (value.id) {
      case 1:
        setSelectionData(locationData);
        break;
      case 2:
        setSelectionData(Date_Filter_Data);
        break;
      case 3:
        setSelectionData(Chat_Filter_Data);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (isFocused) {
      get_data_accroding_to_selection();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{flex: 1, overflow: 'hidden', paddingBottom: 5}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 0,
            minHeight: 48,
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 0.15,
            shadowRadius: 3,
            elevation: 5,
            zIndex: 1,
          }}>
          <Pressable
            style={{flex: 1, borderRightWidth: 1}}
            onPress={() => console.log('filter')}>
            <Text style={{textAlign: 'center'}}>filter</Text>
          </Pressable>
          <Pressable style={{flex: 1}} onPress={() => console.log('Sort')}>
            <Text style={{textAlign: 'center'}}>Sort</Text>
          </Pressable>
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{backgroundColor: '#F1F1F1', flex: 2.3}}>
            <Chat_Filter_FlatList
              Chat_Data={Filter_DATA}
              onPress={value => {
                changeData(value);
              }}
            />
          </View>
          {selectionData != null && (
            <View style={{flex: 3}}>
              <Chat_Filter_FlatList
                Chat_Data={selectionData}
                hide_Saprator={true}
              />
            </View>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 0,
            minHeight: 48,
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 0.15,
            shadowRadius: 3,
            elevation: 5,
            // zIndex: 1,
          }}>
          <Pressable
            style={{flex: 1, borderRightWidth: 1}}
            onPress={() => console.log('filter')}>
            <Text style={{textAlign: 'center'}}>Cancel</Text>
          </Pressable>
          <Pressable style={{flex: 1}} onPress={() => console.log('Sort')}>
            <Text style={{textAlign: 'center'}}>Apply</Text>
          </Pressable>
        </View>
       
      </View>
    </SafeAreaView>
  );
};

export default Chat_Filter;
