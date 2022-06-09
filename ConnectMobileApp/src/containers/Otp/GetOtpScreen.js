/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: GetOtpScreen.js
** UsedFor: Get Otp Screen at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**    Get Otp Screen complete view component
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

import React, {useEffect, useState, useRef} from 'react';
import {Text,TouchableOpacity,View,ScrollView,KeyboardAvoidingView,Platform,} from 'react-native';
import GetOtpBg from '../../../assets/svg/Group_2433.svg';
import EditPencilIcon from '../../component/EditPencilIcon';
import OtpTimerHandler from '../../component/Otp-Timer';
import styles from './GetOtpScreenStylesheet';
import Bubble from '../../component/Bubble';
import OTPTextInput from 'react-native-otp-textinput';
import {useSelector, useDispatch} from 'react-redux';
import {loadOtpData} from '../../actions/OtpScreenAction';
import {loadOtpData_Resend} from '../../actions/ResendOTPAction';
import {useRoute} from '@react-navigation/native';
import NavigationString from '../../utility/NavigationString';
import OtpErrorState from '../../component/OtpErrorState';
import CheckInterNet from '../../utility/CheckInterNet';


const GetOtpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const otpResponce = useSelector(store => store.OtpResponceData);
  const resendOtpResponce = useSelector(store => store.OtpResponceData);
  const route = useRoute();
  const mobileNumber = route.params.mobile_Number;
  const [otp, setOtpNum] = useState('');
  const [activeBtn, setActiveBtn] = useState('rgba(112, 112, 112, 0.22)');
  const [disbaleval, setVisbal] = useState(true);
  const [timerEnable, setTimerEnable] = useState(false);



  useEffect(() => {
   
    // console.log('otpResponce',otpResponce)
    if (otpResponce.code != null) {
      navigation.navigate(NavigationString.Location);
    }

   
  }, [otpResponce]);

  useEffect(() => {
    // setTimerEnable(true)
  }, [resendOtpResponce]);

  /**
   * OTP Api calling
   *  */
  const VerifyOTPApi = () => {
      <CheckInterNet/> 
      dispatch(loadOtpData(mobileNumber, otp));
      
  };

  const reSendOTP = () => {
    dispatch(loadOtpData_Resend(mobileNumber));
  };

  const OtpErrorHandler = () => {
    
    if (otpResponce !== undefined && otpResponce.data !== undefined && otpResponce.data.code !=200)
    {
    
      return(
        <OtpErrorState/>
      );
     
    }
  }

  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        animated={true}
        style={{backgroundColor: 'rgba(247, 252, 255, 1)', flex: 1}}>
        <View>
          <Bubble />
        </View>
        <CheckInterNet/>

        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
            <View style={styles.UpperView}>
              <GetOtpBg width={'190'} height={'190'} />
            </View>

            {/* Bottom View  */}
            <View style={styles.BottomView}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.EnterOtpText}>Enter OTP</Text>
              </View>
              <View style={styles.WehaveSent4DigOtp_TextView}>
                <Text style={styles.EnterOtpStaticText}>
                  Enter OTP you receive via call on{' '}
                </Text>
                <Text
                  style={[
                    styles.EnterOtpStaticTextMobile,
                    {color: 'rgba(0, 0, 0, 1)'},
                  ]}>
                  {mobileNumber}
                  {'  '}
                  <TouchableOpacity onPress={navigation.goBack}>
                    <EditPencilIcon />
                  </TouchableOpacity>
                </Text>
              </View>
              {/* OTP input */}
              <OTPTextInput
                ref={e => console.log(';sdd')}
                containerStyle={{borderColor: 'red'}}
                handleTextChange={text => {
                  if (text.trim().length === 4) {
                    setOtpNum(text)
                    setActiveBtn('rgba(rgba(14, 0, 113, 1))');
                    setVisbal(false);
                  } else {
                    setActiveBtn('rgba(112, 112, 112, 0.22)');
                    setVisbal(true);
                  }
                }}
              />
              <View style={styles.OtpTimerView}>
                <OtpTimerHandler Resend={test => reSendOTP()} />
                {
               OtpErrorHandler()
                }
              </View>

              <TouchableOpacity
                disabled={disbaleval}
                onPress={() => VerifyOTPApi()}
                style={[styles.VerifyButton, {backgroundColor: activeBtn}]}>
                <Text style={styles.VerifyButtonText}>VERIFY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default GetOtpScreen;
