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
import allChat_Conversation_Reducer from "./AllChat_Conversation_Reducer";



const loginDataReducer = (state = '', action) => {

    if(action.type == CONSTANT.DATA_SUCCESS) {
       
        return action.payload;
    }

    if (action.type == CONSTANT.DATA_ERROR) {
        return action.payload;
    }
    return state;
}


// const appReducer = combineReducers({
//     /* your app’s top-level reducers */
//     loginDataResponse: loginDataReducer,
//     OtpResponceData: otpDataReducer,
//     ChatResponseData: ChatReducer,
//     StoreLocationDataResponse: storeLocationDataReducer,
//     Unassigned_Chat_Data: Unassigned_Chat_Reducer,
//     ResendOtpResonceData:resendotpDataReducer
//   })

//   const rootReducers = (state, action) => {
//     // when a  action is dispatched it will reset redux state
//     // if (action.type === CONSTANT.OTP_DATA_SUCCESS) {
//     //   state = undefined;
//     //   console.log('reset staTE FROM THE reducer ---------------->',state)
//     // }
  
//     return appReducer(state, action);
//   };


const rootReducers = combineReducers({
    
    loginDataResponse: loginDataReducer,
    OtpResponceData: otpDataReducer,
    ChatResponseData: ChatReducer,
    StoreLocationDataResponse: storeLocationDataReducer,
    Unassigned_Chat_Data: Unassigned_Chat_Reducer,
    allChat_Conversation_Data:allChat_Conversation_Reducer

})

export default rootReducers;