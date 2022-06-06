import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Other imports
import Icon from 'react-native-vector-icons/EvilIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import skipButtonStyles from './styles/SkipButtonStyleSheet';

// Once clicked, it will skip to Login screen & Onboarding viewed will be set to true
const SkipButton = ({ navigation }) => {
    const goToLoginPage = () => {
        AsyncStorage.setItem('@viewedOnboarding', 'true');

        alert("You will be redirected to enter ”mobile number” screen");

        // navigate to login screen
        navigation.navigate(navigationString.LOGIN);
    }
    return (
        <TouchableOpacity onPress={goToLoginPage} >
            <Text style={ skipButtonStyles.text }>Skip</Text>
            <Icon name="chevron-right" size={22} style={ skipButtonStyles.icon } />
        </TouchableOpacity>
    );
}
  
export default SkipButton;