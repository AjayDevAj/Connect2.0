/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: CustomerReducer.js
** UsedFor: Customer Reducer at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**               Customer Reducer component
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

const CustomerReducer = (state = '', action) => {

    if(action.type == CONSTANT.CUSTOMER_DATA_SUCCESS) {
        return action.payload;
    }

    if (action.type == CONSTANT.CUSTOMER_DATA_ERROR) {
        return action.payload;
    }

    return state;
}

export default CustomerReducer;