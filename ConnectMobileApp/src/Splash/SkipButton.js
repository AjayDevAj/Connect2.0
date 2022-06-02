import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/EvilIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import skipButtonStyles from '../assets/styles/SkipButtonStyleSheet';

const SkipButton = ({ navigation }) => {
    const goToLoginPage = () => {
        AsyncStorage.setItem('@viewedOnboarding', 'true');

        alert("You will be redirected to enter ”mobile number” screen");

        // navigation.navigate('Login');
    }
    return (
        <TouchableOpacity onPress={goToLoginPage} >
            <Text style={ skipButtonStyles.text }>Skip</Text>
            {/* <Icon name="chevron-right" size={22} style={ skipButtonStyles.icon } /> */}
        </TouchableOpacity>
    );
}
  
export default SkipButton;