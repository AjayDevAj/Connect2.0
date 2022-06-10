/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: LoginAction.js
** UsedFor: Unassigned_Chat at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ===================================================================
** Unassigned Chat Action file to control all otp actions at a common page
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

const Unassigned_Chat= () => ({
    type: CONSTANT.Unassigned_Chat_Data
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

const getError_Unassigned_Chat = payload => ({
    type: CONSTANT.Unassigned_Chat_ERROR,
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

const getResponse_Unassigned_Chat = payload => ({
    type: CONSTANT.Unassigned_Chat_SUCCESS,
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
    Unassigned_Chat,
    getError_Unassigned_Chat,
    getResponse_Unassigned_Chat,
}