import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Bubble from '../../component/Bubble';
import {useRoute} from '@react-navigation/native';
import RouteTabBar from '../../navigation/RouteTabBar';
import navigationString from '../../utility/NavigationString';

const Location = ({navigation}) => {
  const route = useRoute();
  //   const mobileNumber = route.params.mobile_Number;

  return (
    <View style={{flex: 1}}>
      <Bubble />
      <TouchableOpacity
        onPress={() => navigation.navigate(navigationString.RouteTabBar)}
        style={{
          backgroundColor: 'green',
          height: 50,
          flex: 1,
          marginBottom: 30,
        }}>
        <View
          style={{
            backgroundColor: 'green',
            height: 50,
            flex: 1,
            marginBottom: 30,
          }}></View>
      </TouchableOpacity>
    </View>
  );
};

export default Location;
