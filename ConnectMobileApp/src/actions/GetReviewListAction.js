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

/*
**
*
** Constant define to load chat data in a common 
** constant imported from the constant file 
*
** 
*/


const loadReviewListData = (
    master_outlet_id,
    enterprise_client_store_id,
) => ({
    type: CONSTANT.Get_Review_List_Data,
    master_outlet_id,
    enterprise_client_store_id,
});

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
    type: CONSTANT.Get_Review_List_Error,
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
    type: CONSTANT.Get_Review_List_SUCCESS,
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
    loadReviewListData,
    getError,
    getResponse,
}