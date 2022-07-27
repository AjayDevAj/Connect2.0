/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: Login.js
** UsedFor: Login Component at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**              Login Component
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

import React, { useState } from 'react';
import {
  View,
  Alert,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';
import { image } from '../../../assets/images/Image';
import { getLogin } from '../../api/MobileNumberAuthentication';
import styles from './LoginStyleSheet';
import navigationString from '../../utility/NavigationString';
import Loader from '../../utility/Loader';

const Login = ({navigation}) => {
  const [textInputPhoneNum, setTextInputPhoneNum] = useState('');
  const [activeBtn, setActiveBtn] = useState('rgba(112, 112, 112, 0.22)');
  const [inputVal, setInputVal] = useState('');

  const [loading, setLoading] = useState(false);

  const [disbaleval, setVisbal] = useState(true);
  const [responseerror, setError] = useState({
    errorStatus: false,
    errorMsg: ''
  });
  const [onFocus, setFocus] = useState(false);

  //Check for the Phone Number TextInput
  checkTextInput = async () => {
    // console.log('checkTextInput');
    if (!textInputPhoneNum.trim()) {
      alert('Please Enter Mobile Number');
    } else if (textInputPhoneNum.trim().length != 10) {
      alert('Please enter 10 digit valid mobile number');
    } else {
      //calling API login
      setLoading(true);
      var getOtpResponse = await getLogin(textInputPhoneNum);
      console.log('===== getOtpResponse =====', getOtpResponse)

      if (typeof getOtpResponse?.message) {
        setError(
          {
            errorMsg: getOtpResponse.message,
            errorStatus: getOtpResponse.error,
          }
        )
        
        // navigate to next screen.
        if ((getOtpResponse.error === false)) {
          setLoading(false);
          navigation.navigate(navigationString.GetOtpScreen, {
            mobile_Number: textInputPhoneNum,
          });
        }
      }
    }
  };

  const onChangeTextChar = enterString => {
    setError(
      {
        errorMsg: '',
        errorStatus: false
      }
    )
    if (enterString.trim().length > 0) {
      // setError('false')
      if (/^-?\d+$/.test(enterString)) {
        setInputVal(enterString);
        setFocus(true);
      } else {
        Alert.alert('Please enter a valid phone number.');
      }
    } else {
      setInputVal(enterString.trim());
      setFocus(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Loader loading={loading} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        animated={true}
        style={{ backgroundColor: 'rgba(247, 252, 255, 1)', flex: 1 }}>
        <View>
          <View style={styles.CircilePostion}></View>
        </View>
        {/* <ScrollView contentContainerStyle={{ flex: 1 }}> */}
          <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
            <View style={styles.UpperView}>
              <Image
                style={styles.ImageView}
                resizeMode="contain"
                source={image.backgroundImage}
              />
            </View>
            <View style={styles.BottomView}>
              <Text style={styles.EnterText}>Enter Your</Text>
              <Text style={styles.MobileText}>Mobile Number</Text>
              <Text style={styles.NormalText}>
                {' '}
                A 4 digit OTP will be sent to verify your number
              </Text>
              <View
                style={
                  responseerror.errorStatus == true
                    ? styles.TextInputViewError
                    : styles.TextInputView
                }>
                {onFocus && (
                  <Text style={{ fontSize: 15, marginLeft: 14, alignItems: 'center' }}> +91 </Text>
                )}
                <TextInput
                  behavior={Platform.OS == "ios" ? "alignItems" : "center"}
                  placeholder="Enter 10 Digit Mobile No."
                  placeholderTextColor="gray"
                  keyboardType={'phone-pad'}
                  maxLength={10}
                  dataDetector="phoneNumber"
                  value={inputVal}
                  onSubmitEditing={() => { console.log('onSubmitEditing') }}

                  onChangeText={value => {
                    onChangeTextChar(value);
                    setTextInputPhoneNum(value);
                    if (value.trim().length === 10) {
                      setActiveBtn('rgba(rgba(14, 0, 113, 1))');
                      setVisbal(false);
                    } else {
                      setActiveBtn('rgba(112, 112, 112, 0.22)');
                      setVisbal(true);
                    }
                  }}
                  style={styles.TextInput}></TextInput>
              </View>
              {responseerror.errorStatus == true ? (
                <Text style={styles.errorMsg}>{responseerror.errorMsg}</Text>
              ) : null}
              <TouchableOpacity
                disabled={disbaleval}
                style={[styles.OtpBtn, { backgroundColor: activeBtn }]}
                onPress={() => checkTextInput()}>
                <Text style={styles.OtpText}>GET OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </View>
  );
};
export default Login;
