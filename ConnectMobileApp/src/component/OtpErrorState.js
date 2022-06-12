import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import fontFamily from '../utility/Font-Declarations';

export default function OtpErrorState({Resend}) {
  

  
  return (
    <View style={{marginTop: 10}}>
      <Text style={styles.wrongOtpText}>Wrong OTP</Text>

      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Text style={{fontSize: 12}}> Get via </Text>
        <TouchableOpacity onPress={() => Alert.alert('OTP via Call')}>
          <Text style={styles.OtpCallText}>Call</Text>
        </TouchableOpacity>

        <Text
          style={{
            color: 'rgba(95, 99, 104, 1)',
            fontSize: 12,
            fontFamily: fontFamily.Poppins,
            marginLeft: '30%',
          }}>
          Didn’t Received{' '}
        </Text>
        <TouchableOpacity onPress={()=>Resend}>
          <Text style={styles.resendbutton}>Resend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrongOtpText: {
    color: '#BA0101',
    fontSize: 12,
    fontFamily: fontFamily.Poppins,
  },
  OtpCallText: {
    color: '#00C158',
    fontSize: 12,
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    fontFamily: fontFamily.Poppins,
  },

  resendbutton: {
    color: 'rgba(0, 112, 252, 1)',
    fontSize: 12,
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    fontFamily: fontFamily.Poppins,
  },
});
