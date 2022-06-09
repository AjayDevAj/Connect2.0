import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Poppins from '../utility/Font-Declarations';
import OtpViaCallButton from './OtpViaCallButton';
import OtpViaSMSButton from './OtpViaSMSButton';

export default function OtpErrorState() {
  console.log('Error State is here');

  return (
    <View style={{}}>
      
      <View style={{flexDirection:'row'}}>
      <OtpViaSMSButton /> 
      <OtpViaCallButton />
      </View>
      <Text style={styles.wrongOtpText}>Wrong OTP</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  wrongOtpText: {
    color: '#BA0101',
    fontSize: 12,
    fontFamily: Poppins.Poppins,
  },
});
