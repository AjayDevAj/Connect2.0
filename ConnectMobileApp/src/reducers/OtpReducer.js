/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: OtpReducer.js
** UsedFor: OTP Reducer at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
** OTP Reducer component
** ==========================================================
*
**
*/


/*
**
*
** Common react packages import
*
** 
*/

import { CONSTANT } from "../utility/Constant";
import { combineReducers } from "redux";

const otpDataReducer = (state = '', action) => {
   

    if(action.type == CONSTANT.OTP_DATA_SUCCESS) {
        state=undefined
       return action.payload;
       
    }

    if(action.type == CONSTANT.Resend_OTP_DATA_SUCCESS) {
       
        return action.payload;
    }

    if (action.type == CONSTANT.OTP_DATA_ERROR) {
        
        return action.payload;
       
    }

    if (action.type == CONSTANT.Resend_OTP_DATA_ERROR) {
        return action.payload;
    }
    return state;

}
export default otpDataReducer;