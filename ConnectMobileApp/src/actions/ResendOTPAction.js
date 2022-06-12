/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: LoginAction.js
** UsedFor: Resend OTP at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ===================================================================
** Resend OTP Action file to control all otp actions at a common page
** ===================================================================
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

import { CONSTANT } from "../utility/Constant";



/*
**
*
** Constant define to load resend otp data i.e., OTP
** if timeout it needs to be resend along with mobile data
** in a common constant imported from the constant file 
*
** 
*/

const loadOtpData_Resend = (mobileNumber) => ({
    type: CONSTANT.Resend_OTP_DATA,mobileNumber
    
})



/*
**
*
** Constant define to get the error data 
** occured while resending otp using mobile number
** a common constant imported from the constant file 
*
** 
*/

const getError_Resend = payload => ({
    type: CONSTANT.Resend_OTP_DATA_ERROR,
    payload
})



/*
**
*
** Constant define to get the response data 
** from the resend otp section after a successful otp
** a common constant imported from the constant file 
*
** 
*/

const getResponse_Resend = payload => ({
    type: CONSTANT.Resend_OTP_DATA_SUCCESS,
    payload
})



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

export {
    loadOtpData_Resend,
    getError_Resend,
    getResponse_Resend,
}