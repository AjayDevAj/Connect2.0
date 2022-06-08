
import { API_URL_DEV, API_URL_STAGING } from '../utility/Config_File';
import { DeviceInfo } from 'react-native-device-info';
import { getUniqueId, getManufacturer } from 'react-native-device-info';

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
    const param = JSON.stringify({
        phonenumber: 9467396412,
        otp: 1469,
        device_type: Platform.OS == 'ios' ? 'iOS' : 'android',
        device_token: "qw",
        uid: "po",
        ip: 12,
        mac: "qw",
        loged_in: 1,
    })

    console.log("Print api URL ===;", API_URL_STAGING + '/user/auth/validateOTP')
    console.log("Print param ===;", param)

    const bodyData = new FormData();
    bodyData.append('phonenumber', "9467396412",)
    bodyData.append('otp', "1469")
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

        // method: 'get',
        // body: {
        //     phonenumber: mobileNumber,
        //     otp: otp,
        //     device_type: Platform.OS == 'ios' ? 'iOS' : 'android',
        //     device_token: "fcmToken",
        //     uid: uniqueId,
        //     ip: ip,
        //     mac: mac,
        //     loged_in: 0,
        // }
    })
    const data = response.json()
    console.log('otp data : ', data)

    if (response.status > 400) {
        throw new Error(data.errors)
    }
    return data;
}
export { verifyOTP }