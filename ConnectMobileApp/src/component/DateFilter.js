import {
  StyleSheet,
  View,
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import FontDeclarations from '../utility/Font-Declarations';

import {getOtpResponse} from '../utility/StorageClass';

import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DateFilter = () => {
  const datedata = [
    {label: 'Last 7 Days'},
    {label: 'Last Month'},
    {label: 'Last 2 Months'},
    {label: 'Last 3 Months'},
  ];
  return (
    <SafeAreaView>
      <View style={{paddingTop: 5}}>
        <RadioButtonRN
          data={datedata}
          selectedBtn={e => {
            console.log(e);
            Alert.alert(e.label.toString());
          }}
          box={false}
          textStyle={styles.title}
          deactiveColor={'#657180'}
          activeColor={'#0E0071'}
          circleSize={13}
        />
      </View>

      <View
        style={{
          width: 194,
          height: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.12)',
          top: '25%',
        }}></View>

      <View
        style={{
          top: '25%',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 12,
        }}>
        <TouchableOpacity>
          <Icon name="date-range" size={20} color="#657180" />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 14,
            paddingLeft: 5,
            fontFamily: FontDeclarations.Poppins,
          }}>
          Custom Range
        </Text>
      </View>

      <View style={styles.frpmToLabel}>
        <Text style={{fontFamily: FontDeclarations.Poppins, fontSize: 12}}>
          From
        </Text>
      </View>
      <View style={styles.frpmToLabel}>
        <Text style={{fontFamily: FontDeclarations.Poppins, fontSize: 12}}>
          To
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DateFilter;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontFamily: FontDeclarations.Poppins,
    color: 'rgba(32, 33, 36, 1)',
  },
  frpmToLabel: {
    width: 178,
    height: 32,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    backgroundColor: 'rgba(241, 241, 241, 1)',
    margin: 5,
    //alignItems:'center',
    justifyContent: 'center',
    top: '41%',
    paddingLeft: 5,
  },
});
