/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: VerifyOTP.js
** UsedFor: Verify OTP at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ================================================================
** Verify OTP api file to verify the OTP authentication while login
** ================================================================
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

import { API_URL_STAGING } from '../utility/Config_File';
import { DeviceInfo } from 'react-native-device-info';
import { getUniqueId, getManufacturer } from 'react-native-device-info';
import {signOut} from '../navigation/Routes';


/** * Get device mac id */


/** * Get device ip */
//const ip = await DeviceInfo.getIpAddress().then((ip) => {return ip});

/** * Get device UniqueId */
//const uniqueId = await DeviceInfo.getUniqueId();
//console.log("Print uniqueId === ", uniqueId)




/**
 * 
 *  Verify OTP
 * @param {*} mobileNumber 
 * @param {*} otp 
 */

 const verifyOTP = async (mobileNumber, otp) => {
    console.log("Print mac ==== pre")

    // const mac = await DeviceInfo.getMacAddress().then((mac) => {return mac});
    // console.log("Print mac ==== ", mac)
    // return
    // const param = JSON.stringify({
    //     phonenumber: mobileNumber,
    //     otp: otp,
    //     device_type: Platform.OS == 'ios' ? 'iOS' : 'android',
    //     device_token: "qw",
    //     uid: "po",
    //     ip: 12,
    //     mac: "qw",
    //     loged_in: 1,
    // })

    // console.log("Print api URL ===;", API_URL_STAGING + '/user/auth/validateOTP')
    // console.log("Print param ===;", param)

    const bodyData = new FormData();
    bodyData.append('phonenumber', mobileNumber,)
    bodyData.append('otp', otp)
    bodyData.append('device_type', Platform.OS == 'ios' ? 'iOS' : 'android')
    bodyData.append('device_token', "qw")
    bodyData.append('uid', "po")
    bodyData.append('ip', "12")
    bodyData.append('mac', "qw")
    bodyData.append('loged_in', "1")

    console.log("Print BodyData === ", JSON.stringify(bodyData))

    const response = await fetch(API_URL_STAGING + '/user/auth/validateOTP', {
        method: 'post',
        body: bodyData

    })
    const data = response.json()
    console.log('otp data : ', data)

    switch (response.status) {
        case response.status > 400:
            throw new Error(data.errors);     
            break
        case 204:
            throw new Error("NO Data")
            break
        case 401:
            signOut()
   
        default: break
    }
    return data;
}

/*
**
*
** All the constants defined above will be exported 
** so that it could be imported in verify otp file 
** & can be used as a common constants imported from 
** the constant file 
*
** 
*/
export { verifyOTP }