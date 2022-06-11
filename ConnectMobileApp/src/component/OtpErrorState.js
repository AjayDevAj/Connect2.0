import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import fontFamily from '../utility/Font-Declarations';

import {loadLoginData} from '../actions/LoginAction';
import {useDispatch, useSelector} from 'react-redux';
import Login from '../containers/login/Login'
import { color } from 'react-native-reanimated';

export default function OtpErrorState() {
  console.log('Error State is here');

  return (
    <View style={{marginTop:10,}}>
      <Text style={styles.wrongOtpText}>Wrong OTP</Text>

      <View style={{flexDirection:'row',marginTop:15,}}>
        <Text style={{fontSize: 12}}> Get via </Text>
        <TouchableOpacity onPress={() => Alert.alert('OTP via Call')}>
          <Text style={styles.OtpCallText}>Call</Text>
        </TouchableOpacity>

        <Text style={{
            color: 'rgba(95, 99, 104, 1)',
            fontSize: 12,
            fontFamily: fontFamily.Poppins,
            marginLeft:'30%',
           
            
            
          }}>Didn’t Received </Text> 
        <TouchableOpacity>
          <Text style={styles.resendbutton}>Resend</Text>
        </TouchableOpacity>

        {/* <Text
          style={{
            color: 'rgba(95, 99, 104, 1)',
            fontSize: 12,
            fontFamily: fontFamily.Poppins,
            marginLeft:'30%',
            marginTop:'-4%'
            
            
          }}>
          Didn’t Received?{' '}
          <TouchableOpacity onPress={()=>Alert.alert('resend')}>
            <Text style={styles.ResentButtonText}>Resend</Text>
          </TouchableOpacity>
        </Text> */}
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
  ResentButtonText: {
    color: 'rgba(0, 112, 252, 1)',
    textDecorationLine: 'underline',
    fontFamily: fontFamily.Poppins,
    fontSize: 12,
    marginTop: 10,
    //marginLeft: 3,
  },

  resendbutton:{
    color: 'rgba(0, 112, 252, 1)',
    fontSize: 12,
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    fontFamily: fontFamily.Poppins,
  }
});
