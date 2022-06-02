import {API_URL_DEV,API_URL_STAGING} from '../utility/Config_File'
import DeviceInfo from 'react-native-device-info';

/** * Get device mac id */
const mac = await DeviceInfo.getMacAddress().then((mac) => {return mac});

/** * Get device ip */
const ip = await DeviceInfo.getIpAddress().then((ip) => {return ip});

/** * Get device UniqueId */
const uniqueId = await DeviceInfo.getUniqueId();

/**
 *  Verify OTP
 * @param {*} mobileNumber 
 * @param {*} otp 
 */
const verifyOTP = async (mobileNumber,otp) => {

    const response = await fetch(API_URL_DEV + '/user/auth/get-locations', {
        method: 'get',
        body:{
            phonenumber: mobileNumber,
            otp: otp,
            device_type: Platform.OS == 'ios' ? 'iOS' : 'android',
            // device_token: fcmToken,
             uid: uniqueId,
             ip: ip,
             mac: mac,
             loged_in: 0,
          }
    })
      const data = response.json()

      if (response.status > 400) {
          throw new Error(data.errors)
      }
      return data;
}
export {verifyOTP}