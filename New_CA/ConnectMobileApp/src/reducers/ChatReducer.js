/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: ChatReducer.js
** UsedFor: Chat Reducer at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**               Chat Reducer component
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

const ChatReducer = (state = '', action) => {

    if(action.type == CONSTANT.CHAT_DATA_SUCCESS) {
        return action.payload;
    }

    if (action.type == CONSTANT.CHAT_DATA_ERROR) {
        return action.payload;
    }

    return state;
}

export default ChatReducer;