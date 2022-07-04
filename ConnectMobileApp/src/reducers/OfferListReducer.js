/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: ChatReducer.js
** UsedFor: OfferList Reducer at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**               Offer List Reducer component
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

const OfferListReducer = (state = '', action) => {

    if(action.type == CONSTANT.OFFER_LIST_DATA_SUCCESS) {
        return action.payload;
    }

    if (action.type == CONSTANT.OFFER_LIST_DATA_ERROR) {
        return action.payload;
    }

    return state;
}

export default OfferListReducer;