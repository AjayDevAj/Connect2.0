import {API_URL_DEV,API_URL_STAGING} from '../utility/Config_File'

/**
 * getOtp func is used for otp vailidation.
 * * 
 * @param {*} otp Required!
 */
const getOtp = async (mobileNumber) => {
    const bodyData = new FormData(); 
    bodyData.append()
    const response = await fetch(API_URL_DEV + '/user/auth/getOTP', {
        method: 'POST',
        body:bodyData
    })
    const data = response.json()
    

      if (response.status > 400) {
          throw new Error(data.errors)
      }
      return data;
}
export {getOtp}