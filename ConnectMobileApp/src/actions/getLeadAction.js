/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: CustomerAction.js
** UsedFor: Customer Action at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ================================================================
**  Customer Action file to control all Customer actions at a common page
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


const loadLeadData = (
    location_id,
    id,
    conversation_id
) => ({
    type: CONSTANT.GET_LEAD_DATA,
    location_id,
    id,
    conversation_id
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

const getLeadDataError = payload => ({
    type: CONSTANT.GET_LEAD_DATA_ERROR,
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

const getLeadDataResponse = payload => ({
    type: CONSTANT.GET_LEAD_DATA_SUCCESS,
    payload
});



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
    loadLeadData,
    getLeadDataError,
    getLeadDataResponse
}