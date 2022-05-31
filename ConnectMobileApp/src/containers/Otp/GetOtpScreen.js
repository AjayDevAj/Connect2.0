import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import GetOtpBg from '../images/OtpScreenAssets/Group_2433.svg';

import OTP from '../../component/Otp-Form';
import EditPencilIcon from '../../component/EditPencilIcon';
import OtpTimerHandler from '../../component/Otp-Timer';
import styles from './GetOtpScreenStylesheet';
import Bubble from '../../component/Bubble';

const GetOtpScreen = () => {
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''} animated={true}
                style={{ flex: 1 }} >
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={styles.UpperView}>
            <Bubble />

            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
              }}>
              <GetOtpBg width={'180'} height={'150'} />
            </View>
          </View>

          {/* Bottom View  */}

          <View style={styles.BottomView}>
            <View
              style={{ flexDirection: 'row', height: 50}}>
              <Text style={styles.EnterOtpText}>Enter OTP</Text>
            </View>

            <View style={styles.WehaveSent4DigOtp_TextView}>
              <Text style={{color: '#5F6368'}}>
                We have sent 4 digit OTP on{' '}
              </Text>
              <Text style={{color: '#000000'}}>9897969543 </Text>
              <TouchableOpacity>
                <EditPencilIcon />
              </TouchableOpacity>
            </View>

            <View style={styles.roundedTextInputView}>
              <OTP
                codeCount={4}
                otpStyles={{backgroundColor: '#EFF0F2', borderRadius: 10}}
                onTyping={''}
              />
            </View>

            <View style={styles.OtpTimerView}>
              <OtpTimerHandler />
            </View>

            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => Alert.alert('Number Varification API Call')}
                style={styles.VerifyButton}>
                <Text style={styles.VerifyButtonText}>VERIFY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
   
  );
};

export default GetOtpScreen;
