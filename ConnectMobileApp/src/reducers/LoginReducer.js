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
import storeLocationDataReducer from "./StoreLocationReducer";
import Unassigned_Chat_Reducer from "./Unassigned_Chat_Reducer";
import allChat_Conversation_Reducer from "./AllChat_Conversation_Reducer";
import FilterDataReducer from "./FilterDataReducer";
import OverAllReducer from "./OverAllReducer";
import GetReviewListReducer from "./GetReviewListReducer";
import PostListReducer from "./PostListReducer";
import OfferListReducer from "./OfferListReducer"
import CustomerReducer from "./CustomerReducer";
import GetLeadReducer from "./GetLeadReducer";

const loginDataReducer = (state = '', action) => {

    if(action.type == CONSTANT.DATA_SUCCESS) {
       
        return action.payload;
    }

    if (action.type == CONSTANT.DATA_ERROR) {
        return action.payload;
    }
    return state;
}

/****************** All combine reducers *******************/

const rootReducers = combineReducers({
    loginDataResponse: loginDataReducer,
    StoreLocationDataResponse: storeLocationDataReducer,
    Unassigned_Chat_Data: Unassigned_Chat_Reducer,
    allChat_Conversation_Data:allChat_Conversation_Reducer,

    FilterDataReducer_Responce:FilterDataReducer,

    OverAllReducer_ResponceData:OverAllReducer,
    GetReviewListData:GetReviewListReducer,
    
    CustomerResponseData: CustomerReducer,
    PostListResponceData:PostListReducer,
    OfferListResponceData:OfferListReducer,
    GetLeadResponseData: GetLeadReducer,

})

export default rootReducers;