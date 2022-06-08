/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: ResendOTP.js
** UsedFor: Resend OTP at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ====================================================================
** Resend OTP api file to send the OTP again for authentication using
** same mobile number
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
import {API_URL_DEV,API_URL_STAGING} from '../utility/Config_File'



/*
**
*
** resendOTP func is used for resend OTP.
*
**
*
** @param {*} mobileNumber Required!
*
** 
*/

const resendOTP = async (mobileNumber) => {

    /*
    **
    *
    ** constant defined to resend otp from the api
    *
    ** 
    */

    const bodyData = new FormData(); 
    bodyData.append('phonenumber',mobileNumber)
    const response = await fetch(API_URL_STAGING + '/user/auth/resendOTP', {
        method: 'POST',
        body:bodyData
    })

    /*
    **
    *
    ** data from the resend otp api
    *
    ** 
    */

    const data = response.json()
    console.log('mobile : ',data)

    /*
    **
    *
    ** if response is greater than 400 which means it is throwing error
    *
    ** 
    */

    if (response.status > 400) {
        throw new Error(data.errors)
    }
    return data;
}

/*
**
*
** All the constants defined above will be exported 
** so that it could be imported in resend otp file 
** & can be used as a common constants imported from 
** the constant file 
*
** 
*/

export {resendOTP}