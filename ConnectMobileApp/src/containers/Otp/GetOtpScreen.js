import React, {useEffect, useState, useRef} from 'react';
import {Text,TouchableOpacity,View,ScrollView,KeyboardAvoidingView,Platform} from 'react-native';
import GetOtpBg from '../images/OtpScreenAssets/Group_2433.svg';
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

const GetOtpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const otpResponce = useSelector(store => store.OtpResponceData);
  const resendOtpResponce = useSelector(store => store.OtpResponceData);
  const route = useRoute();
  const mobileNumber = route.params.mobile_Number;
  const [otp, setOtpNum] = useState('');

  useEffect(() => {
    console.log('VerfyResponce otpResponce: ', JSON.stringify(otpResponce));
    navigation.navigate(NavigationString.Location);
  }, [otpResponce]);

  useEffect(() => {

    console.log('VerfyResponce resendOtpResponce: ', JSON.stringify(resendOtpResponce));
  }, [resendOtpResponce]);

/**
 * OTP Api calling
 *  */ 
 const VerifyOTPApi = () => {
    console.log('click me verify');
    console.log('Mobile Num :====>', mobileNumber);

    dispatch(loadOtpData(mobileNumber, otp));
  };

  const reSendOTP = () => {
    console.log('reSendOTP Mobile Num :====>', mobileNumber);
    dispatch(loadOtpData_Resend(mobileNumber));
  };

  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        animated={true}
        style={{backgroundColor: 'rgba(247, 252, 255, 1)', flex: 1}}>
        <View>
          <Bubble />
        </View>

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

              <OTPTextInput
                ref={e => console.log(';sdd')}
                containerStyle={{borderColor: 'red'}}
              />

              <View style={styles.OtpTimerView}>
                <OtpTimerHandler Resend={ (test) => reSendOTP()}/>
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
    </View>
  );
};

export default GetOtpScreen;
