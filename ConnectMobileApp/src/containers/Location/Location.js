/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: Location.js
** UsedFor: Location Component at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**              Location Component
** ==========================================================
*
**
*/



/*
**
*
** Common react packages import
*
** 
*/

import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Bubble from '../../component/Bubble';
import {useRoute} from '@react-navigation/native';
import RouteTabBar from '../../navigation/RouteTabBar';
import navigationString from '../../utility/NavigationString';

const Location = ({navigation}) => {
  const route = useRoute();
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
