/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: ChatAction.js
** UsedFor: Chat Action at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ================================================================
**  Chat Action file to control all chat actions at a common page
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

import { combineReducers } from "redux"

/*
**
*
** Constant define to load chat data in a common 
** constant imported from the constant file 
*
** 
*/

const loadChatData = (is_important, location_id, unread, order_by, chat_status,
     pagination, other_chat, user_id) => ({
   
    type: CONSTANT.CHAT_DATA,is_important,location_id,
    unread,order_by,chat_status,pagination,other_chat,user_id,
    
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
    type: CONSTANT.CHAT_DATA_ERROR,
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
    type: CONSTANT.CHAT_DATA_SUCCESS,
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
    loadChatData,
    getError,
    getResponse,
}