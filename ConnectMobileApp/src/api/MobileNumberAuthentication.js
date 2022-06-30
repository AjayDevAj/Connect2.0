/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: MobileNumberAuthentication.js
** UsedFor: Mobile Number Authentication at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ====================================================================
** Mobile Number Authentication api file to control all authentications 
** while loggin
** ====================================================================
*
**
*/



/*
**
*
** import constant data (common data used in overall projects)
*
** 
*/

import { API_URL_STAGING } from '../utility/Config_File'
import NavigationString from '../utility/NavigationString';
import {useNavigation} from '@react-navigation/native';


const getLogin = async (mobileNumber) => {

    /****** constant defined to get login from an api ****/
    const navigation = useNavigation();

    const bodyData = new FormData();
    bodyData.append('phonenumber', mobileNumber)
    try {
        const response = await fetch(API_URL_STAGING + '/user/auth/getOTP', {
            method: 'POST',
            body: bodyData,
        })
        const data = response.json()
        console.log('login data  : ', data)

        if (response.status > 400) {
            throw new Error(data.errors)
        }

        if (response.status == 401) { 
            navigation.navigate(NavigationString.LOGIN)
            
        }

        return data;

    } catch (err) {
        console.log("Show Error :: ", err)
    }
}

export { getLogin }



