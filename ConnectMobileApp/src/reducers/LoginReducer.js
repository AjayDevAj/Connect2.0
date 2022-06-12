/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: LoginReducer.js
** UsedFor: Login Reducer at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
** Login Reducer component
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
import otpDataReducer from './OtpReducer';
import ChatReducer from './ChatReducer';
import storeLocationDataReducer from "./StoreLocationReducer";
import Unassigned_Chat_Reducer from "./Unassigned_Chat_Reducer";
import resendotpDataReducer from "./ResendOtpReducer";


const loginDataReducer = (state = '', action) => {

    if(action.type == CONSTANT.DATA_SUCCESS) {
        return action.payload;
    }

    if (action.type == CONSTANT.DATA_ERROR) {
        return action.payload;
    }
    return state;
}

const rootReducers = combineReducers({
    loginDataResponse: loginDataReducer,
    OtpResponceData: otpDataReducer,
    ChatResponseData: ChatReducer,
    StoreLocationDataResponse: storeLocationDataReducer,
    Unassigned_Chat_Data: Unassigned_Chat_Reducer,
    ResendOtpResonceData:resendotpDataReducer


})

export default rootReducers;