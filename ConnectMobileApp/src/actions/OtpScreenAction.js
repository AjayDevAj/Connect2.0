/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: OtpScreenAction.js
** UsedFor: Get OTP at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ================================================================
** OTP Action file to control all otp actions at a common page
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

import { CONSTANT } from "../utility/Constant";



/*
**
*
** Constant define to load otp data i.e., mobile number
** & OTP in a common constant imported from the constant file 
*
** 
*/

const loadOtpData = (mobileNumber, otp) => ({
    type: CONSTANT.OTP_DATA,mobileNumber,otp
})



/*
**
*
** Constant define to get the error data 
** occured while sending otp using mobile number
** a common constant imported from the constant file 
*
** 
*/

const getError = payload => ({
    type: CONSTANT.OTP_DATA_ERROR,
    payload
})



/*
**
*
** Constant define to get the response data 
** from the otp section after a successful otp send
** a common constant imported from the constant file 
*
** 
*/

const getResponse = payload => ({
    type: CONSTANT.OTP_DATA_SUCCESS,
    payload
})



/*
**
*
** All the constants defined above will be exported 
** so that it could be imported in otp file 
** & can be used as a common constants imported from 
** the constant file 
*
** 
*/

export {
    loadOtpData,
    getError,
    getResponse,
}