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

const loadLoginData = (mobileNumber) => ({
    type: CONSTANT.LOGIN_DATA,mobileNumber
})

const getError = payload => ({
    type: CONSTANT.DATA_ERROR,
    payload
})

const getResponse = payload => ({
    type: CONSTANT.DATA_SUCCESS,
    payload
})

export {
    loadLoginData,
    getError,
    getResponse,
}