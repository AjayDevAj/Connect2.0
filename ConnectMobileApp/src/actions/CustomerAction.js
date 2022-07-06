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


const loadCustomerData = (
    intent_id,
    entry_point,
    channel,
    date_range,
    location_id,
    chat_status,
    contact_details,
    assigned_to,
    page,
    user_page,
    interest_page,
    searchLocation,
    searchUser,
    interest,
    from_date,
    to_date,
    search,
    order_by
) => ({
    type: CONSTANT.CUSTOMER_DATA,
    intent_id,
    entry_point,
    channel,
    date_range,
    location_id,
    chat_status,
    contact_details,
    assigned_to,
    page,
    user_page,
    interest_page,
    searchLocation,
    searchUser,
    interest,
    from_date,
    to_date,
    search,
    order_by
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
    type: CONSTANT.CUSTOMER_DATA_ERROR,
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
    type: CONSTANT.CUSTOMER_DATA_SUCCESS,
    payload
})



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
** Constant define to load chat data in a common 
** constant imported from the constant file 
*
** 
*/


const sendLeadData = (
    name,
    mobile_number,
    email,
    conversation_id,
    interests,
    comments,
    intents,
    entry_points,
    location_id,
    id
) => ({
    type: CONSTANT.SEND_LEAD_DATA,
    name,
    mobile_number,
    email,
    conversation_id,
    interests,
    comments,
    intents,
    entry_points,
    location_id,
    id
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

const sendLeadDataError = payload => ({
    type: CONSTANT.SEND_LEAD_DATA_ERROR,
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

const sendLeadDataResponse = payload => ({
    type: CONSTANT.SEND_LEAD_DATA_SUCCESS,
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
    loadCustomerData,
    getError,
    getResponse,

    loadLeadData,
    getLeadDataError,
    getLeadDataResponse,
    
    sendLeadData,
    sendLeadDataError,
    sendLeadDataResponse
}