/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: LoginAction.js
** UsedFor: Login at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ================================================================
** Login Action file to control all login actions at a common page
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
** Constant define to load login data i.e., mobile number
** in a common constant imported from the constant file 
*
** 
*/

const loadLoginData = (mobileNumber) => ({
    type: CONSTANT.LOGIN_DATA,mobileNumber
})



/*
**
*
** Constant define to get the error data 
** occured while login using mobile number
** a common constant imported from the constant file 
*
** 
*/

const getError = payload => ({
    type: CONSTANT.DATA_ERROR,
    payload
})



/*
**
*
** Constant define to get the response data 
** from the login section after a successful login
** a common constant imported from the constant file 
*
** 
*/

const getResponse = payload => ({
    type: CONSTANT.DATA_SUCCESS,
    payload
})



/*
**
*
** All the constants defined above will be exported 
** so that it could be imported in login file 
** & can be used as a common constants imported from 
** the constant file 
*
** 
*/

export {
    loadLoginData,
    getError,
    getResponse,
}