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

const OverAllReducer = (state = '', action) => {

    if(action.type == CONSTANT.OverAllRatingSUCCESS) {
        return action.payload;
    }

    if (action.type == CONSTANT.OverAllRatingERROR) {
        return action.payload;
    }

    return state;
}

export default OverAllReducer;