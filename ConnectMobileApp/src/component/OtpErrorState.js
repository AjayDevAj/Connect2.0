import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Poppins from '../utility/Font-Declarations';
import OtpViaCallButton from './OtpViaCallButton';
import OtpViaSMSButton from './OtpViaSMSButton';

export default function OtpErrorState() {
  console.log('Error State is here');

  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.wrongOtpText}>Wrong OTP</Text>
      <Text style={{fontSize:12,}}> Get via </Text>
      <TouchableOpacity onPress={() => Alert.alert('OTP via Call')}>
        
        <Text style={styles.OtpCallText}>Call</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrongOtpText: {
    color: '#BA0101',
    fontSize: 12,
    fontFamily: Poppins.Poppins,
  },
  OtpCallText: {
    color: '#00C158',
    fontSize:12,
    fontStyle:'normal',
    textDecorationLine: 'underline',
    fontFamily:Poppins.Poppins
  },
});
