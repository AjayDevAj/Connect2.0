import {API_URL_DEV,API_URL_STAGING} from '../utility/Config_File'

/**
 * resendOTP func is used for resend OTP.
 * * 
 * @param {*} mobileNumber Required!
 */
const resendOTP = async (mobileNumber) => {
    const bodyData = new FormData(); 
    bodyData.append('phonenumber',mobileNumber)
    const response = await fetch(API_URL_STAGING + '/user/auth/resendOTP', {
        method: 'POST',
        body:bodyData
    })
    const data = response.json()
    console.log('mobile : ',data)

      if (response.status > 400) {
          throw new Error(data.errors)
      }
      return data;
}
export {resendOTP}

