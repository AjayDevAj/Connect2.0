/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: CustomerApi.js
** UsedFor: Customer API Calls at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ====================================================================
**                  Customer API Calls
** ====================================================================
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

import { API_URL_STAGING } from '../utility/Config_File'
import { getOtpResponse } from '../utility/StorageClass'
import { otpResponse_Storage_Key } from '../utility/Constant'
import { Alert } from 'react-native'



/*
**
*
** getCustomerList func is used for getting message list.
*
**
*
** @param {*} Required!
*
** 
*/

const getCustomerList = async (
    intent_id = '',
    entry_point = 0,
    channel = '',
    date_range = 0,
    location_id = '',
    chat_status = '',
    contact_details = '',
    assigned_to = 0,
    page = 0,
    user_page = 0,
    interest_page = 0,
    searchLocation = '',
    searchUser = '',
    interest = '',
    from_date = '',
    to_date = '',
    search = '',
    order_by = ''
) => {
    const token_Value = await getOtpResponse(otpResponse_Storage_Key)

    /*
    **
    *
    ** constant defined to get chat list from an api
    *
    ** 
    */

    var api_url = API_URL_STAGING + '/crm/customer-list?order_by=' + order_by;
    search !== null ? api_url = api_url + '&search=' + search : api_url = api_url

    console.log('API url', api_url);
    var headers = {
        Authorization:
            `Bearer ${token_Value.token}`,
        'Content-Type': 'application/json',
    }

    const response = await fetch(api_url, {
        method: 'GET',
        headers: headers,
        // body: JSON.stringify(bodyRawData),
    });

    /*
    **
    *
    ** data from the get chat list api
    *
    ** 
    */

    const data = response.json();
    /*
    **
    *
    ** if response is greater than 400 which means it is throwing error
    *
    ** 
    */
    console.log("Responce ====== ", response)
    switch (response.status) {
        case response.status > 400:
            throw new Error(data.errors);
            // if (response.status == 401) {
            //     navigation.navigate(NavigationString.LOGIN)
            // }
            // else {
            //     throw new Error(data.errors);
            // }
            break
        case 204:
            throw new Error("NO Data")
            break
        case 401:
            navigator.navigate(NavigationString.LOGIN)
    
        default: break
    }
    return data;
}

/*
**
*
** All the constants defined above will be exported 
** so that it could be imported in chat file 
** & can be used as a common constants imported from 
** the constant file 
*
** 
*/

export { getCustomerList }


