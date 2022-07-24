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

import React, {useEffect, useState, useRef, useContext} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import GetOtpBg from '../../../assets/svg/Group_2433.svg';
import EditPencilIcon from '../../component/EditPencilIcon';
import OtpTimerHandler from '../../component/Otp-Timer';
import styles from './GetOtpScreenStylesheet';
import Bubble from '../../component/Bubble';

import OTPTextInput from '../../component/Otp-Form';
import {useSelector, useDispatch} from 'react-redux';
import {loadOtpData} from '../../actions/OtpScreenAction';
import {useRoute} from '@react-navigation/native';
import NavigationString from '../../utility/NavigationString';
import fontFamily from '../../utility/Font-Declarations';
import {saveObject} from '../../utility/StorageClass';
import {otpResponse_Storage_Key, appToken} from '../../utility/Constant';

import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthContext from '../../navigation/AuthContext';

const GetOtpScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const otpResponce = useSelector(store => store.OtpResponceData);
  const resendOtpResponce = useSelector(store => store.OtpResponceData);
  const route = useRoute();
  const mobileNumber = route.params.mobile_Number;
  const [otp, setOtpNum] = useState('');
  const [activeBtn, setActiveBtn] = useState('rgba(112, 112, 112, 0.22)');
  const [otptextcolor, setOtptextColor] = useState({
    textcolor: '#5F6368',
    tintColor: 'rgba(239, 240, 242, 1)',
    offTintColor: 'rgba(239, 240, 242, 1)',
    backgroundColor: 'rgba(239, 240, 242, 1)',
  });
  const [disbaleval, setVisbal] = useState(true);
  const [isErrorstate, setisErrorState] = useState(false);

  const setToken = async (token) => {
    await AsyncStorage.setItem(appToken, token);
  }

  useEffect(() => {
    if (otpResponce.code == 200) {
      saveObject(otpResponce.data, otpResponse_Storage_Key);
      { otpResponce?.data?.token && setToken(otpResponce.data.token) }
      navigation.navigate(NavigationString.Location, {
        userName: otpResponce.data.user.name,
      });
    } else if (
      otpResponce != '' &&
      otpResponce.data.code != null &&
      otpResponce.data.code == 400
    ) {
      // if (otpResponce.data.code == 400) {
        setIsLoginToFalse();
      setisErrorState(true);

      console.log('Error State-------------->', isErrorstate);

      setOtptextColor({
        textcolor: 'rgba(164, 34, 22, 1)',
        tintColor: 'rgba(164, 34, 22, 1)',
        offTintColor: 'rgba(164, 34, 22, 1)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
      });
    } else {
      
      setisErrorState(false);
      setOtptextColor({
        textcolor: '#5F6368',
        tintColor: 'rgba(239, 240, 242, 1)',
        offTintColor: 'rgba(239, 240, 242, 1)',
        backgroundColor: 'rgba(239, 240, 242, 1)',
      });
    }
  }, [otpResponce]);

  useEffect(() => {
    if(otpResponce?.data?.code==401)
    {
      navigation.goBack();
    }
  }, [resendOtpResponce]);

  const editNoHandler = () => {
    navigation.goBack();
  }

  /**
   * OTP Api calling
   *  */
  const VerifyOTPApi = () => {
    dispatch(loadOtpData(mobileNumber, otp));
    loginHandler(mobileNumber, otp);
  };

  const { signIn } = useContext(AuthContext);

  const loginHandler = (mobileNumber, otp) => {
    signIn(mobileNumber, otp);
  }

  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        animated={false}
        style={{backgroundColor: 'rgba(247, 252, 255, 1)', flex: 1}}>
        <View>
          <Bubble />
        </View>
       
        {/* <ScrollView contentContainerStyle={{flex: 1}}> */}
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
                  <TouchableOpacity onPress={() => editNoHandler()}>
                    <EditPencilIcon />
                  </TouchableOpacity>
                </Text>
              </View>
              {/* OTP input */}
              <View
                style={{display: isErrorstate == 'false' ? 'none' : 'flex'}}>
                <OTPTextInput
                  ref={() => {}}
                  containerStyle={{borderColor: 'red'}}
                  adjustFontSizeToFit={true}
                  numberOfLines={1}
                  textInputStyle={{
                    color: otptextcolor.textcolor,
                    backgroundColor: otptextcolor.backgroundColor,
                    fontFamily: fontFamily.Alte_DIN,
                    fontSize: 21,
                  }}
                  tintColor={otptextcolor.tintColor}
                  offTintColor={otptextcolor.offTintColor}
                  handleTextChange={text => {
                    if (text.trim().length === 4) {
                      setOtpNum(text);
                      setActiveBtn('rgba(rgba(14, 0, 113, 1))');
                      setVisbal(false);
                    } else {
                      setActiveBtn('rgba(112, 112, 112, 0.22)');
                      setVisbal(true);
                    }
                  }}
                />
              </View>
              {/* {OtpErrorHandler()} */}
              <View style={styles.OtpTimerView}>
                <OtpTimerHandler isErrorstate={isErrorstate} />

                {/* <OtpTimerHandler Resend={test => reSendOTP()}/> */}
              </View>

              <TouchableOpacity
                disabled={disbaleval}
                onPress={() => VerifyOTPApi()}
                style={[styles.VerifyButton, {backgroundColor: activeBtn}]}>
                <Text style={styles.VerifyButtonText}>VERIFY</Text>
              </TouchableOpacity>
            </View>
          </View>
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
     
    </View>
  );
};

export default GetOtpScreen;
