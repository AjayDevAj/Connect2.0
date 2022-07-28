/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: GetLeadReducer.js
** UsedFor: Get Lead Reducer at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**               Get Lead Reducer component
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

const GetLeadReducer = (state = '', action) => {
    if(action.type == CONSTANT.GET_LEAD_DATA_SUCCESS) {
        return action.payload;
    }

    if (action.type == CONSTANT.GET_LEAD_DATA_ERROR) {
        return action.payload;
    }

    return state;
}

export default GetLeadReducer;