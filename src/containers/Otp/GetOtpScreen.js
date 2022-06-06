import React, { useEffect, useState } from 'react';

import {
  SafeAreaView, StyleSheet, Text, TouchableOpacity,
  View, Alert, ScrollView, KeyboardAvoidingView, Platform,
} from 'react-native';

import GetOtpBg from '../images/OtpScreenAssets/Group_2433.svg';
import OTP from '../../component/Otp-Form';
import EditPencilIcon from '../../component/EditPencilIcon';
import OtpTimerHandler from '../../component/Otp-Timer';
import styles from './GetOtpScreenStylesheet';
import Bubble from '../../component/Bubble';

import { useSelector, useDispatch } from 'react-redux';
import { loadOtpData } from '../../actions/OtpScreenAction';
import { useRoute } from '@react-navigation/native';

const GetOtpScreen = () => {

  const dispatch = useDispatch();
  const otpResponce = useSelector(store => store.OtpResponceData)
  console.log("otp Responce ===>", otpResponce)

  const route = useRoute();
  const mobileNumber = route.params.mobile_Number
  console.log("MOBILE_Number :::=> ", mobileNumber)

  const [otp, setOtpNum] = useState('');


  useEffect(() => {


  }, [otpResponce]);

  //calling API login
  const VerifyOTPApi = () => {
    console.log("click me verify")
    console.log("Mobile Num :====>", mobileNumber)

    dispatch(loadOtpData(mobileNumber, otp))

  }

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''} animated={true}
        style={{ backgroundColor: 'rgba(247, 252, 255, 1)', flex: 1 }} >

        <View>
          <Bubble />
        </View>

        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={{ position: 'absolute', bottom: 0, width: "100%" }}>

            <View style={styles.UpperView}>
              <GetOtpBg width={'190'} height={'190'} />
            </View>

            {/* Bottom View  */}
            <View style={styles.BottomView}>
              <View
                style={{ flexDirection: 'row', height: 50 }}>
                <Text style={styles.EnterOtpText}>Enter OTP </Text>
              </View>

              <View style={styles.WehaveSent4DigOtp_TextView}>
                <Text style={{ color: '#5F6368' }}>
                  We have sent 4 digit OTP on{' '}
                </Text>

                <Text style={{ color: '#000000' }}>9897969543 </Text>

                <TouchableOpacity>
                  <EditPencilIcon />
                </TouchableOpacity>
              </View>

              <View style={styles.roundedTextInputView}>
                <OTP
                  codeCount={4}
                  otpStyles={{ backgroundColor: '#EFF0F2', borderRadius: 10, }}
                  onTyping={''}
                />
              </View>

              <View style={styles.OtpTimerView}>
                {/* <OtpTimerHandler /> */}
              </View>


              <TouchableOpacity
                // onPress={() => Alert.alert('Number Varification API Call')}
                onPress={() => VerifyOTPApi()}
                style={styles.VerifyButton}>
                <Text style={styles.VerifyButtonText}>VERIFY</Text>
              </TouchableOpacity>
              {/* </View> */}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>

  );
};

export default GetOtpScreen;
