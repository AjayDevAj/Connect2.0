/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: SkipButton.js
** UsedFor: Skip Button at splashscreen for connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                     Skip Button Component
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

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

/*
**
*
** Other imports
*
** 
*/

import Icon from 'react-native-vector-icons/EvilIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import skipButtonStyles from './styles/SkipButtonStyleSheet';
import navigationString from '../utility/NavigationString'
import { viewed_Onboarding } from '../utility/Constant'


/*
**
*
** Once clicked, it will skip to Login screen & Onboarding viewed will be set to true
*
** 
*/

const SkipButton = ({ navigation }) => {

    /*
    **
    *
    ** Set OnBoarding to true & navigate to login screen
    *
    ** 
    */
    const goToLoginPage = async() => {
        await AsyncStorage.setItem(viewed_Onboarding, 'true');
        navigation.navigate(navigationString.LOGIN)
    }
    return (
        <TouchableOpacity onPress={() => goToLoginPage()} >
            <Text style={ skipButtonStyles.text }> Skip </Text>
            <Icon name="chevron-right" size={22} style={ skipButtonStyles.icon } />
        </TouchableOpacity>
    );
}
  
export default SkipButton;