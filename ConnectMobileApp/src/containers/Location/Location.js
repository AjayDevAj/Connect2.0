import React, {useState} from 'react';
import {Text,TouchableOpacity,View,ScrollView,KeyboardAvoidingView,Platform} from 'react-native';
import GetOtpBg from '../images/OtpScreenAssets/Group_2433.svg';
import EditPencilIcon from '../../component/EditPencilIcon';
import OtpTimerHandler from '../../component/Otp-Timer';
import styles from './LocationSheet';
import Bubble from '../../component/Bubble';
import OTPTextInput from 'react-native-otp-textinput';
import {useRoute} from '@react-navigation/native';

const Location = ({navigation}) => {
  const route = useRoute();
//   const mobileNumber = route.params.mobile_Number;

  return (
    <View style={{flex: 1}}>
    
        <View>
          <Bubble />
        </View>

        
    </View>
  );
};

export default Location;
