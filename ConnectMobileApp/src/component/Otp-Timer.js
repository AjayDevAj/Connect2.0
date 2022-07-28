/*
 **
 *
 ** ========================================================
 **
 ** AppName: Connect2.0
 ** Version: X.0.0
 ** FileName: Otp-Timer.js
 ** UsedFor: Otp Timer at connect 2.0 app
 ** Author:
 **
 ** ========================================================
 *
 **
 **
 *
 ** ==========================================================
 ** Otp Timer Component
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

import React, {useState, useEffect ,} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import fontFamily from '../utility/Font-Declarations';
import OtpErrorState from './OtpErrorState';
import {useRoute} from '@react-navigation/native';
import {resendOTP} from '../api/ResendOTP';

/*
 **
 *
 ** It holds the no. of second an OTP is valid for
 ** This component handles for approx 60 sec
 **
 **
 */

const OtpTimerHandler = ({ StopTimer, isErrorstate}) => {
  const route = useRoute();
  const mobileNumber = route.params.mobile_Number;

  const reSendOTP = () => {
   //resendOTP(mobileNumber);
  };

  const [counter, setCounter] = useState(30);
  useEffect(() => {
    // resendOTP(mobileNumber)
   
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);

  return (
    <View>
      {counter > 0 && isErrorstate ==false ? (
        <Text
          style={{
            color: 'rgba(95, 99, 104, 1)',
            fontSize: 12,
            fontFamily: fontFamily.Poppins,
          }}>
          Time Left : {counter} sec
        </Text>
      ) : (
        <OtpErrorState Resend={reSendOTP()}/>
      )}
    </View>
  );
};

/*
 **
 *
 ** Resend otp time limit stylesheet
 *
 **
 */

const styles = StyleSheet.create({
  ResentButtonText: {
    color: 'rgba(0, 112, 252, 1)',
    textDecorationLine: 'underline',
    fontFamily: fontFamily.Poppins,
    fontSize: 12,
    marginTop: 10,
    marginLeft: 3,
  },
});

export default OtpTimerHandler;
